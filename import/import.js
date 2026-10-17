/* ═══════════════════════════════════════════════
   IMPORT .FM — mise en forme d'une saison
   Transforme les données brutes lues par extract.py
   en un objet saison au format seasons-*.js (mois par mois).
═══════════════════════════════════════════════ */

;(function () {

/* ── Compétitions connues (identifiant de la base FM) ── */
const KNOWN_COMPS = {
  104551:  { code: 'AM',  name: 'Amical' },
  22:      { code: 'BL',  name: 'Bundesliga' },
  1301410: { code: 'DFB', name: 'DFB-Pokal' },
  214404:  { code: 'UCL', name: 'UEFA Champions League' },
  1301396: { code: 'EL',  name: 'UEFA Europa League' },
}

/* ── Codes de tour du jeu (confirmés par fmsave + observés) ── */
const ROUND_CODES = {
  5: '1er tour', 6: '2e tour', 7: '3e tour', 8: '4e tour',
  16: 'Quart de finale', 17: 'Demi-finale', 19: 'Finale',
}

/* ── Postes FM → abréviations françaises ── */
const POSITIONS = {
  GK: 'G', SW: 'LIB', DL: 'DG', DC: 'DC', DR: 'DD', WBL: 'DLG', WBR: 'DLD',
  DM: 'MDC', ML: 'MG', MC: 'MC', MR: 'MD', AML: 'AG', AMC: 'MOC', AMR: 'AD',
  ST: 'BU', STC: 'BU',
}

/* ── Nationalités (identifiants de nation FM26) ── */
const NATIONS = {
  1:'Angolais', 2:'Béninois', 3:'Botswanais', 4:'Burkinabé', 5:'Burundais', 6:'Camerounais',
  7:'Cap-Verdien', 8:'Centrafricain', 10:'Djiboutien', 11:'Égyptien', 12:'Équatoguinéen',
  13:'Éthiopien', 14:'Gabonais', 15:'Gambien', 16:'Ghanéen', 17:'Guinéen', 18:'Bissau-Guinéen',
  19:'Ivoirien', 20:'Kényan', 21:'Lesothan', 23:'Libyen', 25:'Malawite', 26:'Malien',
  27:'Mauritanien', 28:'Mauricien', 29:'Marocain', 30:'Mozambicain', 31:'Namibien', 32:'Nigérien',
  33:'Nigérian', 34:'Rwandais', 35:'Santoméen', 36:'Sénégalais', 37:'Seychellois',
  38:'Sierra-Léonais', 39:'Somalien', 40:'Sud-Africain', 41:'Soudanais', 42:'Eswatinien',
  43:'Tanzanien', 44:'Congolais', 45:'Togolais', 46:'Tunisien', 47:'Ougandais', 48:'Congolais (RDC)',
  49:'Zambien', 50:'Zimbabwéen', 51:'Afghan', 52:'Bahreïni', 53:'Bangladais', 54:'Brunéien',
  55:'Chinois', 56:'Hongkongais', 57:'Indien', 58:'Indonésien', 59:'Iranien', 60:'Irakien',
  61:'Japonais', 62:'Jordanien', 63:'Cambodgien', 64:'Kazakh', 65:'Koweïtien', 66:'Kirghize',
  68:'Libanais', 69:'Macanais', 70:'Malaisien', 71:'Maldivien', 72:'Birman', 73:'Népalais',
  74:'Nord-Coréen', 75:'Omanais', 76:'Pakistanais', 77:'Qatarien', 78:'Saoudien', 79:'Singapourien',
  80:'Sud-Coréen', 81:'Sri-Lankais', 82:'Syrien', 83:'Taïwanais', 84:'Tadjik', 85:'Thaïlandais',
  86:'Philippin', 87:'Turkmène', 88:'Émirati', 89:'Ouzbek', 90:'Vietnamien', 92:'Antiguais',
  93:'Arubais', 94:'Barbadien', 95:'Bélizien', 96:'Bermudien', 97:'Canadien', 99:'Costaricien',
  100:'Cubain', 102:'Salvadorien', 103:'Grenadien', 104:'Guatémaltèque', 105:'Guyanien',
  106:'Haïtien', 107:'Hondurien', 108:'Jamaïcain', 109:'Mexicain', 110:'Curacien',
  111:'Nicaraguayen', 112:'Panaméen', 113:'Portoricain', 115:'Kittitien', 117:'Surinamais',
  118:'Bahaméen', 119:'Trinidadien', 120:'Américain', 126:'Albanais', 127:'Andorran',
  128:'Arménien', 129:'Autrichien', 130:'Azerbaïdjanais', 131:'Belge', 132:'Biélorusse',
  133:'Bosnien', 134:'Bulgare', 135:'Croate', 136:'Chypriote', 137:'Tchèque', 138:'Danois',
  139:'Anglais', 140:'Estonien', 141:'Féroïen', 142:'Finlandais', 143:'Français', 144:'Géorgien',
  145:'Allemand', 146:'Grec', 147:'Hongrois', 148:'Islandais', 149:'Israélien', 150:'Italien',
  151:'Letton', 152:'Liechtensteinois', 153:'Lituanien', 154:'Luxembourgeois', 155:'Macédonien',
  156:'Maltais', 157:'Moldave', 158:'Néerlandais', 159:'Nord-Irlandais', 160:'Norvégien',
  161:'Polonais', 162:'Portugais', 163:'Irlandais', 164:'Roumain', 165:'Russe',
  166:'Saint-Marinais', 167:'Écossais', 168:'Slovaque', 169:'Slovène', 170:'Espagnol',
  171:'Suédois', 172:'Suisse', 173:'Turc', 174:'Ukrainien', 175:'Gallois', 177:'Australien',
  179:'Fidjien', 180:'Néo-Zélandais', 181:'Papouan', 183:'Tahitien', 184:'Tongien', 185:'Vanuatais',
  186:'Samoan', 187:'Argentin', 188:'Bolivien', 189:'Brésilien', 190:'Chilien', 191:'Colombien',
  192:'Équatorien', 193:'Paraguayen', 194:'Péruvien', 195:'Uruguayen', 196:'Vénézuélien',
  197:'Palestinien', 204:'Érythréen', 210:'Néo-Calédonien', 211:'Bhoutanais', 212:'Dominicain',
  216:'Gibraltarien', 219:'Kosovar', 225:'Guyanais', 226:'Martiniquais', 227:'Guadeloupéen',
  230:'Réunionnais', 231:'Mahorais', 234:'Comorien', 236:'Timorais', 240:'Sud-Soudanais',
  247:'Monténégrin',
}

const MONTHS = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']

const pad2 = n => String(n).padStart(2, '0')
const monthLabel = iso => MONTHS[+iso.slice(5, 7) - 1] + ' ' + iso.slice(0, 4)
const plural = (n, word) => `${n} ${word}${n > 1 ? 's' : ''}`

/* ── Classement calculé à partir des matchs (phase de ligue européenne…) ── */
function computeTable(fixtures) {
  const rows = {}
  const row = (t, name) => rows[t] || (rows[t] = { team: t, name, j: 0, g: 0, n: 0, l: 0, bp: 0, bc: 0, pts: 0, away: 0, awayW: 0, opps: [] })
  fixtures.forEach(f => { row(f.h, f.hn); row(f.a, f.an) })
  fixtures.filter(f => f.played).forEach(f => {
    const h = row(f.h, f.hn), a = row(f.a, f.an)
    h.j++; a.j++
    h.opps.push(a); a.opps.push(h)
    h.bp += f.hg; h.bc += f.ag; a.bp += f.ag; a.bc += f.hg; a.away += f.ag
    if (f.hg > f.ag) { h.g++; a.l++; h.pts += 3 }
    else if (f.hg < f.ag) { a.g++; a.awayW++; h.l++; a.pts += 3 }
    else { h.n++; a.n++; h.pts++; a.pts++ }
  })
  // Départage UEFA (phase de ligue) : pts, diff., buts, buts à l'extérieur, victoires,
  // victoires à l'extérieur, puis points / diff. / buts cumulés des adversaires rencontrés
  const sum = (r, fn) => r.opps.reduce((s, o) => s + fn(o), 0)
  const keys = r => [r.pts, r.bp - r.bc, r.bp, r.away, r.g, r.awayW,
    sum(r, o => o.pts), sum(r, o => o.bp - o.bc), sum(r, o => o.bp)]
  return Object.values(rows)
    .map(r => ({ r, k: keys(r) }))
    .sort((x, y) => { for (let i = 0; i < x.k.length; i++) if (y.k[i] !== x.k[i]) return y.k[i] - x.k[i]; return x.r.name.localeCompare(y.r.name) })
    .map(({ r }, i) => { const { opps, away, awayW, ...rest } = r; return { ...rest, pos: i + 1 } })
}

function tableRows(rows, teamId, zone) {
  return rows.map(r => {
    const out = { pos: r.pos, team: r.name, j: r.j, g: r.g, n: r.n, l: r.l, bp: r.bp, bc: r.bc, db: r.bp - r.bc, pts: r.pts }
    const z = zone(r.pos, rows.length)
    if (z) out.zone = z
    if (r.team === teamId) out.highlight = true
    return out
  })
}

/* ── Joueurs ── */
function playerBits(d, uid) {
  const p = d.players[uid] || {}
  const pos = (p.positions || []).map(c => POSITIONS[c] || c)[0]
  return { pos, nat: NATIONS[p.nation], age: p.age }
}

function shortName(name) {
  const parts = (name || '').split(' ')
  return parts.length > 1 ? parts[0][0] + '. ' + parts.slice(1).join(' ') : name
}
function lastName(name) {
  const parts = (name || '').split(' ')
  return parts.length > 1 ? parts.slice(1).join(' ') : name
}

function detailBase(d, s) {
  const b = playerBits(d, s.uid)
  return [b.pos, b.nat, b.age != null ? b.age + ' ans' : null].filter(Boolean)
}

function detailFull(d, s) {
  const bits = detailBase(d, s)
  bits.push(s.subs ? `${s.starts} tit. / ${s.subs} rempl.` : `${s.starts} tit.`)
  if (s.goals) bits.push(plural(s.goals, 'but'))
  if (s.assists) bits.push(s.assists > 1 ? `${s.assists} passes D.` : '1 passe D.')
  return bits.join(' · ')
}

// Top 3 « à la main » : les ex-aequo sont regroupés sur une seule ligne
function topList(d, key) {
  const groups = {}
  d.stats.filter(s => s[key] > 0).forEach(s => (groups[s[key]] = groups[s[key]] || []).push(s))
  const values = Object.keys(groups).map(Number).sort((a, b) => b - a)
  const out = []
  for (const v of values) {
    if (out.length >= 3) break
    const g = groups[v].sort((a, b) => b.minutes - a.minutes)
    if (g.length === 1) {
      out.push({ name: g[0].name, detail: detailBase(d, g[0]).join(' · '), value: v })
    } else if (g.length === 2) {
      const pos = g.map(s => playerBits(d, s.uid).pos || '?').join(' / ')
      out.push({ name: g.map(s => shortName(s.name)).join(' · '), detail: `${pos} · ex-aequo`, value: v })
    } else {
      out.push({ name: g.map(s => lastName(s.name)).join(' · '), detail: `${g.length} joueurs à égalité`, value: v })
    }
  }
  return out
}

function ratingLists(d, officialPlayed) {
  const min = Math.max(5, Math.ceil(officialPlayed * 0.4))
  const pool = d.stats.filter(s => s.rating != null && s.rated >= min)
  const fmt = s => ({ name: s.name, detail: detailFull(d, s), value: Math.round(s.rating * 100) / 100 })
  const best = [...pool].sort((a, b) => b.rating - a.rating).slice(0, 3).map(fmt)
  const worst = [...pool].sort((a, b) => a.rating - b.rating).slice(0, 3).map(fmt)
  return { ratings: best, flops: worst }
}

/* ── Construction de la saison ── */
function buildSeason(d, opts) {
  const careerId = opts.careerId
  const existing = opts.existing || null
  const team = d.club.team
  const year = `${d.season}/${pad2((d.season + 1) % 100)}`

  // Classement officiel du championnat : la table du jeu qui contient l'équipe
  const officialTables = {}
  d.tables.forEach(t => { officialTables[t.comp] = t })

  // Type et code de chaque compétition
  const comps = {}
  let cupCount = 0
  Object.entries(d.competitions).forEach(([id, c]) => {
    const known = KNOWN_COMPS[c.db_id]
    let kind
    if (c.friendly) kind = 'friendly'
    else if (officialTables[id] && c.nations <= 1) kind = 'league'
    else if (c.nations >= 3) kind = 'continental'
    else kind = 'cup'
    let code = known && known.code
    if (!code) code = kind === 'friendly' ? 'AM' : kind === 'league' ? 'BL' : kind === 'continental' ? 'EUR' : (cupCount++ ? 'CUP' + (cupCount) : 'CUP')
    let name = (opts.compNames && opts.compNames[code]) || (known && known.name)
    if (!name) name = kind === 'league' ? (opts.league || 'Championnat') : kind === 'continental' ? 'Coupe d\'Europe' : 'Coupe nationale'
    comps[id] = { id: +id, kind, code, name, stages: c.stages }
  })
  const compOf = f => comps[f.comp] || { kind: 'cup', code: 'CUP', name: 'Coupe' }
  const leagueComp = Object.values(comps).find(c => c.kind === 'league')
  const leagueName = (leagueComp && leagueComp.name) || opts.league || (existing && existing.league) || 'Championnat'

  const fixtures = d.fixtures
  const played = fixtures.filter(f => f.played && f.hg != null)
  const isHome = f => f.h === team
  const gfga = f => isHome(f) ? [f.hg, f.ag] : [f.ag, f.hg]
  const resultOf = f => { const [a, b] = gfga(f); return a > b ? 'W' : a < b ? 'L' : 'D' }
  const opp = f => isHome(f) ? f.an : f.hn

  // Phases : ligue (classement) ou élimination directe
  const stageOf = sid => d.stages[sid] || {}
  const isKnockout = sid => stageOf(sid).round_code != null && stageOf(sid).group == null

  // Classement de la phase de ligue européenne (calculé à partir des matchs)
  let leaguePhase = null
  Object.values(comps).filter(c => c.kind === 'continental').forEach(c => {
    c.stages.forEach(sid => {
      const st = stageOf(sid)
      if (!isKnockout(sid) && st.teams >= 20 && st.fixtures && st.fixtures.length) {
        const table = computeTable(st.fixtures)
        leaguePhase = { comp: c, stage: sid, table, row: table.find(r => r.team === team) }
      }
    })
  })

  function roundName(f) {
    const st = stageOf(f.stage)
    const c = compOf(f)
    if (!isKnockout(f.stage)) return 'J' + ((f.ri || 0) + 1)
    if (ROUND_CODES[st.round_code]) return ROUND_CODES[st.round_code]
    if (st.teams === 2) return 'Finale'
    if (st.teams === 4) return 'Demi-finale'
    if (st.teams === 8) return 'Quart de finale'
    if (st.teams === 16 && leaguePhase && leaguePhase.comp.id === c.id) {
      const firstKo = c.stages.filter(isKnockout).map(stageOf).sort((a, b) => (a.first_date || '').localeCompare(b.first_date || ''))[0]
      const pos = leaguePhase.row && leaguePhase.row.pos
      if (firstKo === st && pos > 8) return 'Barrages'
      return '8e de finale'
    }
    if (st.teams === 16) return '8e de finale'
    return 'Tour'
  }

  // Doubles confrontations : deux phases à élimination directe consécutives contre le même adversaire
  function twoLegPartner(f) {
    return fixtures.find(g => g !== f && g.comp === f.comp && isKnockout(g.stage) &&
      stageOf(g.stage).round_code === stageOf(f.stage).round_code && opp(g) === opp(f))
  }
  const laterStageOf = f => fixtures.some(g => g.comp === f.comp && g.date > f.date && g.stage !== f.stage &&
    !(twoLegPartner(f) === g))

  // Résultat « sportif » d'un match à élimination (t.a.b., qualification…)
  function knockoutInfo(f) {
    if (compOf(f).kind === 'friendly' || compOf(f).kind === 'league' || !isKnockout(f.stage)) return null
    const partner = twoLegPartner(f)
    const rn = roundName(f)
    if (partner) {
      const second = partner.date > f.date ? partner : f
      if (second !== f) return { leg: 'aller' }
      if (!partner.played) return { leg: 'retour' }
      const [a1, b1] = gfga(partner), [a2, b2] = gfga(f)
      const agg = [a1 + a2, b1 + b2]
      let qualified = agg[0] > agg[1] ? true : agg[0] < agg[1] ? false : (laterStageOf(f) ? true : null)
      return { leg: 'retour', qualified, agg, round: rn }
    }
    const r = resultOf(f)
    if (r === 'W') return { qualified: true, round: rn }
    if (r === 'L') return { qualified: false, round: rn }
    const qualified = laterStageOf(f) ? true : (stageOf(f.stage).teams === 2 ? null : false)
    return { qualified, shootout: true, round: rn }
  }

  // ── Mois par mois ──
  const oldMonths = {}
  ;((existing && existing.months) || []).forEach(m => { oldMonths[m.label] = m })
  const months = []
  played.forEach(f => {
    const label = monthLabel(f.date)
    let m = months.find(x => x.label === label)
    if (!m) {
      const old = oldMonths[label]
      m = { key: f.date.slice(5, 7), label, note: (old && old.note) || '', matches: [] }
      months.push(m)
    }
    const c = compOf(f)
    let r = resultOf(f)
    const ko = knockoutInfo(f)
    let tag = ''
    if (ko && ko.shootout) {
      if (ko.qualified === true) { r = 'W'; tag = 'QUALIF. T.A.B.' }
      else if (ko.qualified === false) { r = 'L'; tag = 'ÉLIMINÉ T.A.B. · ' + ko.round.toUpperCase() }
    } else if (ko && ko.leg === 'retour' && ko.qualified != null) {
      tag = (ko.qualified ? 'QUALIFIÉ' : 'ÉLIMINÉ') + ' · ' + ko.round.toUpperCase() + ` · ${ko.agg[0]}-${ko.agg[1]} SUR 2 MATCHS`
    } else if (ko && ko.qualified === false) {
      tag = 'ÉLIMINÉ · ' + ko.round.toUpperCase()
    }
    const match = { r, tip: `${opp(f)} (${isHome(f) ? 'D' : 'E'}) ${f.hg}-${f.ag}`, comp: c.code }
    // Garde les étiquettes écrites à la main (cartons rouges…) pour le même match
    const old = oldMonths[label] && (oldMonths[label].matches || []).find(x => x.tip === match.tip)
    if (old && old.tag && !tag) tag = old.tag
    if (tag) match.tag = tag
    m.matches.push(match)
  })

  // ── Classement du championnat ──
  const leagueTable = leagueComp && officialTables[leagueComp.id]
  const oldZones = {}
  ;((existing && existing.standings) || []).forEach(r => { if (r.zone) oldZones[r.pos] = r.zone })
  const hasOldZones = Object.keys(oldZones).length > 0
  const standings = leagueTable
    ? tableRows(leagueTable.rows.map(r => ({ ...r, name: r.name })), team,
        (pos, n) => hasOldZones ? oldZones[pos] : (pos <= 4 ? 'promo' : pos > n - 2 ? 'releg' : null))
    : []
  const totalTeams = leagueTable ? leagueTable.count : (existing && existing.totalTeams) || null
  const seasonLength = totalTeams ? (totalTeams - 1) * 2 : (existing && existing.seasonLength) || null
  const leagueFixtures = fixtures.filter(f => leagueComp && f.comp === leagueComp.id)
  const finished = leagueFixtures.length > 0 && leagueFixtures.every(f => f.played)

  // ── Coupes ──
  function cupBlock(c) {
    const rounds = played.filter(f => f.comp === c.id).map(f => {
      const ko = knockoutInfo(f)
      let result = resultOf(f)
      let suffix = ''
      let round = roundName(f)
      if (ko && ko.leg) round += ko.leg === 'aller' ? ' (aller)' : ' (retour)'
      if (ko && ko.shootout && ko.qualified != null) { result = ko.qualified ? 'W' : 'L'; suffix = ' · t.a.b.' + (ko.qualified ? '' : ' · éliminé') }
      else if (ko && ko.qualified === false && !ko.leg) suffix = ' · éliminé'
      else if (ko && ko.leg === 'retour' && ko.qualified != null) suffix = ko.qualified ? ' · qualifié' : ' · éliminé'
      return { result, round, score: `${f.hg} – ${f.ag}`, opponent: `${opp(f)} (${isHome(f) ? 'D' : 'E'})${suffix}` }
    })
    return rounds.length ? { name: c.name, code: c.code, rounds } : null
  }
  const domesticCups = Object.values(comps).filter(c => c.kind === 'cup')
    .map(cupBlock).filter(Boolean).sort((a, b) => b.rounds.length - a.rounds.length)
  const continental = Object.values(comps).filter(c => c.kind === 'continental')
    .map(cupBlock).filter(Boolean)

  let cup2 = continental[0] || null
  let elTable = null, elTableTitle = null
  if (cup2 && leaguePhase && leaguePhase.comp.code === cup2.code) {
    const lr = leaguePhase.row
    const n = leaguePhase.table.length
    const done = leaguePhase.table.every(r => r.j === lr.j)
    let fate = ''
    if (done && lr) fate = lr.pos <= 8 ? ' · qualifié pour les 8es de finale' : lr.pos <= 24 ? ' · qualifié pour les barrages' : ' · éliminé'
    if (lr) cup2.phase = `Phase de championnat : ${posLabel(lr.pos)} sur ${n} · ${lr.g}V ${lr.n}N ${lr.l}D · ${lr.pts} pts${fate}`
    elTableTitle = `Classement · Phase de championnat (${cup2.name})`
    elTable = tableRows(leaguePhase.table, team, pos => pos <= 8 ? 'promo' : pos > 24 ? 'releg' : null)
  }

  // ── Stats joueurs ──
  const officialPlayed = played.filter(f => compOf(f).kind !== 'friendly').length
  const { ratings, flops } = ratingLists(d, officialPlayed)

  // ── Objet saison (les champs saisis à la main sont conservés) ──
  const lastPlayed = played[played.length - 1]
  const compNames = {}
  Object.values(comps).forEach(c => { if (!['AM', 'BL', 'DFB', 'EL', 'UCL'].includes(c.code)) compNames[c.code] = c.name })

  const season = Object.assign({}, existing || {}, {
    id: (existing && existing.id) || `${careerId}-${d.season}-${pad2((d.season + 1) % 100)}`,
    year,
    league: leagueName,
    status: finished ? 'termine' : 'en_cours',
    totalTeams,
    seasonLength,
    lastUpdate: finished ? 'Saison terminée' : (lastPlayed ? monthLabel(lastPlayed.date) : '—'),
    position: null,
    months,
    scorers: topList(d, 'goals'),
    assists: topList(d, 'assists'),
    ratings,
    flops,
    transfers: (existing && existing.transfers) || [],
    departures: (existing && existing.departures) || [],
    cup: domesticCups[0] || null,
    cup2,
    standings,
  })
  if (elTable) { season.elTableTitle = elTableTitle; season.elTable = elTable }
  else { delete season.elTable; delete season.elTableTitle }
  if (Object.keys(compNames).length) season.compNames = compNames
  else delete season.compNames
  return season
}

/* ── Écriture du fichier seasons-*.js ── */
const IDENT = /^[A-Za-z_$][A-Za-z0-9_$]*$/

function toJs(value, indent) {
  indent = indent || ''
  const inner = indent + '  '
  if (value === null || typeof value !== 'object') return JSON.stringify(value === undefined ? null : value)
  const isArr = Array.isArray(value)
  const entries = isArr ? value.map(v => [null, v]) : Object.entries(value).filter(([, v]) => v !== undefined)
  if (!entries.length) return isArr ? '[]' : '{}'
  const key = k => IDENT.test(k) ? k : JSON.stringify(k)
  const flat = entries.every(([, v]) => v === null || typeof v !== 'object')
  if (flat) {
    const one = entries.map(([k, v]) => (k === null ? '' : key(k) + ': ') + JSON.stringify(v)).join(', ')
    const line = isArr ? `[ ${one} ]` : `{ ${one} }`
    if (line.length + indent.length <= 140) return line
  }
  const body = entries.map(([k, v]) => inner + (k === null ? '' : key(k) + ': ') + toJs(v, inner)).join(',\n')
  return (isArr ? '[\n' : '{\n') + body + ',\n' + indent + (isArr ? ']' : '}')
}

function serialize(seasons, careerId, header) {
  const head = header || `/**\n * ${careerId.toUpperCase()}\n */`
  const stamp = `// Mis à jour avec l'outil d'import .fm le ${new Date().toLocaleDateString('fr-FR')}`
  return `${head}\n${stamp}\nwindow[${JSON.stringify('SEASONS_' + careerId)}] = ${toJs(seasons, '')}\n`
}

// Remplace (ou ajoute en tête) la saison de la même année
function mergeSeasons(seasons, season) {
  const list = (seasons || []).slice()
  const i = list.findIndex(s => s.year === season.year || s.id === season.id)
  if (i >= 0) list[i] = season
  else list.unshift(season)
  return list
}

window.FMImport = { buildSeason, mergeSeasons, serialize, toJs, NATIONS, KNOWN_COMPS }

})()
