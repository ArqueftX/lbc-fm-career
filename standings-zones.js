/* ═══════════════════════════════════════════════
   ZONES DES CLASSEMENTS — partagé par les deux designs
   Donne à chaque ligne d'un classement sa zone (LDC,
   Europa League, relégation…) et la légende qui va avec.

   Dans les fichiers seasons-*.js, le champ "zone" d'une ligne peut valoir :
     Championnat : "ucl" (Ligue des Champions), "uel" (Europa League),
                   "uecl" (Conference League), "promo" (promotion),
                   "promo-playoff" (barrage de promotion),
                   "releg-playoff" (barrage de relégation), "releg" (relégation)
     Phase de championnat européenne : "r16" (qualifié en 1/8e),
                   "playoff" (barragiste), "out" (éliminé)
   "champion:true" marque le champion.

   Les anciennes saisons n'utilisent que "promo" / "releg" (et "barr") : la zone
   précise est alors déduite du championnat (voir TOP et DIRECT_RELEG).
═══════════════════════════════════════════════ */

window.StandingsZones = (function () {

  const COLORS = {
    champion:        '#e8b84b',
    ucl:             '#3b82f6',
    uel:             '#ec4899',
    uecl:            '#14b8a6',
    promo:           '#22c55e',
    'promo-playoff': '#84cc16',
    'releg-playoff': '#f97316',
    releg:           '#ef4444',
    r16:             '#22c55e',
    playoff:         '#f59e0b',
    out:             '#ef4444',
  }
  const ORDER = Object.keys(COLORS)

  function label(key, final) {
    switch (key) {
      case 'champion':      return 'Champion'
      case 'ucl':           return 'Ligue des Champions'
      case 'uel':           return 'Europa League'
      case 'uecl':          return 'Conference League'
      case 'promo':         return final ? 'Promus' : 'Promotion'
      case 'promo-playoff': return 'Barrage de promotion'
      case 'releg-playoff': return 'Barrage de relégation'
      case 'releg':         return final ? 'Relégués' : 'Relégables'
      case 'r16':           return 'Qualifié en 1/8e'
      case 'playoff':       return 'Barragiste'
      case 'out':           return 'Éliminé'
    }
    return ''
  }

  // Places européennes par défaut [LDC, Europa League] — le reste de la zone « promo » = Conference League
  const TOP = {
    'Bundesliga':     [4, 1],
    'Premier League': [4, 1],
    'La Liga':        [4, 1],
    'Ligue 1':        [4, 1],
    'Eredivisie':     [2, 1],
  }
  // Relégations directes — au-dessus, la zone « releg » d'une ancienne saison = barrage
  const DIRECT_RELEG = { 'Premier League': 3, 'La Liga': 3, 'National': 3 }

  const leagueName = l => String(l || '').replace(/^.*→\s*/, '').trim()
  const isLegacy = rows => rows.every(r => !r.zone || r.zone === 'promo' || r.zone === 'releg' || r.zone === 'barr')

  /* rows : lignes du classement
     opts : { league, europe:true pour une phase de championnat européenne,
              final:true pour un classement de fin de saison } */
  function keys(rows, opts) {
    const o = opts || {}
    const legacy = isLegacy(rows)
    const league = leagueName(o.league)
    const out = rows.map(r => r.zone || null)

    if (legacy && o.europe) {
      // Format à 36 : 1-8 en 1/8e, 9-24 en barrages, 25-36 éliminés
      const hasZones = rows.some(r => r.zone)
      rows.forEach((r, i) => {
        out[i] = !hasZones ? null : r.pos <= 8 ? 'r16' : r.pos <= 24 ? 'playoff' : 'out'
      })
    } else if (legacy) {
      // Zones continues : la ligne de l'équipe suivie n'y porte souvent pas de "zone"
      const top = TOP[league]
      const promoPos = rows.filter(r => r.zone === 'promo').map(r => r.pos)
      const relegPos = rows.filter(r => r.zone === 'releg').map(r => r.pos)
      const lastPromo = promoPos.length ? Math.max(...promoPos) : 0
      const firstReleg = relegPos.length ? Math.min(...relegPos) : Infinity
      const last = Math.max(...rows.map(r => r.pos))
      const direct = DIRECT_RELEG[league] || 2
      rows.forEach((r, i) => {
        if (r.pos <= lastPromo) {
          const n = r.pos - 1
          out[i] = !top ? 'promo' : n < top[0] ? 'ucl' : n < top[0] + top[1] ? 'uel' : 'uecl'
        } else if (r.zone === 'barr') {
          out[i] = 'releg-playoff'
        } else if (r.pos >= firstReleg) {
          out[i] = last - r.pos < direct ? 'releg' : 'releg-playoff'
        } else out[i] = null
      })
    }

    // Champion : marqué dans les données, ou 1er d'un classement final de championnat
    rows.forEach((r, i) => { if (r.champion || (o.final && !o.europe && r.pos === 1)) out[i] = 'champion' })
    return out.map(k => (k && COLORS[k] ? k : null))
  }

  /* Légende : zones présentes dans le classement, dans l'ordre */
  function legend(ks, final) {
    const present = new Set(ks.filter(Boolean))
    return ORDER.filter(k => present.has(k)).map(k => ({ key: k, label: label(k, final), color: COLORS[k] }))
  }

  return { keys, legend, color: k => COLORS[k] || null }
})()
