/* ═══════════════════════════════════════════════
   UTILS PARTAGÉS
═══════════════════════════════════════════════ */

const LEAGUE_STYLES = {
  'National':       { bg:'rgba(70,120,220,0.18)',  border:'#4678dc', color:'#7aabff' },
  'Ligue 2':        { bg:'rgba(140,70,220,0.18)',  border:'#8c46dc', color:'#bc88ff' },
  'Ligue 1':        { bg:'rgba(220,70,100,0.18)',  border:'#dc4664', color:'#ff8aa0' },
  'Bundesliga':     { bg:'rgba(220,30,30,0.18)',   border:'#dc1e1e', color:'#ff6b6b' },
  'Bundesliga 2':   { bg:'rgba(220,120,30,0.18)',  border:'#dc781e', color:'#ffaa6b' },
  'La Liga':        { bg:'rgba(180,30,30,0.18)',   border:'#b41e1e', color:'#ff8c8c' },
  'Premier League': { bg:'rgba(60,0,130,0.18)',    border:'#6e00d4', color:'#bb88ff' },
  'Eredivisie':     { bg:'rgba(220,0,0,0.18)',      border:'#cc0000', color:'#ff6666'  },
  'National League South': { bg:'rgba(43,75,155,0.22)', border:'#2b4b9b', color:'#8fa8ff' },
}

const C = {
  navy:'#07111f', blue:'#0c2259', mid:'#152d72', gold:'#e8b84b',
  goldL:'#f6d98e', white:'#eef2ff', muted:'#6a82b0', green:'#3dd68c', red:'#e85050'
}

function leagueStyle(league) {
  return LEAGUE_STYLES[league] || LEAGUE_STYLES['National']
}

function resultColor(r) {
  return r === 'W' ? C.green : r === 'D' ? C.gold : C.red
}

function posLabel(n) {
  return n === 1 ? '1er' : `${n}e`
}

/* ── Saison "en cours" : agrège les mois en bilan ──
   Calcule V/N/D, buts pour/contre et points À PARTIR des matchs,
   pour que les mises à jour mensuelles ne demandent qu'à ajouter
   un bloc { label, matches:[...] } dans season.months.            */
function liveMatches(season) {
  if (season.months && season.months.length)
    return season.months.reduce((acc, m) => acc.concat(m.matches || []), [])
  return season.matches || []
}

function parseTip(tip) {
  const mm = (tip || '').match(/\((D|E)\)\s*(\d+)\s*-\s*(\d+)/)
  if (!mm) return null
  const home = +mm[2], away = +mm[3]
  return mm[1] === 'D' ? { gf: home, ga: away } : { gf: away, ga: home }
}

function liveSummary(season) {
  const all = liveMatches(season)
  // Bilan = CHAMPIONNAT uniquement (comp absent, 'L' ou 'BL' ; amicaux 'AM' et coupes exclus)
  const ms = all.filter(m => !m.comp || m.comp === 'L' || m.comp === 'BL')
  let w = 0, d = 0, l = 0, gf = 0, ga = 0
  ms.forEach(m => {
    if (m.r === 'W') w++; else if (m.r === 'D') d++; else if (m.r === 'L') l++
    const sc = parseTip(m.tip)
    if (sc) { gf += sc.gf; ga += sc.ga }
  })
  // Position : ligne surlignée du classement si dispo, sinon champ manuel
  let position = season.position != null ? season.position : null
  if (season.standings && season.standings.length) {
    const hl = season.standings.find(r => r.highlight)
    if (hl) position = hl.pos
  }
  return { matches: ms, played: ms.length, wins: w, draws: d, losses: l, gf, ga, points: 3 * w + d, position }
}

function gd(gf, ga) {
  const d = gf - ga
  return d >= 0 ? `+${d}` : `${d}`
}

function param(key) {
  return new URLSearchParams(window.location.search).get(key)
}

function getSeason(id) {
  const careerId = param('career') || getCurrentCareer().id
  return (window['SEASONS_' + careerId] || []).find(s => s.id === id)
}

