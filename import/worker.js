/**
 * Worker de l'outil d'import : charge Pyodide (Python dans le navigateur)
 * et fmsave, puis lit la sauvegarde .fm sans la copier en mémoire (WORKERFS).
 * Rien n'est envoyé sur internet : le fichier reste dans le navigateur.
 *
 * Messages reçus :  { type:'open', file, pyodideBase? }   { type:'extract', club }
 * Messages envoyés : { type:'status', text }  { type:'opened', data }
 *                    { type:'extracted', data }  { type:'error', text }
 */

const PYODIDE_BASE = 'https://cdn.jsdelivr.net/npm/pyodide@314.0.7/'
const FMSAVE_WHEEL = 'fmsave-0.5.10-py3-none-any.whl'

let py = null

async function boot(base) {
  if (py) return py
  status('Chargement de Python (≈ 12 Mo, une seule fois)…')
  const { loadPyodide } = await import(base + 'pyodide.mjs')
  py = await loadPyodide({ indexURL: base })

  status('Chargement du lecteur de sauvegarde…')
  const [wheel, script] = await Promise.all([
    fetch(FMSAVE_WHEEL).then(r => { if (!r.ok) throw new Error('fmsave introuvable'); return r.arrayBuffer() }),
    fetch('extract.py').then(r => { if (!r.ok) throw new Error('extract.py introuvable'); return r.text() }),
  ])
  py.FS.writeFile('/tmp/fmsave.whl', new Uint8Array(wheel))
  py.FS.writeFile('/tmp/extract.py', script)
  py.runPython(`
import sys, zipfile, warnings
warnings.simplefilter("ignore")
zipfile.ZipFile("/tmp/fmsave.whl").extractall("/tmp/site")
sys.path[:0] = ["/tmp/site", "/tmp"]
import extract
`)
  return py
}

function status(text) { postMessage({ type: 'status', text }) }

onmessage = async (e) => {
  const msg = e.data
  try {
    if (msg.type === 'open') {
      await boot(msg.pyodideBase || PYODIDE_BASE)
      status('Ouverture de la sauvegarde…')
      try { py.FS.unmount('/save') } catch (_) {}
      try { py.FS.mkdir('/save') } catch (_) {}
      py.FS.mount(py.FS.filesystems.WORKERFS, { files: [msg.file] }, '/save')
      py.globals.set('save_path', '/save/' + msg.file.name)
      const out = py.runPython('extract.open_save(save_path)')
      postMessage({ type: 'opened', data: JSON.parse(out) })
    } else if (msg.type === 'extract') {
      status('Lecture des matchs, classements et stats… (30 s à 1 min)')
      py.globals.set('club_uid', msg.club)
      const out = py.runPython('extract.extract(club_uid)')
      postMessage({ type: 'extracted', data: JSON.parse(out) })
    }
  } catch (err) {
    const text = String(err && err.message || err)
    const last = text.trim().split('\n').pop()
    postMessage({ type: 'error', text: last || text })
  }
}
