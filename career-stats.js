/* ═══════════════════════════════════════════════
   BILAN DE CARRIÈRE — calculs partagés
   Utilisé par les pages carrière des deux designs.
   Tout est déduit des données déjà saisies (matchs de
   championnat, coupes, classements, mercato) : rien à
   remplir en plus dans les fichiers seasons-*.js.
═══════════════════════════════════════════════ */

window.CareerStats = (function () {

  const TIP = /^(.*?)\s*\((D|E|N)\)\s*(\d+)\s*-\s*(\d+)/

  function parseTip(tip) {
    const m = (tip || '').match(TIP)
    if (!m) return null
    const h = +m[3], a = +m[4]
    return { opp: m[1].trim(), venue: m[2], h, a, gf: m[2] === 'E' ? a : h, ga: m[2] === 'E' ? h : a }
  }

  // Matchs de championnat d'une saison, quel que soit le format
  function leagueMatches(s) {
    if (s.months && s.months.length)
      return s.months.flatMap(m => m.matches || []).filter(m => !m.comp || m.comp === 'L' || m.comp === 'BL')
    if (s.matches && s.matches.length) return s.matches
    return (s.stints || []).flatMap(t => t.matches || [])
  }

  function seasonPosition(s) {
    const hl = (s.standings || []).find(r => r.highlight)
    return hl ? hl.pos : (s.position != null ? s.position : null)
  }

  function seasonPoints(s) {
    if (s.points != null && !s.months) return s.points
    return leagueMatches(s).reduce((a, m) => a + (m.r === 'W' ? 3 : m.r === 'D' ? 1 : 0), 0)
  }

  const isFinal = round => /^\s*finale\b/i.test(round || '')
  const clean = name => String(name || '').replace(/\s*🏆/g, '').trim()

  function cupsOf(s) {
    return [s.cup2, s.cup, s.cup3, ...(s.cups || []), ...(s.stints || []).flatMap(t => t.cups || [])]
      .filter(c => c && c.rounds && c.rounds.length)
  }

  function parseAmount(a) {
    const m = String(a || '').replace(/\s/g, '').match(/([\d.,]+)([MK])/i)
    if (!m) return 0
    const n = parseFloat(m[1].replace(',', '.'))
    return m[2].toUpperCase() === 'M' ? n * 1e6 : n * 1e3
  }

  function formatMoney(n) {
    if (n >= 1e6) return (n / 1e6).toLocaleString('fr-FR', { maximumFractionDigits: 1 }) + ' M€'
    if (n > 0) return Math.round(n / 1e3).toLocaleString('fr-FR') + ' K€'
    return '0 €'
  }

  const emptyRec = () => ({ j: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0 })
  function addRec(rec, t, r) {
    rec.j++; rec.gf += t.gf; rec.ga += t.ga
    if (r === 'W') rec.w++; else if (r === 'D') rec.d++; else rec.l++
  }

  function compute(rawSeasons) {
    const seasons = (rawSeasons || []).slice().sort((a, b) => a.year.localeCompare(b.year))
    const out = {
      seasons: seasons.length,
      total: emptyRec(), home: emptyRec(), away: emptyRec(),
      biggestWin: null, worstLoss: null, winStreak: null, unbeatenStreak: null, lossStreak: null,
      opponents: [], trophies: [], finals: [], bestSeason: null, worstSeason: null,
      mercato: { spent: 0, received: 0, buys: 0, sales: 0, biggestBuy: null, biggestSale: null },
    }
    const opp = {}
    const better = (cand, cur, key) => !cur || cand[key] > cur[key]

    seasons.forEach(s => {
      // ── Matchs de championnat : records, séries, domicile / extérieur, adversaires
      let win = 0, unb = 0, loss = 0
      leagueMatches(s).forEach(m => {
        const t = parseTip(m.tip)
        const r = m.r
        if (t) {
          addRec(out.total, t, r)
          if (t.venue === 'D') addRec(out.home, t, r)
          else if (t.venue === 'E') addRec(out.away, t, r)
          const o = opp[t.opp] || (opp[t.opp] = Object.assign({ name: t.opp }, emptyRec()))
          addRec(o, t, r)
          const diff = t.gf - t.ga
          const match = { opp: t.opp, venue: t.venue, h: t.h, a: t.a, gf: t.gf, ga: t.ga, diff, year: s.year, league: s.league }
          if (r === 'W' && (!out.biggestWin || diff > out.biggestWin.diff || (diff === out.biggestWin.diff && t.gf > out.biggestWin.gf))) out.biggestWin = match
          if (r === 'L' && (!out.worstLoss || diff < out.worstLoss.diff || (diff === out.worstLoss.diff && t.ga > out.worstLoss.ga))) out.worstLoss = match
        }
        win = r === 'W' ? win + 1 : 0
        unb = r === 'W' || r === 'D' ? unb + 1 : 0
        loss = r === 'L' ? loss + 1 : 0
        if (win && better({ n: win }, out.winStreak, 'n')) out.winStreak = { n: win, year: s.year }
        if (unb && better({ n: unb }, out.unbeatenStreak, 'n')) out.unbeatenStreak = { n: unb, year: s.year }
        if (loss && better({ n: loss }, out.lossStreak, 'n')) out.lossStreak = { n: loss, year: s.year }
      })

      // ── Vitrine : titres de champion, coupes gagnées, finales perdues
      const pos = seasonPosition(s)
      if (pos === 1 && s.status !== 'en_cours')
        out.trophies.push({ year: s.year, name: 'Champion · ' + clean(s.league).replace(/^.*→\s*/, ''), kind: 'league' })
      cupsOf(s).forEach(c => {
        const last = c.rounds[c.rounds.length - 1]
        const text = [c.name, last.round, last.opponent].join(' ')
        if (/🏆/.test(text) || /vainqueur/i.test(last.opponent || '') || (isFinal(last.round) && last.result === 'W'))
          out.trophies.push({ year: s.year, name: clean(c.name), kind: 'cup' })
        else if (isFinal(last.round))
          out.finals.push({ year: s.year, name: clean(c.name), opponent: String(last.opponent || '').replace(/\s*[(·].*$/, '') })
      })
      if (s.playoffs) {
        const o = s.playoffs.outcome || ''
        if (/vainqueur|remport|gagn/i.test(o)) out.trophies.push({ year: s.year, name: clean(s.playoffs.competition), kind: 'cup' })
        else if (/finaliste/i.test(o)) out.finals.push({ year: s.year, name: clean(s.playoffs.competition), opponent: s.playoffs.opponent || '' })
      }

      // ── Meilleure / pire saison (classement, puis points)
      if (pos != null && s.status !== 'en_cours') {
        const entry = { year: s.year, league: clean(s.league), pos, pts: seasonPoints(s), teams: s.totalTeams }
        if (!out.bestSeason || pos < out.bestSeason.pos || (pos === out.bestSeason.pos && entry.pts > out.bestSeason.pts)) out.bestSeason = entry
        if (!out.worstSeason || pos > out.worstSeason.pos || (pos === out.worstSeason.pos && entry.pts < out.worstSeason.pts)) out.worstSeason = entry
      }

      // ── Mercato cumulé
      // Tout montant compte (les anciennes saisons notent les achats « sell »)
      ;(s.transfers || []).forEach(t => {
        const v = parseAmount(t.amount); out.mercato.spent += v; if (v) out.mercato.buys++
        if (v && (!out.mercato.biggestBuy || v > out.mercato.biggestBuy.value)) out.mercato.biggestBuy = { name: t.name, club: t.from, amount: t.amount, value: v, year: s.year }
      })
      ;(s.departures || []).forEach(t => {
        const v = parseAmount(t.amount); out.mercato.received += v; if (v) out.mercato.sales++
        if (v && (!out.mercato.biggestSale || v > out.mercato.biggestSale.value)) out.mercato.biggestSale = { name: t.name, club: t.to, amount: t.amount, value: v, year: s.year }
      })
    })

    if (out.bestSeason && out.worstSeason && out.bestSeason.pos === out.worstSeason.pos) out.worstSeason = null
    out.opponents = Object.values(opp).sort((a, b) => b.j - a.j || b.w - a.w || a.name.localeCompare(b.name))
    const faced = out.opponents.filter(o => o.j >= 2)
    out.favourite = faced.slice().sort((a, b) => b.w - a.w || (b.w / b.j) - (a.w / a.j) || b.j - a.j)[0] || null
    out.nemesis = faced.slice().sort((a, b) => b.l - a.l || (b.l / b.j) - (a.l / a.j) || b.j - a.j)[0] || null
    if (out.nemesis && out.nemesis.l === 0) out.nemesis = null
    return out
  }

  // Records du club annoncés par le jeu (champ "records" de chaque saison).
  // Un même record ("key") battu plusieurs fois : seule la version la plus récente reste.
  function clubRecords(rawSeasons) {
    const best = new Map()
    ;(rawSeasons || []).slice().sort((a, b) => a.year.localeCompare(b.year))
      .forEach(s => (s.records || []).forEach(r => best.set(r.key || r.label, Object.assign({ year: s.year }, r))))
    return [...best.values()]
  }

  // Distinctions (champ "awards" de chaque saison) : toutes conservées, dans l'ordre chronologique
  function awards(rawSeasons) {
    return (rawSeasons || []).slice().sort((a, b) => a.year.localeCompare(b.year))
      .flatMap(s => (s.awards || []).map(a => Object.assign({ year: s.year }, a)))
  }

  return { compute, clubRecords, awards, parseTip, parseAmount, formatMoney, isFinal }
})()