/* ── Career switcher modal ── */
function renderCareerSwitcher() {
  return `
    <div id="career-modal" onclick="closeCareerModal(event)" style="display:none;position:fixed;inset:0;z-index:9999;background:rgba(7,17,31,.85);backdrop-filter:blur(6px);align-items:center;justify-content:center">
      <div onclick="event.stopPropagation()" style="background:#0c2259;max-width:480px;width:calc(100% - 48px);padding:36px;position:relative">
        <div class="bc" style="font-size:9px;letter-spacing:6px;color:${C.gold};font-weight:700;margin-bottom:24px">CHANGER DE CARRIÈRE</div>
        <div style="display:flex;flex-direction:column;gap:3px">
          ${window.CAREERS.map(c => {
            const active = window.getCurrentCareer().id === c.id
            return `
              <div onclick="switchCareer('${c.id}')"
                style="display:flex;align-items:center;gap:16px;padding:16px 18px;cursor:pointer;
                       background:${active?'rgba(232,184,75,.1)':'transparent'};
                       border-left:3px solid ${active?C.gold:'transparent'};
                       transition:background .15s"
                onmouseover="if('${c.id}'!=='${window.getCurrentCareer().id}')this.style.background='rgba(255,255,255,.04)'"
                onmouseout="if('${c.id}'!=='${window.getCurrentCareer().id}')this.style.background='transparent'">
                <img src="${(window.LOGO_PATH||'')}${c.logo}" onerror="this.style.display='none'" style="width:36px;height:36px;object-fit:contain;flex-shrink:0"/>
                <div style="flex:1">
                  <div style="font-size:14px;font-weight:500;color:${active?C.gold:C.white}">${c.name}${c.coach?'<span style="color:'+C.muted+';font-weight:400"> - '+c.coach+'</span>':''}</div>
                  <div class="bc" style="font-size:11px;color:${C.muted};margin-top:2px;letter-spacing:1px">${c.country}${c.status==='en_cours'?' · <span style="color:'+C.green+'">● En cours</span>':c.status==='terminee'?' · Terminée':''}</div>
                </div>
                ${active ? `<div class="bc" style="font-size:9px;letter-spacing:3px;color:${C.gold};font-weight:700">ACTIF</div>` : ''}
              </div>
            `
          }).join('')}
        </div>
        <button onclick="closeCareerModal()" class="bc" style="margin-top:24px;width:100%;padding:12px;background:transparent;border:1px solid rgba(106,130,176,.3);color:${C.muted};font-size:11px;letter-spacing:4px;transition:border-color .2s"
          onmouseover="this.style.borderColor='rgba(232,184,75,.4)'" onmouseout="this.style.borderColor='rgba(106,130,176,.3)'">FERMER</button>
      </div>
    </div>
  `
}

function openCareerModal() {
  const m = document.getElementById('career-modal')
  if (m) { m.style.display = 'flex'; }
}

function closeCareerModal(e) {
  if (!e || e.target === document.getElementById('career-modal')) {
    const m = document.getElementById('career-modal')
    if (m) m.style.display = 'none'
  }
}

function switchCareer(id) {
  if (id === window.getCurrentCareer().id) { closeCareerModal(); return; }
  window.setCurrentCareer(id)
  window.location = '../' + id + '/'
}

/* ── Career switcher button ── */
function renderSwitcherBtn(label) {
  return `
    <button onclick="openCareerModal()" class="bc" style="background:transparent;border:1px solid rgba(232,184,75,.25);color:${C.muted};font-size:9px;letter-spacing:3px;padding:7px 14px;cursor:pointer;font-family:inherit;transition:all .2s;display:flex;align-items:center;gap:8px"
      onmouseover="this.style.borderColor='rgba(232,184,75,.6)';this.style.color='${C.gold}'"
      onmouseout="this.style.borderColor='rgba(232,184,75,.25)';this.style.color='${C.muted}'">
      ⇄ ${label || 'CARRIÈRES'}
    </button>
  `
}

/* ── Load career data dynamically ── */
function loadCareerData(callback) {
  const career = window.getCurrentCareer()
  // If already loaded for this career, just call back
  if (window['SEASONS_' + career.id]) {
    callback(career)
    return
  }
  // Remove previous script if any
  const old = document.getElementById('career-data-script')
  if (old) old.remove()

  const script = document.createElement('script')
  script.id  = 'career-data-script'
  script.src = career.file
  script.onload = () => {
    window._loadedCareer = career.id
    callback(career)
  }
  document.head.appendChild(script)
}

