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
  // Bilan = CHAMPIONNAT uniquement (amicaux 'AM' et coupes 'DFB/EL/UCL' exclus)
  const ms = all.filter(m => !m.comp || m.comp === 'BL')
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
                  <div class="bc" style="font-size:11px;color:${C.muted};margin-top:2px;letter-spacing:1px">${c.country}</div>
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
  window.location = '../'
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
            <div class="bb" style="font-size:32px;color:${C.goldL};line-height:1">${item.value}</div>
            <div class="bc" style="font-size:9px;color:${C.muted};letter-spacing:2px;text-transform:uppercase">${unit}</div>
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
            ${t.type==='free'?'LIBRE':'PRÊT'}
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

/* Render standings table */
function renderStandings(rows) {
  if (!rows || !rows.length) return ''
  const headers = ['','Équipe','J','G','N','D','BP','BC','DB','Pts']
  return `
    <div>
      <div class="standings-row" style="border-bottom:1px solid rgba(255,255,255,.08);border-left:3px solid transparent">
        ${headers.map((c,i) => `
          <div class="bc" style="font-size:9px;letter-spacing:2px;color:${C.muted};text-align:${i>1?'center':'left'};font-weight:700">${c}</div>
        `).join('')}
      </div>
      ${rows.map(row => `
        <div class="standings-row ${row.highlight?'highlight':row.zone==='promo'?'promo':row.zone==='releg'?'releg':''}">
          <div class="bb" style="font-size:15px;color:${row.pos<=2?C.gold:C.muted}">${row.pos}</div>
          <div style="font-weight:${row.highlight?600:400};font-size:13px">${row.team}</div>
          ${[row.j,row.g,row.n,row.l,row.bp,row.bc,row.db>0?'+'+row.db:row.db].map(v=>`
            <div style="text-align:center;color:${C.muted};font-size:11px">${v}</div>
          `).join('')}
          <div class="bb" style="text-align:center;font-size:19px;color:${C.gold}">${row.pts}</div>
        </div>
      `).join('')}
    </div>
  `
}

/* Mercato preview card */
function renderMercatoPreview(season, careerId) {
  careerId = careerId || getCurrentCareer().id
  const arr = season.transfers || []
  const dep = season.departures || []
  if (!arr.length && !dep.length) return ''

  const previewRow = (t, type) => {
    const isArr = type === 'arr'
    const label = isArr ? (t.type==='free'?'LIBRE':'PRÊT') : (t.type==='loan'?'PRÊT':t.type==='sell'?'TRANSFERT':'FIN CTR')
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
