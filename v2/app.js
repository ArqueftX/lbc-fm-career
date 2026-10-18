/* ═══════════════════════════════════════════════
   CARNETS FM26 — NOUVEAU DESIGN (v2)
   Une seule page, trois vues (hash) :
     #/                 toutes les carrières
     #/c/<carrière>     une carrière
     #/c/<carrière>/<saison>   une saison
   Lit les mêmes fichiers que le site actuel (careers.js +
   seasons-*.js) : rien à saisir en double.
═══════════════════════════════════════════════ */

;(function () {

const ROOT = '../'
const DESIGN_KEY = 'lbc-design'
const THEME_KEY = 'lbc-v2-theme'

const $ = sel => document.querySelector(sel)
const esc = v => String(v == null ? '' : v).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const store = {
  get(k) { try { return localStorage.getItem(k) } catch (_) { return null } },
  set(k, v) { try { localStorage.setItem(k, v) } catch (_) {} },
}

/* ── Données ── */
const careers = () => window.CAREERS || []
const seasonsOf = id => (window['SEASONS_' + id] || []).slice().sort((a, b) => b.year.localeCompare(a.year))
const careerById = id => careers().find(c => c.id === id)

function loadData() {
  return Promise.all(careers().map(c => new Promise(resolve => {
    if (window['SEASONS_' + c.id]) return resolve()
    const s = document.createElement('script')
    s.src = ROOT + c.file
    s.onload = s.onerror = () => resolve()
    document.head.appendChild(s)
  })))
}

/* ── Calculs sur une saison (tous formats confondus) ── */
function parseTip(tip) {
  const m = (tip || '').match(/^(.*?)\s*\((D|E|N)\)\s*(\d+)\s*-\s*(\d+)/)
  if (!m) return null
  const h = +m[3], a = +m[4]
  return { opp: m[1].trim(), venue: m[2], h, a, gf: m[2] === 'E' ? a : h, ga: m[2] === 'E' ? h : a }
}

// Matchs de championnat (suite de résultats)
function leagueMatches(s) {
  if (s.months && s.months.length)
    return s.months.flatMap(m => m.matches || []).filter(m => !m.comp || m.comp === 'BL')
  if (s.stints && s.stints.length && !(s.matches && s.matches.length))
    return s.stints.flatMap(t => t.matches || [])
  return s.matches || []
}

function record(s) {
  if (s.wins != null && !s.months) {
    return { played: s.played, w: s.wins, d: s.draws, l: s.losses, gf: s.gf, ga: s.ga, pts: s.points,
      pos: s.position, teams: s.totalTeams }
  }
  const ms = leagueMatches(s)
  let w = 0, d = 0, l = 0, gf = 0, ga = 0
  ms.forEach(m => {
    if (m.r === 'W') w++; else if (m.r === 'D') d++; else if (m.r === 'L') l++
    const t = parseTip(m.tip); if (t) { gf += t.gf; ga += t.ga }
  })
  let pos = s.position != null ? s.position : null
  const hl = (s.standings || []).find(r => r.highlight)
  if (hl) pos = hl.pos
  return { played: ms.length, w, d, l, gf, ga, pts: 3 * w + d, pos, teams: s.totalTeams }
}

const isLive = s => s.status === 'en_cours'
const posLabel = n => n == null ? '—' : (n === 1 ? '1er' : n + 'e')
const posSup = n => n == null ? '—' : `${n}<sup>${n === 1 ? 'er' : 'e'}</sup>`
const diff = (gf, ga) => { const d = (gf || 0) - (ga || 0); return (d > 0 ? '+' : '') + d }

// Toutes les coupes d'une saison, au même format
function cupsOf(s) {
  const out = []
  const add = c => { if (c && c.rounds && c.rounds.length) out.push(c) }
  add(s.cup2); add(s.cup); add(s.cup3); (s.cups || []).forEach(add)
  ;(s.stints || []).forEach(t => (t.cups || []).forEach(add))
  return out
}

function cupOutcome(c) {
  const last = c.rounds[c.rounds.length - 1]
  const text = [c.name, last.round, last.opponent].join(' ')
  const isFinal = /finale/i.test(last.round || '')
  const rd = (last.round || '').replace(/\s*·\s*(aller|retour)/i, '').replace(/^phase\s*·\s*/i, 'Phase ')
  if (/🏆/.test(text) || /vainqueur/i.test(last.opponent || '') || (isFinal && last.result === 'W')) return { label: 'Vainqueur', cls: 'win', won: true }
  if (isFinal) return { label: 'Finaliste', cls: 'final' }
  if (last.result === 'L' || /élimin/i.test(last.opponent || '')) return { label: 'Éliminé · ' + rd, cls: '' }
  return { label: rd, cls: '' }
}

function honours(s) {
  const out = []
  const r = record(s)
  if (r.pos === 1 && !isLive(s)) out.push({ t: 'Champion · ' + s.league.replace(/^.*→\s*/, ''), gold: true })
  cupsOf(s).forEach(c => {
    const o = cupOutcome(c)
    if (o.won) out.push({ t: c.name.replace(/\s*🏆/g, ''), gold: true })
    else if (o.cls === 'final') out.push({ t: 'Finaliste · ' + c.name.replace(/\s*🏆/g, '') })
  })
  return out
}

function parseAmount(a) {
  const m = String(a || '').replace(/\s/g, '').match(/([\d.,]+)([MK])/i)
  if (!m) return 0
  const n = parseFloat(m[1].replace(',', '.'))
  return m[2].toUpperCase() === 'M' ? n * 1e6 : n * 1e3
}
const fmtMoney = n => n >= 1e6 ? (n / 1e6).toLocaleString('fr-FR', { maximumFractionDigits: 1 }) + ' M€'
  : n > 0 ? Math.round(n / 1e3).toLocaleString('fr-FR') + ' K€' : '0 €'

/* ── Morceaux d'interface ── */
const logo = (c, alt) => `<img src="${ROOT}${esc(c.logo)}" alt="${esc(alt || '')}" onerror="this.style.visibility='hidden'"/>`

function wdlBar(r) {
  const t = (r.w + r.d + r.l) || 1
  return `<div class="wdl" role="img" aria-label="${r.w} victoires, ${r.d} nuls, ${r.l} défaites">
      <i class="w" style="width:${r.w / t * 100}%"></i><i class="d" style="width:${r.d / t * 100}%"></i><i class="l" style="width:${r.l / t * 100}%"></i>
    </div>
    <div class="wdl-lbl"><span>${r.w}V · ${r.d}N · ${r.l}D</span><span>${r.pts} pts</span></div>`
}

function ribbon(ms, id) {
  if (!ms.length) return ''
  const cells = ms.map((m, i) => `<i class="${esc(m.r)}" data-tip="${esc(m.tip)}" title="${esc(m.tip)}" tabindex="0">${i + 1}</i>`).join('')
  return `<div class="ribbon" data-ribbon="${id}">${cells}</div>
    <div class="legend"><span style="--dot:var(--win)">Victoire</span><span style="--dot:var(--draw)">Nul</span><span style="--dot:var(--loss)">Défaite</span></div>
    <div class="match-tip mono" data-tip-out="${id}">Survole une case pour voir le match.</div>`
}

function leaders(title, items, opts) {
  if (!items || !items.length) return ''
  const o = opts || {}
  const rows = items.map((p, i) => `
    <div class="leader ${i === 0 ? 'first' : ''}">
      <div class="i">${i + 1}</div>
      <div><div class="n">${esc(p.name)}</div><div class="d">${esc(p.detail || '')}</div></div>
      <div class="v">${p.value == null ? '' : o.rating ? Number(p.value).toFixed(2) : esc(p.value)}</div>
    </div>`).join('')
  return `<div class="panel ${o.cls || ''}"><h4>${esc(title)}</h4>${rows}</div>`
}

function standingsTable(rows) {
  const body = rows.map(r => {
    const cls = [r.zone === 'promo' ? 'promo' : r.zone === 'releg' ? 'releg' : '', r.champion ? 'champ' : '', r.highlight ? 'me' : ''].join(' ')
    const db = r.db != null ? r.db : (r.bp - r.bc)
    return `<tr class="${cls}"><td>${r.pos}</td><td>${esc(r.team)}</td><td>${r.j}</td><td>${r.g}</td><td>${r.n}</td><td>${r.l}</td><td>${r.bp}</td><td>${r.bc}</td><td>${db > 0 ? '+' + db : db}</td><td class="pts">${r.pts}</td></tr>`
  }).join('')
  return `<div class="table-wrap"><table class="std">
    <thead><tr><th>#</th><th>Équipe</th><th>J</th><th>G</th><th>N</th><th>P</th><th>BP</th><th>BC</th><th>Diff</th><th>Pts</th></tr></thead>
    <tbody>${body}</tbody></table></div>`
}

function cupCard(c) {
  const o = cupOutcome(c)
  const color = r => r === 'W' ? 'var(--win)' : r === 'D' ? 'var(--draw)' : 'var(--loss)'
  const rows = c.rounds.map(r => `
    <li><span class="dot" style="background:${color(r.result)}"></span>
      <span class="rd">${esc(r.round)}</span>
      <span>${esc(r.opponent)}</span>
      <span class="sc">${esc(r.score)}</span></li>`).join('')
  return `<div class="panel">
    <div class="cup-head"><div class="cup-name">${esc(c.name)}</div><span class="outcome ${o.cls}">${esc(o.label)}</span></div>
    ${c.phase ? `<div class="cup-phase">${esc(c.phase)}</div>` : ''}
    <ul class="rounds">${rows}</ul></div>`
}

function playoffsCard(p) {
  if (!p) return ''
  const legs = [p.leg1, p.leg2].filter(Boolean).map((l, i) => `
    <li><span class="dot" style="background:${l.result === 'W' ? 'var(--win)' : l.result === 'D' ? 'var(--draw)' : 'var(--loss)'}"></span>
      <span class="rd">${p.leg2 ? (i ? 'Retour' : 'Aller') : 'Match'}</span>
      <span>${esc(p.opponent)} · ${esc(l.venue || '')}</span><span class="sc">${esc(l.score)}</span></li>`).join('')
  return `<div class="panel">
    <div class="cup-head"><div class="cup-name">${esc(p.competition)}</div><span class="outcome ${/vainq|promu|champion/i.test(p.outcome || '') ? 'win' : /final/i.test(p.outcome || '') ? 'final' : ''}">${esc(p.outcome || '')}</span></div>
    <ul class="rounds">${legs}</ul></div>`
}

function transfersBlock(s) {
  const ins = s.transfers || [], outs = s.departures || []
  if (!ins.length && !outs.length) return ''
  const spent = ins.filter(t => t.type === 'buy').reduce((a, t) => a + parseAmount(t.amount), 0)
  const got = outs.filter(t => t.type === 'sell').reduce((a, t) => a + parseAmount(t.amount), 0)
  const label = { buy: 'Achat', sell: 'Vente', loan: 'Prêt', free: 'Libre' }
  const row = (t, dir) => `<li class="tr"><span class="ttype ${esc(t.type)}">${esc(label[t.type] || t.type)}</span>
      <span><span class="who">${esc(t.name)}</span><br><span class="from">${dir === 'in' ? '← ' + esc(t.from || '') : '→ ' + esc(t.to || '')} · ${esc(t.date || '')}</span></span>
      <span class="amt">${esc(t.amount || '')}</span></li>`
  const bal = got - spent
  return `<section class="section"><h2 class="h-section">Mercato <small>${ins.length} arrivées · ${outs.length} départs</small></h2>
    <div class="transfer-sum">
      <div><div class="big-num">${fmtMoney(spent)}</div><div class="eyebrow">Dépensés</div></div>
      <div><div class="big-num">${fmtMoney(got)}</div><div class="eyebrow">Encaissés</div></div>
      <div><div class="big-num ${bal >= 0 ? 'c-win' : 'c-loss'}">${bal >= 0 ? '+' : '−'}${fmtMoney(Math.abs(bal))}</div><div class="eyebrow">Solde</div></div>
    </div>
    <div class="ud">
      <div class="panel"><h5>Arrivées</h5><ul>${ins.map(t => row(t, 'in')).join('') || '<li class="from">Aucune</li>'}</ul></div>
      <div class="panel"><h5>Départs</h5><ul>${outs.map(t => row(t, 'out')).join('') || '<li class="from">Aucun</li>'}</ul></div>
    </div></section>`
}

function squadBlock(squad) {
  if (!squad || !squad.length) return ''
  const groups = [['Gardiens', ['GB', 'G']], ['Défenseurs', ['DC', 'DD', 'DG', 'DLD', 'DLG']], ['Milieux', ['MDC', 'MC', 'MOC', 'MD', 'MG', 'MOG', 'MOD']], ['Attaque', ['BU', 'AD', 'AG', 'ALD', 'ALG']]]
  const known = groups.flatMap(g => g[1])
  const others = squad.filter(p => !known.includes(p.p))
  const cols = groups.map(([t, ps]) => [t, squad.filter(p => ps.includes(p.p))])
  if (others.length) cols.push(['Autres', others])
  return `<section class="section"><h2 class="h-section">Effectif <small>${squad.length} joueurs</small></h2>
    <div class="squad">${cols.filter(c => c[1].length).map(([t, ps]) => `<div><h5>${t} · ${ps.length}</h5>${ps.map(p => `
      <div class="pl"><span class="p">${esc(p.p)}</span><span>${esc(p.n)}</span><span class="m">${esc(p.nat || '')} ${p.age != null ? p.age + ' a' : ''}</span></div>`).join('')}</div>`).join('')}</div></section>`
}

function monthsBlock(s) {
  if (!s.months || !s.months.length) return ''
  const names = Object.assign({ AM: 'Amical', BL: s.league, DFB: 'DFB-Pokal', EL: 'Europa League', UCL: 'Ligue des Champions' }, s.compNames || {})
  const blocks = s.months.map(m => {
    const lg = (m.matches || []).filter(x => !x.comp || x.comp === 'BL')
    const w = lg.filter(x => x.r === 'W').length, d = lg.filter(x => x.r === 'D').length, l = lg.filter(x => x.r === 'L').length
    const rows = (m.matches || []).map(x => {
      const t = parseTip(x.tip)
      return `<div class="mrow"><span class="res ${esc(x.r)}">${({ W: 'V', D: 'N', L: 'D' })[x.r] || esc(x.r)}</span>
        <span>${esc(t ? t.opp : x.tip)} <span class="comp">· ${esc(names[x.comp] || x.comp || s.league)}${x.tag ? ' · ' + esc(x.tag) : ''}</span></span>
        <span class="comp">${t ? (t.venue === 'D' ? 'Dom.' : t.venue === 'E' ? 'Ext.' : 'Neutre') : ''}</span>
        <span class="sc mono">${t ? t.h + ' – ' + t.a : ''}</span></div>`
    }).join('')
    return `<div class="month"><div class="month-head"><b>${esc(m.label)}</b><span class="comp">${w}V ${d}N ${l}D en championnat</span></div>
      ${m.note ? `<p class="month-note">${esc(m.note)}</p>` : ''}${rows}</div>`
  }).join('')
  return `<section class="section"><h2 class="h-section">Mois par mois <small>${s.months.length} mois</small></h2><div class="months">${blocks}</div></section>`
}

function moves(s) {
  const box = (t, list) => list && list.length ? `<div class="panel"><h5>${t}</h5><div class="pill-list">${list.map(x => `<span class="pill">${esc(x)}</span>`).join('')}</div></div>` : ''
  const parts = [box('↑ Promus', s.promoted), box('↓ Relégués', s.relegated)].filter(Boolean)
  return parts.length ? `<section class="section"><div class="ud" style="${parts.length === 1 ? 'grid-template-columns:1fr' : ''}">${parts.join('')}</div></section>` : ''
}

/* ── Vue : accueil ── */
function viewHome() {
  const all = careers().map(c => {
    const ss = seasonsOf(c.id)
    const recs = ss.map(record)
    return {
      c, ss,
      wins: recs.reduce((a, r) => a + (r.w || 0), 0),
      titles: ss.reduce((a, s) => a + honours(s).filter(h => h.gold).length, 0),
      best: recs.reduce((b, r) => r.pos != null && (b == null || r.pos < b) ? r.pos : b, null),
      live: c.status ? c.status === 'en_cours' : ss.some(isLive),
    }
  })
  const totS = all.reduce((a, x) => a + x.ss.length, 0)
  const totW = all.reduce((a, x) => a + x.wins, 0)
  const totT = all.reduce((a, x) => a + x.titles, 0)
  const cards = all.map(x => `
    <a class="ccard" href="#/c/${esc(x.c.id)}" style="--c:${esc(x.c.color || 'var(--club)')}">
      <div class="ccard-top">${logo(x.c)}<div>
        <h3>${esc(x.c.name)}</h3>
        <div class="sub">${esc(x.c.country)}${x.c.coach ? ' · ' + esc(x.c.coach) : ''}</div>
      </div></div>
      ${spark(x.ss)}
      <div class="ccard-stats">
        <div><b>${x.ss.length}</b><span>Saisons</span></div>
        <div><b>${x.wins}</b><span>Victoires</span></div>
        <div><b>${x.titles}</b><span>Trophées</span></div>
        <div><b>${posLabel(x.best)}</b><span>Meilleur</span></div>
      </div>
      <div>${x.live ? '<span class="tag live">● En cours</span> ' : x.c.status === 'terminee' ? '<span class="tag">Terminée</span> ' : ''}${x.c.tag ? `<span class="tag">${esc(x.c.tag)}</span>` : ''}</div>
    </a>`).join('')
  document.title = 'Carnets FM26'
  setClub(null)
  return `
    <div class="home-head">
      <div>
        <div class="eyebrow">Football Manager 26 · Toutes les carrières</div>
        <h1 class="h-display">Les carnets<br><em>de carrière.</em></h1>
        <p class="lede">Chaque club, chaque saison, chaque match : l'historique complet des parties, à feuilleter comme un almanach.</p>
      </div>
      <div class="home-totals">
        <div><div class="big-num">${careers().length}</div><div class="eyebrow">Carrières</div></div>
        <div><div class="big-num">${totS}</div><div class="eyebrow">Saisons</div></div>
        <div><div class="big-num">${totT}</div><div class="eyebrow">Trophées</div></div>
      </div>
    </div>
    <div class="careers">${cards}</div>
    <p class="eyebrow" style="margin-top:26px">${totW} victoires en championnat, toutes carrières confondues.</p>`
}

// Mini-courbe des classements (1er en haut)
function spark(ss) {
  const pts = ss.slice().reverse().map(s => ({ s, r: record(s) })).filter(x => x.r.pos != null)
  if (pts.length < 2) return `<svg class="spark" viewBox="0 0 300 46" aria-hidden="true"><line x1="0" y1="40" x2="300" y2="40" stroke="var(--line)" stroke-dasharray="3 4"/></svg>`
  const max = Math.max(...pts.map(p => p.r.teams || 20))
  const xy = pts.map((p, i) => [8 + i * (284 / (pts.length - 1)), 6 + (p.r.pos - 1) / (max - 1) * 34])
  return `<svg class="spark" viewBox="0 0 300 46" aria-hidden="true">
    <polyline points="${xy.map(p => p.join(',')).join(' ')}" fill="none" stroke="var(--c)" stroke-width="2" stroke-linejoin="round"/>
    ${xy.map((p, i) => `<circle cx="${p[0]}" cy="${p[1]}" r="${pts[i].r.pos === 1 ? 4 : 2.5}" fill="${pts[i].r.pos === 1 ? 'var(--gold)' : 'var(--c)'}"/>`).join('')}
  </svg>`
}

/* ── Vue : carrière ── */
function viewCareer(c) {
  const ss = seasonsOf(c.id)
  setClub(c)
  store.set(window.CURRENT_CAREER_KEY || 'lbc-fm-current-career', c.id)
  document.title = c.short + ' — Carnets FM26'
  const recs = ss.map(record)
  const sum = k => recs.reduce((a, r) => a + (r[k] || 0), 0)
  const titles = ss.reduce((a, s) => a + honours(s).filter(h => h.gold).length, 0)
  const rows = ss.map((s, i) => {
    const r = recs[i]
    const hs = honours(s)
    return `<a class="srow" href="#/c/${esc(c.id)}/${esc(s.id)}">
      <div class="yr">${esc(s.year)}</div>
      <div class="pos-badge ${r.pos === 1 ? 'p1' : ''}">${r.pos == null ? '—' : r.pos}</div>
      <div><div class="lg">${esc(s.league)}${isLive(s) ? ' <span class="tag live">● En cours</span>' : ''}</div>
        <div class="note">${esc(s.splash && s.splash.lines ? s.splash.lines.join(' ') : '')}${hs.length ? (s.splash ? ' · ' : '') + hs.map(h => esc(h.t)).join(' · ') : ''}</div></div>
      <div class="rec">${wdlBar(r)}</div>
      <div class="arrow">→</div></a>`
  }).join('')
  return `
    <div class="crumbs"><a href="#/">Carrières</a><span>/</span><span>${esc(c.short)}</span></div>
    <div class="career-hero">${logo(c, c.name)}
      <div>
        <div class="eyebrow">${esc(c.country)}${c.status === 'en_cours' ? ' · <span class="c-win">● En cours</span>' : c.status === 'terminee' ? ' · Terminée' : ''}${c.tag ? ' · ' + esc(c.tag) : ''}</div>
        <h1 class="h-display">${esc(c.name)}</h1>
        <div class="meta-line">${c.coach ? `<span>Entraîneur <b>${esc(c.coach)}</b></span>` : ''}<span><b>${ss.length}</b> saison${ss.length > 1 ? 's' : ''}</span></div>
      </div>
    </div>
    <div class="kpis">
      <div><div class="big-num">${sum('played')}</div><div class="k">Matchs de championnat</div></div>
      <div><div class="big-num c-win">${sum('w')}</div><div class="k">Victoires</div></div>
      <div><div class="big-num">${sum('pts')}</div><div class="k">Points</div></div>
      <div><div class="big-num">${sum('gf')}</div><div class="k">Buts marqués</div></div>
      <div><div class="big-num" style="color:var(--gold)">${titles}</div><div class="k">Trophées</div></div>
    </div>
    ${ss.length > 1 ? `<section class="section"><h2 class="h-section">Trajectoire <small>Classement en championnat</small></h2><div class="chart-card">${positionChart(ss)}</div></section>` : ''}
    <section class="section"><h2 class="h-section">Saisons <small>De la plus récente à la plus ancienne</small></h2>
      ${ss.length ? `<div class="season-list">${rows}</div>` : '<div class="empty">Aucune saison pour l\'instant.</div>'}
    </section>`
}

function positionChart(ss) {
  const pts = ss.slice().reverse().map(s => ({ s, r: record(s) }))
  const W = 1000, H = 260, L = 64, R = 40, T = 30, B = 54
  const max = Math.max(...pts.map(p => p.r.teams || 20), 4)
  const x = i => L + (pts.length === 1 ? (W - L - R) / 2 : i * (W - L - R) / (pts.length - 1))
  const y = p => T + (p - 1) / (max - 1) * (H - T - B)
  const grid = [1, Math.ceil(max / 2), max].map(p => `<line x1="${L}" x2="${W - R}" y1="${y(p)}" y2="${y(p)}" stroke="var(--line)" stroke-dasharray="${p === 1 ? '0' : '4 6'}"/>
    <text x="${L - 34}" y="${y(p) + 4}" text-anchor="end" font-family="var(--mono)" font-size="12" fill="var(--muted)">${p}</text>`).join('')
  const valid = pts.map((p, i) => p.r.pos != null ? [x(i), y(p.r.pos)] : null).filter(Boolean)
  const line = valid.length > 1 ? `<polyline points="${valid.map(v => v.join(',')).join(' ')}" fill="none" stroke="var(--club)" stroke-width="2.5" stroke-linejoin="round"/>` : ''
  const dots = pts.map((p, i) => p.r.pos == null ? '' : `
    <g><circle cx="${x(i)}" cy="${y(p.r.pos)}" r="${p.r.pos === 1 ? 9 : 6}" fill="${p.r.pos === 1 ? 'var(--gold)' : 'var(--surface)'}" stroke="${p.r.pos === 1 ? 'var(--gold)' : 'var(--club)'}" stroke-width="2.5"/>
    <text x="${x(i)}" y="${y(p.r.pos) - 14}" text-anchor="middle" font-family="var(--serif)" font-weight="600" font-size="15" fill="var(--ink)">${posLabel(p.r.pos)}</text>
    <title>${esc(p.s.year)} · ${esc(p.s.league)} · ${posLabel(p.r.pos)}</title></g>`).join('')
  const labels = pts.map((p, i) => `<text x="${x(i)}" y="${H - 26}" text-anchor="middle" font-family="var(--mono)" font-size="12" fill="var(--ink-2)">${esc(p.s.year)}</text>
    <text x="${x(i)}" y="${H - 8}" text-anchor="middle" font-family="var(--sans)" font-size="11" fill="var(--muted)">${esc(p.s.league.replace(/^.*→\s*/, ''))}</text>`).join('')
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Classement en championnat saison par saison">${grid}${line}${dots}${labels}</svg>`
}

/* ── Vue : saison ── */
function viewSeason(c, s) {
  setClub(c)
  const ss = seasonsOf(c.id)
  const idx = ss.findIndex(x => x.id === s.id)
  const newer = ss[idx - 1], older = ss[idx + 1]
  const r = record(s)
  const sp = s.splash || {}
  document.title = `${c.short} ${s.year} — Carnets FM26`
  const hs = honours(s)
  const title = sp.lines && sp.lines.length ? sp.lines.map((l, i) => i === sp.lines.length - 1 && sp.lines.length > 1 ? `<em>${esc(l)}</em>` : esc(l)).join('<br>') : esc(s.year)
  const cups = cupsOf(s)
  const league = leagueMatches(s)

  const lists = [
    leaders('Buteurs', s.scorers),
    leaders('Passeurs', s.assists),
    leaders(s.ratingsTitle || 'Meilleures notes', s.ratings, { rating: true }),
  ].filter(Boolean)

  const stints = (s.stints || []).map((t, ti) => `
    <div class="stint">
      <div class="stint-head"><img src="${ROOT}${esc(t.logo)}" alt="" onerror="this.style.visibility='hidden'"/>
        <div><div class="eyebrow">${esc(t.phase || '')} · ${esc(t.tenure || '')}</div><h3 class="cup-name" style="font-size:24px;margin:4px 0 0">${esc(t.club)}</h3></div></div>
      <div class="figures" style="grid-template-columns:repeat(4,1fr)">
        <div><div class="big-num">${esc(t.positionText || '')}</div><div class="k">${esc(t.league || '')}</div></div>
        <div><div class="big-num">${t.record ? t.record.played : '—'}</div><div class="k">Matchs</div></div>
        <div><div class="big-num">${t.record ? `${t.record.wins}-${t.record.draws}-${t.record.losses}` : '—'}</div><div class="k">V-N-D</div></div>
        <div><div class="big-num">${t.record ? `${t.record.gf}-${t.record.ga}` : '—'}</div><div class="k">Buts</div></div>
      </div>
      ${t.note ? `<p class="lede" style="font-size:16px">${esc(t.note)}</p>` : ''}
      ${t.matches && t.matches.length ? `<div style="margin-top:18px">${ribbon(t.matches, 'st' + ti)}</div>` : ''}
      ${[leaders('Buteurs', t.scorers), leaders('Passeurs', t.assists), leaders('Meilleures notes', t.ratings, { rating: true })].filter(Boolean).length
        ? `<div class="cols-3" style="margin-top:22px">${[leaders('Buteurs', t.scorers), leaders('Passeurs', t.assists), leaders('Meilleures notes', t.ratings, { rating: true })].join('')}</div>` : ''}
      ${t.standings && t.standings.length ? `<details class="fold"><summary>Classement final · ${esc(t.league || '')}</summary>${standingsTable(t.standings)}</details>` : ''}
    </div>`).join('')

  return `
    <div class="crumbs"><a href="#/">Carrières</a><span>/</span><a href="#/c/${esc(c.id)}">${esc(c.short)}</a><span>/</span><span>${esc(s.year)}</span></div>
    <div class="season-hero">
      <div>
        <div class="eyebrow">${esc(sp.eyebrow || (s.year + ' · ' + c.name + ' · ' + s.league))}${isLive(s) ? ' · <span class="c-win">● En cours' + (s.lastUpdate ? ' · ' + esc(s.lastUpdate) : '') + '</span>' : ''}</div>
        <h1 class="h-display">${title}</h1>
        ${sp.tagline ? `<p class="lede">${esc(sp.tagline)}</p>` : sp.sub ? `<p class="lede">${esc(sp.sub)}</p>` : ''}
        ${hs.length ? `<div class="honours">${hs.map(h => `<span class="honour ${h.gold ? 'gold' : ''}">${h.gold ? '🏆 ' : ''}${esc(h.t)}</span>`).join('')}</div>` : ''}
      </div>
      <div class="rank">
        <div class="rank-num">${posSup(r.pos)}</div>
        <div class="rank-of">${esc(s.league)}${r.teams ? ' · sur ' + r.teams : ''}</div>
      </div>
    </div>

    <div class="figures">
      <div><div class="big-num">${r.pts}</div><div class="k">Points</div></div>
      <div><div class="big-num">${r.played}${s.seasonLength && isLive(s) ? '<span style="font-size:.5em;color:var(--muted)">/' + s.seasonLength + '</span>' : ''}</div><div class="k">Joués</div></div>
      <div><div class="big-num c-win">${r.w}</div><div class="k">Victoires</div></div>
      <div><div class="big-num c-draw">${r.d}</div><div class="k">Nuls</div></div>
      <div><div class="big-num c-loss">${r.l}</div><div class="k">Défaites</div></div>
      <div><div class="big-num">${r.gf}–${r.ga}</div><div class="k">Buts · ${diff(r.gf, r.ga)}</div></div>
    </div>

    ${league.length ? `<section class="section"><h2 class="h-section">Le championnat <small>${league.length} matchs</small></h2>${ribbon(league, 'lg')}</section>` : ''}

    ${monthsBlock(s)}

    ${lists.length ? `<section class="section"><h2 class="h-section">Les joueurs</h2><div class="cols-3">${lists.join('')}</div>
      ${s.flops && s.flops.length ? `<div class="cols-3" style="margin-top:18px">${leaders('Pires moyennes', s.flops, { rating: true, cls: 'flop' })}</div>` : ''}</section>` : ''}

    ${cups.length || s.playoffs ? `<section class="section"><h2 class="h-section">Les coupes <small>${cups.length + (s.playoffs ? 1 : 0)} compétition${cups.length + (s.playoffs ? 1 : 0) > 1 ? 's' : ''}</small></h2>
      <div class="cups">${cups.map(cupCard).join('')}${playoffsCard(s.playoffs)}</div></section>` : ''}

    ${stints ? `<section class="section"><h2 class="h-section">Deux clubs, une saison</h2>${stints}</section>` : ''}

    ${s.standings && s.standings.length ? `<section class="section"><h2 class="h-section">${s.standingsTitle ? esc(s.standingsTitle) : 'Classement ' + (isLive(s) ? 'actuel' : 'final')} <small>${esc(s.league)}</small></h2>${standingsTable(s.standings)}
      ${s.elTable && s.elTable.length ? `<details class="fold"><summary>${esc(s.elTableTitle || 'Classement · Phase de championnat')}</summary>${standingsTable(s.elTable)}</details>` : ''}</section>`
      : s.elTable && s.elTable.length ? `<section class="section"><h2 class="h-section">${esc(s.elTableTitle || 'Phase de championnat')}</h2>${standingsTable(s.elTable)}</section>` : ''}

    ${moves(s)}

    ${transfersBlock(s)}
    ${squadBlock(s.squad)}

    <nav class="pager">
      ${older ? `<a href="#/c/${esc(c.id)}/${esc(older.id)}"><span class="eyebrow">← Saison précédente</span><b>${esc(older.year)}</b></a>` : '<span></span>'}
      ${newer ? `<a class="next" href="#/c/${esc(c.id)}/${esc(newer.id)}"><span class="eyebrow">Saison suivante →</span><b>${esc(newer.year)}</b></a>` : '<span></span>'}
    </nav>`
}

/* ── Accent du club, navigation, routeur ── */
function setClub(c) {
  document.documentElement.style.setProperty('--club', c && c.color ? c.color : '#8a1c1c')
  document.querySelectorAll('#career-nav .chip').forEach(el => el.classList.toggle('on', !!c && el.dataset.id === c.id))
}

function renderNav() {
  $('#career-nav').innerHTML = careers().map(c =>
    `<a class="chip" data-id="${esc(c.id)}" href="#/c/${esc(c.id)}">${logo(c)}<span>${esc(c.short)}</span></a>`).join('')
}

// Lien « design actuel » vers la page équivalente de l'ancien site
function oldSiteUrl(route) {
  if (route.season) return `${ROOT}${route.career}/saison.html?id=${encodeURIComponent(route.season)}&career=${encodeURIComponent(route.career)}`
  if (route.career) return `${ROOT}${route.career}/index.html`
  return ROOT + 'index.html'
}

function parseRoute() {
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent)
  return parts[0] === 'c' ? { career: parts[1] || null, season: parts[2] || null } : {}
}

function render() {
  const route = parseRoute()
  const app = $('#app')
  let html
  const c = route.career && careerById(route.career)
  if (route.career && !c) html = `<div class="empty">Carrière introuvable. <a href="#/">Retour aux carrières</a></div>`
  else if (c && route.season) {
    const s = (window['SEASONS_' + c.id] || []).find(x => x.id === route.season)
    html = s ? viewSeason(c, s) : `<div class="empty">Saison introuvable. <a href="#/c/${esc(c.id)}">Retour à ${esc(c.short)}</a></div>`
  } else if (c) html = viewCareer(c)
  else html = viewHome()
  app.innerHTML = html
  const back = oldSiteUrl(route)
  $('#design-back').href = back
  $('#design-back-foot').href = back
  bindRibbons()
  window.scrollTo(0, 0)
}

function bindRibbons() {
  document.querySelectorAll('[data-ribbon]').forEach(rb => {
    const out = document.querySelector(`[data-tip-out="${rb.dataset.ribbon}"]`)
    const show = e => { const t = e.target.closest('i'); if (t && out) out.textContent = `J${t.textContent} · ${t.dataset.tip}` }
    rb.addEventListener('mouseover', show)
    rb.addEventListener('focusin', show)
    rb.addEventListener('click', show)
  })
}

/* ── Thème + bascule de design ── */
function initChrome() {
  $('#theme-btn').addEventListener('click', () => {
    const cur = document.documentElement.dataset.theme
      || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    const next = cur === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    store.set(THEME_KEY, next)
  })
  const back = () => store.set(DESIGN_KEY, 'v1')
  $('#design-back').addEventListener('click', back)
  $('#design-back-foot').addEventListener('click', back)
  store.set(DESIGN_KEY, 'v2')
}

initChrome()
loadData().then(() => {
  renderNav()
  render()
  window.addEventListener('hashchange', render)
})

})()