/* Render match dots grid */
function renderDots(matches, cols) {
  if (!matches || !matches.length) return ''
  const n = cols || Math.min(matches.length, 38)
  return `
    <div style="display:grid;grid-template-columns:repeat(${n},1fr);gap:5px;margin-bottom:14px">
      ${matches.map((m,i) => `
        <div class="rdot" data-tip="J${i+1} · ${m.tip}"
          style="background:${resultColor(m.r)};"></div>
      `).join('')}
    </div>
    <div style="display:flex;gap:18px">
      ${[['Victoire',C.green],['Nul',C.gold],['Défaite',C.red]].map(([l,c])=>`
        <div style="display:flex;align-items:center;gap:6px">
          <div style="width:9px;height:9px;border-radius:2px;background:${c}"></div>
          <span class="bc" style="font-size:10px;letter-spacing:2px;color:${C.muted}">${l}</span>
        </div>
      `).join('')}
    </div>
  `
}

/* Render perf list */
function renderPerfList(title, items, unit, color) {
  if (!items || !items.length) return ''
  const col = color || C.gold
  return `
    <div>
      <div class="bc sec-title" style="color:${col};border-color:${col}33">${title}</div>
      ${items.map((item,i) => `
        <div class="perf-row">
          <div class="bb" style="font-size:24px;color:${C.gold};width:22px;flex-shrink:0">${i+1}</div>
          <div style="flex:1">
            <div style="font-size:13px;font-weight:500">${item.name}</div>
            <div class="bc" style="font-size:11px;color:${C.muted};margin-top:2px">${item.detail}</div>
          </div>
          <div style="text-align:right">
            <div class="bb" style="font-size:32px;color:${C.goldL};line-height:1">${item.value==null?'':String(unit).indexOf('moy')===0?Number(item.value).toFixed(2):item.value}</div>
            ${item.value==null?'':`<div class="bc" style="font-size:9px;color:${C.muted};letter-spacing:2px;text-transform:uppercase">${unit}</div>`}
          </div>
        </div>
      `).join('')}
    </div>
  `
}

/* Render transfer list */
function renderTransfList(transfers) {
  if (!transfers || !transfers.length) return ''
  return `
    <div>
      <div class="bc sec-title" style="color:${C.green};border-color:${C.green}33">↑ Mercato · Arrivées</div>
      ${transfers.map(t => `
        <div class="transf-row">
          <span class="bc badge" style="background:${t.type==='free'?'rgba(61,214,140,0.12)':'rgba(232,184,75,0.12)'};border:1px solid ${t.type==='free'?C.green:C.gold};color:${t.type==='free'?C.green:C.gold}">
            ${t.type==='free'?'LIBRE':t.type==='loan'?'PRÊT':'TRANSFERT'}
          </span>
          <span style="flex:1;font-size:13px;font-weight:500">${t.name}</span>
          <div style="text-align:right">
            <div class="bc" style="font-size:12px;color:${C.muted}">${t.from}</div>
            ${t.amount ? `<div class="bc" style="font-size:11px;color:${C.gold};margin-top:2px;font-weight:600">${t.amount}</div>` : ''}
            <div class="bc" style="font-size:10px;color:${C.muted};margin-top:1px">${t.date}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `
}

/* Render departure list */
function renderDepartList(departures) {
  if (!departures || !departures.length) return ''
  const typeLabel = t => t==='loan'?'PRÊT':t==='sell'?'TRANSFERT':'FIN CTR'
  const typeBg    = t => t==='loan'?'rgba(232,184,75,0.12)':t==='sell'?'rgba(232,80,80,0.12)':'rgba(106,130,176,0.12)'
  const typeCol   = t => t==='loan'?C.gold:t==='sell'?C.red:C.muted
  return `
    <div>
      <div class="bc sec-title" style="color:${C.red};border-color:${C.red}33">↓ Mercato · Départs</div>
      ${departures.map(t => `
        <div class="transf-row">
          <span class="bc badge" style="background:${typeBg(t.type)};border:1px solid ${typeCol(t.type)};color:${typeCol(t.type)}">
            ${typeLabel(t.type)}
          </span>
          <span style="flex:1;font-size:13px;font-weight:500">${t.name}</span>
          <div style="text-align:right">
            <div class="bc" style="font-size:12px;color:${C.muted}">${t.to}</div>
            ${t.amount ? `<div class="bc" style="font-size:11px;color:${C.gold};margin-top:2px;font-weight:600">${t.amount}</div>` : ''}
            <div class="bc" style="font-size:10px;color:${C.muted};margin-top:1px">${t.date}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `
}

/* Render standings table
   opts : { league, europe:true (phase de championnat européenne), final:true (classement final) }
   Zones et légende : standings-zones.js */
function renderStandings(rows, opts) {
  if (!rows || !rows.length) return ''
  const o = opts || {}
  const SZ = window.StandingsZones
  const keys = SZ ? SZ.keys(rows, o) : rows.map(() => null)
  const legend = SZ ? SZ.legend(keys, o.final) : []
  const headers = ['','Équipe','J','G','N','D','BP','BC','DB','Pts']
  return `
    <div>
      <div class="standings-row" style="border-bottom:1px solid rgba(255,255,255,.08);border-left:3px solid transparent">
        ${headers.map((c,i) => `
          <div class="bc" style="font-size:9px;letter-spacing:2px;color:${C.muted};text-align:${i>1?'center':'left'};font-weight:700">${c}</div>
        `).join('')}
      </div>
      ${rows.map((row, i) => `
        <div class="standings-row ${row.highlight?'highlight':''} ${keys[i]?'zoned':''}"${keys[i]?` style="--zc:${SZ.color(keys[i])}"`:''}>
          <div class="bb" style="font-size:15px;color:${row.pos<=2?C.gold:C.muted}">${row.pos}</div>
          <div style="font-weight:${row.highlight?600:400};font-size:13px">${row.team}</div>
          ${[row.j,row.g,row.n,row.l,row.bp,row.bc,row.db>0?'+'+row.db:row.db].map(v=>`
            <div style="text-align:center;color:${C.muted};font-size:11px">${v}</div>
          `).join('')}
          <div class="bb" style="text-align:center;font-size:19px;color:${C.gold}">${row.pts}</div>
        </div>
      `).join('')}
      ${legend.length ? `<div class="std-legend">${legend.map(z => `<span class="bc"><i style="background:${z.color}"></i>${z.label}</span>`).join('')}</div>` : ''}
    </div>
  `
}

/* Distinctions de la saison (champ "awards") : entraîneur du mois, etc. */
function awardRow(a, right) {
  return `<div style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:rgba(232,184,75,.08);border:1px solid rgba(232,184,75,.3)">
    <span style="font-size:20px">🏅</span>
    <div style="flex:1;min-width:0">
      <div class="bc" style="font-size:14px;letter-spacing:1px">${a.label}${a.winner ? ` · <span style="color:var(--gold)">${a.winner}</span>` : ''}</div>
      ${a.detail ? `<div class="bc" style="font-size:11px;color:var(--muted);letter-spacing:1px;margin-top:3px;line-height:1.4">${a.detail}</div>` : ''}
    </div>
    <span class="bc" style="font-size:11px;color:var(--muted);letter-spacing:2px;white-space:nowrap">${right || ''}</span>
  </div>`
}
function renderSeasonAwards(s) {
  const as = (s && s.awards) || []
  if (!as.length) return ''
  return `<div style="margin-bottom:60px"><div class="bc sec-title">Distinctions</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:3px">${as.map(a => awardRow(a, a.period)).join('')}</div></div>`
}

/* Profil de l'entraîneur (champ "coachProfile" de careers.js) */
function renderCoachProfile(career) {
  const p = career && career.coachProfile
  if (!p) return ''
  const line = (k, v) => v ? `<div style="display:flex;justify-content:space-between;gap:16px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.05)"><span class="bc" style="font-size:11px;letter-spacing:2px;color:var(--muted);text-transform:uppercase">${k}</span><span class="bc" style="font-size:14px;text-align:right">${v}</span></div>` : ''
  return `<div class="bc sec-title">Profil de l'entraîneur</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:3px;margin-bottom:48px">
      <div style="background:var(--blue);padding:22px 24px">
        <div class="bb" style="font-size:34px;line-height:1;letter-spacing:1px">${career.coach}</div>
        <div class="bc" style="font-size:12px;color:var(--gold);letter-spacing:2px;margin:6px 0 12px">${[p.nat, p.born ? 'né le ' + p.born : ''].filter(Boolean).join(' · ')}</div>
        ${line('Réputation', p.reputation)}${line('Style tactique', p.style)}${line('Personnalité', p.personality)}${line('Langues', p.languages)}${line('Contrat', p.contract)}
      </div>
      <div style="background:var(--blue);padding:22px 24px">
        <div class="bc" style="font-size:9px;letter-spacing:3px;color:var(--muted);font-weight:700;margin-bottom:6px">POINTS FORTS</div>
        ${(p.strengths || []).map(([k, v]) => line(k, `<span style="color:var(--green)">${v}</span>`)).join('')}
        ${p.traits && p.traits.length ? `<div class="bc" style="font-size:9px;letter-spacing:3px;color:var(--muted);font-weight:700;margin:18px 0 8px">TENDANCES</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px">${p.traits.map(t => `<span class="bc" style="font-size:12px;border:1px solid rgba(255,255,255,.14);padding:4px 10px">${t}</span>`).join('')}</div>` : ''}
      </div>
    </div>`
}

/* Records battus pendant une saison (champ "records") — tous restent affichés,
   même quand un record tombe plusieurs fois dans la saison */
function renderSeasonRecords(s) {
  const rs = (s && s.records) || []
  if (!rs.length) return ''
  return `<div style="margin-bottom:60px"><div class="bc sec-title">Records battus</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:3px">
      ${rs.map(r => `
        <div style="background:var(--blue);padding:22px 22px 20px;border-left:3px solid var(--gold)">
          <div class="bc" style="font-size:9px;letter-spacing:3px;color:var(--muted);text-transform:uppercase;font-weight:700">${r.label}</div>
          <div class="bb" style="font-size:40px;line-height:1;margin-top:10px;color:var(--gold)">${r.value}</div>
          <div class="bc" style="font-size:12px;color:var(--muted);letter-spacing:1px;margin-top:6px;line-height:1.4">${[r.detail, r.date].filter(Boolean).join(' · ')}</div>
        </div>`).join('')}
    </div></div>`
}

/* Mercato preview card */
function renderMercatoPreview(season, careerId) {
  careerId = careerId || getCurrentCareer().id
  const arr = season.transfers || []
  const dep = season.departures || []
  if (!arr.length && !dep.length) return ''

  const previewRow = (t, type) => {
    const isArr = type === 'arr'
    const label = isArr ? (t.type==='free'?'LIBRE':t.type==='loan'?'PRÊT':'TRANSFERT') : (t.type==='loan'?'PRÊT':t.type==='sell'?'TRANSFERT':'FIN CTR')
    const col   = isArr ? (t.type==='free'?C.green:C.gold) : (t.type==='loan'?C.gold:t.type==='sell'?C.red:C.muted)
    const dest  = isArr ? t.from : t.to
    return `
      <div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.04);font-size:12px">
        <span class="bc" style="font-size:8px;letter-spacing:1px;padding:2px 6px;font-weight:700;flex-shrink:0;border:1px solid ${col};color:${col};background:${col}18">${label}</span>
        <span style="flex:1">${t.name}</span>
        <span class="bc" style="font-size:11px;color:${C.muted}">${dest}</span>
      </div>
    `
  }

  return `
    <div class="mercato-card" onclick="window.location='mercato.html?id=${season.id}&career=${careerId}'">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <div class="bc sec-title" style="margin:0;padding:0;border:none">Mercato</div>
        <div class="bc" style="font-size:10px;letter-spacing:3px;color:${C.gold};font-weight:700">VOIR TOUT →</div>
      </div>
      ${arr.length ? `
        <div style="margin-bottom:14px">
          <div class="bc" style="font-size:9px;letter-spacing:3px;color:${C.green};margin-bottom:8px;font-weight:700">↑ ARRIVÉES</div>
          ${arr.slice(0,3).map(t=>previewRow(t,'arr')).join('')}
          ${arr.length>3?`<div class="bc" style="font-size:10px;color:${C.muted};margin-top:6px;letter-spacing:2px">+${arr.length-3} autres arrivées</div>`:''}
        </div>
      ` : ''}
      ${dep.length ? `
        <div>
          <div class="bc" style="font-size:9px;letter-spacing:3px;color:${C.red};margin-bottom:8px;font-weight:700">↓ DÉPARTS</div>
          ${dep.slice(0,3).map(t=>previewRow(t,'dep')).join('')}
          ${dep.length>3?`<div class="bc" style="font-size:10px;color:${C.muted};margin-top:6px;letter-spacing:2px">+${dep.length-3} autres départs</div>`:''}
        </div>
      ` : ''}
    </div>
  `
}

/* ── Bascule vers le nouveau design (v2/) ──
   Un bouton sur chaque page ouvre la page équivalente du nouveau
   design. Le choix est mémorisé : l'accueil redirige vers v2 tant
   qu'on n'est pas revenu au design actuel depuis v2.             */
;(function () {
  const KEY = 'lbc-design'
  const inCareer = typeof window.FORCE_CAREER !== 'undefined'
  const base = inCareer ? '../' : ''
  function target() {
    const id = new URLSearchParams(location.search).get('id')
    const career = inCareer ? window.FORCE_CAREER : (window.getCurrentCareer ? window.getCurrentCareer().id : '')
    if (inCareer && id && /(saison|mercato|splash)\.html$/.test(location.pathname)) return `${base}v2/#/c/${career}/${id}`
    return inCareer && career ? `${base}v2/#/c/${career}` : `${base}v2/`
  }
  let pref = null
  try { pref = localStorage.getItem(KEY) } catch (_) {}
  if (!inCareer && pref === 'v2') { location.replace(target()); return }

  function addButton() {
    // L'accueil a déjà son encadré « Nouveauté »
    if (document.getElementById('v2-switch') || document.getElementById('news-cta')) return
    const a = document.createElement('a')
    a.id = 'v2-switch'
    a.href = target()
    a.textContent = '✦ Nouveau design'
    a.setAttribute('style', 'position:fixed;right:18px;bottom:18px;z-index:9999;font:600 12px/1 "Barlow Condensed",sans-serif;letter-spacing:2px;text-transform:uppercase;text-decoration:none;color:#07111f;background:#e8b84b;padding:12px 16px;border-radius:999px;box-shadow:0 8px 24px rgba(0,0,0,.35)')
    a.addEventListener('click', () => { try { localStorage.setItem(KEY, 'v2') } catch (_) {} })
    document.body.appendChild(a)
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addButton)
  else addButton()
})()

/* ── Bilan de carrière (pages carrière) ──
   Records, vitrine, domicile / extérieur, mercato cumulé et bilan
   par adversaire, calculés par career-stats.js à partir des saisons. */
function renderCareerExtras(seasons) {
  const host = document.getElementById('career-extras')
  if (!host || !window.CareerStats || !seasons || !seasons.length) return
  const st = window.CareerStats.compute(seasons)
  const money = window.CareerStats.formatMoney
  if (!document.getElementById('cx-style')) {
    const css = document.createElement('style')
    css.id = 'cx-style'
    css.textContent = `
      .cx-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:3px}
      .cx-box{background:var(--blue);padding:22px 22px 20px;position:relative;overflow:hidden}
      .cx-k{font-family:'Barlow Condensed',sans-serif;font-size:9px;letter-spacing:3px;color:var(--muted);text-transform:uppercase;font-weight:700}
      .cx-v{font-family:'Bebas Neue',sans-serif;font-size:40px;line-height:1;margin-top:10px}
      .cx-d{font-family:'Barlow Condensed',sans-serif;font-size:12px;color:var(--muted);letter-spacing:1px;margin-top:6px;line-height:1.4}
      .cx-d b{color:var(--white);font-weight:600}
      .cx-trophy{display:flex;align-items:center;gap:10px;padding:12px 16px;background:rgba(232,184,75,.08);border:1px solid rgba(232,184,75,.3);font-family:'Barlow Condensed',sans-serif;font-size:14px;letter-spacing:1px}
      .cx-trophy.final{background:transparent;border-color:rgba(106,130,176,.25);color:var(--muted)}
      .cx-trophy span{font-size:11px;color:var(--muted);letter-spacing:2px;margin-left:auto;white-space:nowrap}
      .cx-wrap{overflow-x:auto}
      .cx-table{width:100%;border-collapse:collapse;font-family:'Barlow Condensed',sans-serif;font-size:13px;min-width:480px}
      .cx-table th{font-size:9px;letter-spacing:3px;color:var(--muted);font-weight:700;text-align:right;padding:10px 8px;border-bottom:1px solid rgba(255,255,255,.08)}
      .cx-table th:first-child,.cx-table td:first-child{text-align:left}
      .cx-table td{padding:8px;text-align:right;border-bottom:1px solid rgba(255,255,255,.04)}
      .cx-fold summary{cursor:pointer;font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:3px;color:var(--gold);font-weight:700;padding:14px 0;list-style:none}
      .cx-fold summary::before{content:'＋ '}
      .cx-fold[open] summary::before{content:'− '}
      @media (max-width:760px){.cx{padding:0 16px 48px!important}.cx-v{font-size:32px}}
    `
    document.head.appendChild(css)
  }
  const pct = r => r.j ? Math.round(r.w / r.j * 100) + '%' : '—'
  const score = m => m ? `${m.gf} – ${m.ga}` : '—'
  const where = v => v === 'D' ? 'domicile' : v === 'E' ? 'extérieur' : 'terrain neutre'
  const box = (k, v, d, color) => `<div class="cx-box"><div class="cx-k">${k}</div><div class="cx-v" style="color:${color || C.white}">${v}</div><div class="cx-d">${d || ''}</div></div>`

  const trophies = st.trophies.map(t => `<div class="cx-trophy">🏆 ${t.name}<span>${t.year}</span></div>`).join('')
  const finals = st.finals.map(t => `<div class="cx-trophy final">Finaliste · ${t.name}${t.opponent ? ' (contre ' + t.opponent + ')' : ''}<span>${t.year}</span></div>`).join('')
  const bal = st.mercato.received - st.mercato.spent
  const clubRecs = window.CareerStats.clubRecords ? window.CareerStats.clubRecords(seasons) : []
  const awards = window.CareerStats.awards ? window.CareerStats.awards(seasons) : []
  const oppRows = st.opponents.map(o => `<tr><td>${o.name}</td><td>${o.j}</td><td style="color:${C.green}">${o.w}</td><td style="color:${C.gold}">${o.d}</td><td style="color:${C.red}">${o.l}</td><td>${o.gf}</td><td>${o.ga}</td></tr>`).join('')

  host.innerHTML = `
    <div style="max-width:1160px;margin:0 auto;padding:0 56px 60px" class="cx">
      ${renderCoachProfile(getCurrentCareer())}
      <div class="bc sec-title">Vitrine à trophées</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:3px;margin-bottom:48px">
        ${trophies || ''}${finals || ''}
        ${!trophies && !finals ? `<div class="cx-d" style="padding:6px 0">Pas encore de trophée ni de finale.</div>` : ''}
      </div>

      ${awards.length ? `
      <div class="bc sec-title">Distinctions · ${awards.length}</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:3px;margin-bottom:48px">
        ${awards.map(a => awardRow(a, a.period || a.year)).join('')}
      </div>` : ''}

      ${clubRecs.length ? `
      <div class="bc sec-title">Records du club</div>
      <div class="cx-grid" style="margin-bottom:48px">
        ${clubRecs.map(r => box(r.label, r.value, [r.detail, r.date || r.year].filter(Boolean).join(' · '), C.gold)).join('')}
      </div>` : ''}

      <div class="bc sec-title">Records en championnat</div>
      <div class="cx-grid" style="margin-bottom:48px">
        ${box('Plus large victoire', score(st.biggestWin), st.biggestWin ? `contre <b>${st.biggestWin.opp}</b> · ${where(st.biggestWin.venue)} · ${st.biggestWin.year}` : '', C.green)}
        ${box('Plus lourde défaite', score(st.worstLoss), st.worstLoss ? `contre <b>${st.worstLoss.opp}</b> · ${where(st.worstLoss.venue)} · ${st.worstLoss.year}` : '', C.red)}
        ${box('Série de victoires', st.winStreak ? st.winStreak.n : '—', st.winStreak ? `matchs d'affilée · ${st.winStreak.year}` : '', C.gold)}
        ${box('Invincibilité', st.unbeatenStreak ? st.unbeatenStreak.n : '—', st.unbeatenStreak ? `matchs sans défaite · ${st.unbeatenStreak.year}` : '')}
        ${box('Meilleure saison', st.bestSeason ? posLabel(st.bestSeason.pos) : '—', st.bestSeason ? `<b>${st.bestSeason.year}</b> · ${st.bestSeason.league} · ${st.bestSeason.pts} pts` : '', C.gold)}
        ${st.worstSeason ? box('Saison la plus difficile', posLabel(st.worstSeason.pos), `<b>${st.worstSeason.year}</b> · ${st.worstSeason.league} · ${st.worstSeason.pts} pts`, C.muted) : ''}
      </div>

      <div class="bc sec-title">Domicile / extérieur</div>
      <div class="cx-grid" style="margin-bottom:48px">
        ${box('À domicile', pct(st.home), `de victoires · <b>${st.home.w}V ${st.home.d}N ${st.home.l}D</b> · ${st.home.gf}-${st.home.ga}`, C.green)}
        ${box("À l'extérieur", pct(st.away), `de victoires · <b>${st.away.w}V ${st.away.d}N ${st.away.l}D</b> · ${st.away.gf}-${st.away.ga}`)}
        ${box('Toute la carrière', pct(st.total), `de victoires · <b>${st.total.j} matchs</b> · ${st.total.gf} buts marqués`)}
      </div>

      ${st.mercato.spent || st.mercato.received ? `
      <div class="bc sec-title">Mercato cumulé</div>
      <div class="cx-grid" style="margin-bottom:48px">
        ${box('Dépensés', money(st.mercato.spent), `${st.mercato.buys} transfert${st.mercato.buys > 1 ? 's' : ''} payant${st.mercato.buys > 1 ? 's' : ''} à l'arrivée`)}
        ${box('Encaissés', money(st.mercato.received), `${st.mercato.sales} vente${st.mercato.sales > 1 ? 's' : ''}`)}
        ${box('Solde', (bal >= 0 ? '+' : '−') + money(Math.abs(bal)), bal >= 0 ? 'bénéfice sur toute la carrière' : 'investissement sur toute la carrière', bal >= 0 ? C.green : C.red)}
        ${st.mercato.biggestBuy ? box('Plus gros achat', st.mercato.biggestBuy.amount, `<b>${st.mercato.biggestBuy.name}</b> · ${st.mercato.biggestBuy.club || ''} · ${st.mercato.biggestBuy.year}`, C.gold) : ''}
        ${st.mercato.biggestSale ? box('Plus grosse vente', st.mercato.biggestSale.amount, `<b>${st.mercato.biggestSale.name}</b> · ${st.mercato.biggestSale.club || ''} · ${st.mercato.biggestSale.year}`, C.gold) : ''}
      </div>` : ''}

      <div class="bc sec-title">Face aux adversaires</div>
      <div class="cx-grid">
        ${st.favourite ? box('Victime préférée', st.favourite.name, `<b>${st.favourite.w} victoires</b> en ${st.favourite.j} matchs`, C.green) : ''}
        ${st.nemesis ? box('Bête noire', st.nemesis.name, `<b>${st.nemesis.l} défaites</b> en ${st.nemesis.j} matchs`, C.red) : ''}
      </div>
      <details class="cx-fold">
        <summary>BILAN CONTRE LES ${st.opponents.length} ADVERSAIRES</summary>
        <div class="cx-wrap"><table class="cx-table">
          <thead><tr><th>ADVERSAIRE</th><th>J</th><th>V</th><th>N</th><th>D</th><th>BP</th><th>BC</th></tr></thead>
          <tbody>${oppRows}</tbody>
        </table></div>
      </details>
    </div>`
}

/* ── Pages carrière : bouton pour masquer / afficher les saisons ──
   Le choix est retenu par carrière dans le navigateur.          */
function initSeasonsToggle(careerId) {
  const grid = document.getElementById('season-grid')
  if (!grid || document.getElementById('seasons-bar')) return
  const key = 'lbc-seasons-hidden-' + careerId
  const n = (window['SEASONS_' + careerId] || []).length
  const bar = document.createElement('div')
  bar.id = 'seasons-bar'
  bar.className = 'bc sec-title'
  bar.style.cssText = 'display:flex;justify-content:space-between;align-items:center;gap:12px'
  bar.innerHTML = `<span>Saisons en détail <span style="color:var(--muted);font-weight:400">· ${n}</span></span>
    <button type="button" id="seasons-btn" style="background:transparent;border:1px solid rgba(232,184,75,.35);color:var(--gold);font-family:'Barlow Condensed',sans-serif;font-size:10px;letter-spacing:3px;font-weight:700;padding:7px 12px;cursor:pointer"></button>`
  grid.parentNode.insertBefore(bar, grid)
  const btn = bar.querySelector('#seasons-btn')
  const apply = hidden => {
    grid.style.display = hidden ? 'none' : 'grid'
    btn.textContent = hidden ? '+ AFFICHER LES SAISONS' : '− MASQUER LES SAISONS'
    btn.setAttribute('aria-expanded', String(!hidden))
  }
  let hidden = false
  try { hidden = localStorage.getItem(key) === '1' } catch (_) {}
  apply(hidden)
  btn.addEventListener('click', () => {
    hidden = !hidden
    apply(hidden)
    try { localStorage.setItem(key, hidden ? '1' : '0') } catch (_) {}
  })
}
