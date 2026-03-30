import { useState } from 'react'
import { SEASONS } from './data/seasons.js'

/* ═══════════════════════════════════════════════
   PALETTE
═══════════════════════════════════════════════ */
const C = {
  navy:  '#07111f',
  blue:  '#0c2259',
  mid:   '#152d72',
  gold:  '#e8b84b',
  goldL: '#f6d98e',
  white: '#eef2ff',
  muted: '#6a82b0',
  green: '#3dd68c',
  red:   '#e85050',
}

const LEAGUE_STYLES = {
  'National': { bg:'rgba(70,120,220,0.18)', border:'#4678dc', color:'#7aabff' },
  'Ligue 2':  { bg:'rgba(140,70,220,0.18)', border:'#8c46dc', color:'#bc88ff' },
  'Ligue 1':  { bg:'rgba(220,70,100,0.18)', border:'#dc4664', color:'#ff8aa0' },
}

/* ═══════════════════════════════════════════════
   ROOT APP
═══════════════════════════════════════════════ */
export default function App() {
  const [view, setView] = useState('home')
  const [current, setCurrent] = useState(null)

  const goHome    = ()  => { setView('home');    window.scrollTo(0,0) }
  const goDetail  = (s) => { setCurrent(s);  setView('detail');  window.scrollTo(0,0) }
  const goMercato = (s) => { setCurrent(s);  setView('mercato'); window.scrollTo(0,0) }
  const goSelect  = (s) => { setCurrent(s);  setView(s.splash ? 'splash' : 'detail'); window.scrollTo(0,0) }

  if (view === 'splash'  && current) return <SeasonSplash season={current} onDone={() => goDetail(current)} />
  if (view === 'detail'  && current) return <SeasonPage  season={current} onBack={goHome}           onMercato={() => goMercato(current)} />
  if (view === 'mercato' && current) return <MercatoPage season={current} onBack={() => goDetail(current)} />

  return <HomePage seasons={SEASONS} onSelect={goSelect} />
}

/* ═══════════════════════════════════════════════
   SEASON SPLASH
═══════════════════════════════════════════════ */
function SeasonSplash({ season, onDone }) {
  const [phase, setPhase] = useState('in')
  const sp = season.splash

  useEffect(() => {
    const out = setTimeout(() => {
      setPhase('out')
      setTimeout(onDone, 700)
    }, 4200)
    return () => clearTimeout(out)
  }, [])

  const dismiss = () => {
    if (phase === 'out') return
    setPhase('out')
    setTimeout(onDone, 700)
  }

  return (
    <div
      onClick={dismiss}
      style={{
        position:'fixed', inset:0, zIndex:999,
        background: C.navy,
        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
        cursor:'pointer',
        opacity: phase === 'out' ? 0 : 1,
        transition: 'opacity 0.7s ease',
        overflow:'hidden',
      }}
    >
      {/* Background decoration */}
      <div style={{ position:'absolute', inset:0, backgroundImage:'repeating-linear-gradient(135deg,rgba(232,184,75,0.03) 0,rgba(232,184,75,0.03) 1px,transparent 1px,transparent 40px)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)', width:'80vmin', height:'80vmin', borderRadius:'50%', background:'radial-gradient(circle,rgba(12,34,89,0.8) 0%,transparent 70%)', pointerEvents:'none' }} />

      <div style={{ position:'relative', textAlign:'center', padding:'0 40px', maxWidth:800 }}>

        {/* Eyebrow */}
        <div
          className="bc"
          style={{ fontSize:11, letterSpacing:8, color:C.gold, marginBottom:32, fontWeight:600, opacity:0,
            animation:'fadeUp 0.6s ease 0.3s both' }}
        >
          {sp.eyebrow}
        </div>

        {/* Main lines */}
        {sp.lines.map((line, i) => (
          <div
            key={i}
            className="bb"
            style={{
              fontSize:'clamp(52px,10vw,120px)', lineHeight:0.92, letterSpacing:3,
              color: i === 0 ? C.white : C.gold,
              opacity:0, animation:`fadeUp 0.7s ease ${0.7 + i * 0.25}s both`,
            }}
          >
            {line}
          </div>
        ))}

        {/* Divider */}
        <div style={{ width:0, height:2, background:C.gold, margin:'36px auto', opacity:0, animation:`expandW 0.6s ease 1.4s both` }} />

        {/* Sub */}
        <div
          className="bb"
          style={{ fontSize:'clamp(18px,3vw,32px)', letterSpacing:6, color:C.muted, marginBottom:20, opacity:0, animation:'fadeUp 0.6s ease 1.6s both' }}
        >
          {sp.sub}
        </div>

        {/* Tagline */}
        <div
          className="bc"
          style={{ fontSize:'clamp(14px,2vw,20px)', color:C.white, letterSpacing:2, fontWeight:300, fontStyle:'italic', opacity:0, animation:'fadeUp 0.6s ease 1.9s both' }}
        >
          {sp.tagline}
        </div>

        {/* Click hint */}
        <div
          className="bc"
          style={{ marginTop:56, fontSize:10, letterSpacing:4, color:'rgba(106,130,176,0.5)', opacity:0, animation:'fadeIn 0.6s ease 2.8s both' }}
        >
          CLIQUER POUR CONTINUER
        </div>
      </div>

      <style>{`
        @keyframes expandW { from { width:0; opacity:0 } to { width:120px; opacity:1 } }
      `}</style>
    </div>
  )
}

/* ═══════════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════════ */
function HomePage({ seasons, onSelect }) {
  const sorted   = [...seasons].sort((a, b) => b.year.localeCompare(a.year))
  const totalW   = seasons.reduce((s, x) => s + x.wins, 0)
  const totalPts = seasons.reduce((s, x) => s + x.points, 0)

  return (
    <div style={{ minHeight:'100vh', background:C.navy }}>

      {/* HEADER */}
      <div style={{ background:`linear-gradient(160deg,${C.blue} 0%,${C.navy} 65%)`, padding:'60px 56px 52px', borderBottom:'1px solid rgba(232,184,75,0.08)', position:'relative', overflow:'hidden' }}>
        {/* Decorative grid */}
        <div style={{ position:'absolute', top:0, right:0, width:320, height:'100%', backgroundImage:'repeating-linear-gradient(90deg,rgba(232,184,75,0.04) 0,rgba(232,184,75,0.04) 1px,transparent 1px,transparent 24px)', pointerEvents:'none' }} />

        <div style={{ maxWidth:1160, margin:'0 auto' }}>
          <div className="bc au" style={{ fontSize:10, letterSpacing:6, color:C.gold, marginBottom:18, fontWeight:600 }}>
            FOOTBALL MANAGER 26 · CARRIÈRE
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:32, flexWrap:'wrap' }}>
            <img
              src="./logo.png"
              alt="La Berrichonne de Châteauroux"
              className="au au1"
              style={{ width:110, height:110, objectFit:'contain', flexShrink:0 }}
            />
            <div>
              <h1 className="bb au au1" style={{ fontSize:'clamp(40px,7vw,80px)', lineHeight:0.9, letterSpacing:2, marginBottom:16 }}>
                La Berrichonne<br /><span style={{ color:C.gold }}>de Châteauroux</span>
              </h1>
              <div className="bc au au2" style={{ fontSize:12, color:C.muted, letterSpacing:3, fontWeight:400 }}>
                {seasons.length} SAISON{seasons.length !== 1 ? 'S' : ''} · {totalW} VICTOIRES · {totalPts} POINTS CUMULÉS
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEASON CARDS */}
      <div style={{ maxWidth:1160, margin:'0 auto', padding:'48px 56px 80px' }}>
        {sorted.length === 0 ? (
          <div style={{ textAlign:'center', padding:'80px 0', color:C.muted }}>
            <div className="bb" style={{ fontSize:32, letterSpacing:4, color:C.mid }}>AUCUNE SAISON</div>
            <div className="bc" style={{ marginTop:12, fontSize:13, letterSpacing:2 }}>
              Ajoutez vos saisons dans <code>src/data/seasons.js</code>
            </div>
          </div>
        ) : (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:3 }}>
            {sorted.map((s, i) => (
              <SeasonCard key={s.id} season={s} onClick={() => onSelect(s)} delay={i * 0.08} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════
   SEASON CARD
═══════════════════════════════════════════════ */
function SeasonCard({ season: s, onClick, delay }) {
  const ls = LEAGUE_STYLES[s.league] || LEAGUE_STYLES['National']
  const winRate = Math.round((s.wins / s.played) * 100)

  return (
    <div
      onClick={onClick}
      className="scard au"
      style={{ background:C.blue, cursor:'pointer', padding:'28px 26px', borderLeft:`3px solid ${C.gold}`, position:'relative', overflow:'hidden', animationDelay:`${delay}s` }}
    >
      {/* Giant position bg */}
      <div className="bb" style={{ position:'absolute', right:-8, bottom:-20, fontSize:140, color:'rgba(255,255,255,0.03)', lineHeight:1, pointerEvents:'none', userSelect:'none' }}>
        {s.position}
      </div>

      {/* League badge */}
      <div className="bc" style={{ display:'inline-block', background:ls.bg, border:`1px solid ${ls.border}`, color:ls.color, fontSize:9, letterSpacing:4, padding:'3px 10px', marginBottom:18, fontWeight:700 }}>
        {s.league}
      </div>

      <div className="bb" style={{ fontSize:38, lineHeight:1, marginBottom:4, letterSpacing:1 }}>{s.year}</div>

      {/* Position */}
      <div style={{ display:'flex', alignItems:'baseline', gap:6, marginBottom:22 }}>
        <span className="bb" style={{ fontSize:66, color:C.gold, lineHeight:1 }}>{s.position}</span>
        <span className="bb" style={{ fontSize:28, color:C.white }}>e</span>
        <span className="bc" style={{ fontSize:12, color:C.muted }}>/{s.totalTeams}</span>
      </div>

      {/* Stats strip */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:8, marginBottom:18 }}>
        {[['Pts', s.points, C.goldL], ['V', s.wins, C.green], ['N', s.draws, C.gold], ['D', s.losses, C.red]].map(([l, v, col]) => (
          <div key={l}>
            <div className="bb" style={{ fontSize:26, color:col, lineHeight:1 }}>{v}</div>
            <div className="bc" style={{ fontSize:9, letterSpacing:3, color:C.muted, marginTop:2 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* Mini result dots */}
      <div style={{ display:'flex', flexWrap:'wrap', gap:3 }}>
        {(s.matches || []).map((m, i) => (
          <div key={i} style={{ width:7, height:7, borderRadius:2, background:m.r==='W'?C.green:m.r==='D'?C.gold:C.red, opacity:0.85 }} />
        ))}
      </div>

      {/* Win rate bar */}
      <div style={{ marginTop:14 }}>
        <div style={{ height:2, background:'rgba(255,255,255,0.06)', borderRadius:2, overflow:'hidden' }}>
          <div style={{ height:'100%', width:`${winRate}%`, background:C.green, borderRadius:2 }} />
        </div>
        <div className="bc" style={{ fontSize:9, color:C.muted, marginTop:4, letterSpacing:2 }}>{winRate}% DE VICTOIRES</div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════
   SECTION WRAPPER
═══════════════════════════════════════════════ */
function Sec({ title, children, mb = 60 }) {
  return (
    <div style={{ marginBottom:mb }}>
      <div className="bc" style={{ fontSize:10, letterSpacing:6, color:C.gold, marginBottom:22, paddingBottom:11, borderBottom:'1px solid rgba(232,184,75,0.18)', fontWeight:700, textTransform:'uppercase' }}>
        {title}
      </div>
      {children}
    </div>
  )
}

/* ═══════════════════════════════════════════════
   SEASON DETAIL PAGE
═══════════════════════════════════════════════ */
function SeasonPage({ season: s, onBack, onMercato }) {
  const gd = s.gf - s.ga
  const ls = LEAGUE_STYLES[s.league] || LEAGUE_STYLES['National']

  return (
    <div style={{ minHeight:'100vh', background:C.navy }}>

      {/* STICKY NAV */}
      <div style={{ position:'sticky', top:0, zIndex:99, background:'rgba(7,17,31,0.96)', backdropFilter:'blur(10px)', padding:'14px 48px', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
        <button onClick={onBack} className="bc" style={{ background:'transparent', border:'none', color:C.muted, cursor:'pointer', fontSize:11, letterSpacing:4, fontFamily:'inherit', display:'flex', alignItems:'center', gap:8 }}>
          ← TOUTES LES SAISONS
        </button>
        <div className="bb" style={{ fontSize:15, letterSpacing:5, color:C.gold }}>{s.year} · {s.league}</div>
        <div style={{ width:120 }} />
      </div>

      {/* HERO */}
      <div style={{ position:'relative', background:`linear-gradient(150deg,${C.blue} 0%,${C.navy} 55%)`, padding:'70px 56px 80px', overflow:'hidden' }}>
        <div className="bb" style={{ position:'absolute', right:-20, top:'50%', transform:'translateY(-50%)', fontSize:'clamp(160px,28vw,440px)', color:'rgba(12,34,89,0.6)', lineHeight:1, pointerEvents:'none', userSelect:'none' }}>
          {s.position}
        </div>
        <div style={{ maxWidth:1160, margin:'0 auto', position:'relative' }}>
          <div className="bc au" style={{ fontSize:10, letterSpacing:6, color:C.gold, marginBottom:14, fontWeight:600 }}>BILAN DE SAISON · {s.league}</div>
          <h1 className="bb au au1" style={{ fontSize:'clamp(44px,7.5vw,96px)', lineHeight:0.88, letterSpacing:2, marginBottom:10 }}>
            La Berrichonne<br /><span style={{ color:C.gold }}>de Châteauroux</span>
          </h1>
          <div className="bc au au2" style={{ display:'inline-block', background:C.gold, color:C.navy, fontSize:12, letterSpacing:5, padding:'5px 16px', marginBottom:52, fontWeight:700 }}>
            {s.league} · {s.year}
          </div>

          <div className="au au3" style={{ display:'flex', gap:40, flexWrap:'wrap' }}>
            {[[s.position + (s.position === 1 ? 'er' : 'e'), 'Position'], [s.points, 'Points'], [s.gf, 'Buts marqués'], [s.played, 'Matchs']].map(([val, lbl]) => (
              <div key={lbl}>
                <div className="bb" style={{ fontSize:68, lineHeight:1, color:C.gold }}>{val}</div>
                <div className="bc" style={{ fontSize:10, letterSpacing:4, color:C.muted, marginTop:3, textTransform:'uppercase' }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth:1160, margin:'0 auto', padding:'64px 56px 100px' }}>

        {/* Match dots */}
        <Sec title={`Parcours ${s.league} — ${s.played} matchs`}>
          <div style={{ display:'grid', gridTemplateColumns:`repeat(${Math.min((s.matches||[]).length, 38)}, 1fr)`, gap:5, marginBottom:14 }}>
            {(s.matches || []).map((m, i) => (
              <div key={i} className="rdot" data-tip={`J${i+1} · ${m.tip}`}
                style={{ aspectRatio:'1', borderRadius:4, background:m.r==='W'?C.green:m.r==='D'?C.gold:C.red }} />
            ))}
          </div>
          <div style={{ display:'flex', gap:18 }}>
            {[['Victoire', C.green], ['Nul', C.gold], ['Défaite', C.red]].map(([l, c]) => (
              <div key={l} style={{ display:'flex', alignItems:'center', gap:6 }}>
                <div style={{ width:9, height:9, borderRadius:2, background:c }} />
                <span className="bc" style={{ letterSpacing:2, fontSize:10, color:C.muted }}>{l}</span>
              </div>
            ))}
          </div>
        </Sec>

        {/* Big stat row */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:2, marginBottom:64 }}>
          {[['Victoires', s.wins, C.green], ['Nuls', s.draws, C.gold], ['Défaites', s.losses, C.red], ['Buts pour', s.gf, C.white], ['Diff.', gd >= 0 ? '+' + gd : gd, gd >= 0 ? C.green : C.red]].map(([lbl, val, col]) => (
            <div key={lbl} style={{ background:C.blue, padding:'22px 18px', borderLeft:`3px solid ${C.gold}` }}>
              <div className="bb" style={{ fontSize:50, lineHeight:1, color:col }}>{val}</div>
              <div className="bc" style={{ fontSize:9, letterSpacing:3, color:C.muted, marginTop:7, textTransform:'uppercase' }}>{lbl}</div>
            </div>
          ))}
        </div>

        {/* Performers + Mercato preview */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:44, marginBottom:64 }}>
          <div>
            <PerfList title="Meilleurs buteurs"  items={s.scorers}  unit="buts" />
            <div style={{ marginTop:44 }}><PerfList title="Meilleures notes" items={s.ratings} unit="moy." /></div>
          </div>
          <div>
            <PerfList title="Meilleurs passeurs" items={s.assists}  unit="passes D." />
            <div style={{ marginTop:44 }}>
              {/* Mercato preview card */}
              <div
                onClick={onMercato}
                style={{ cursor:'pointer', border:'1px solid rgba(232,184,75,0.2)', borderLeft:`3px solid ${C.gold}`, padding:'20px 22px', transition:'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background='rgba(21,45,114,0.4)'}
                onMouseLeave={e => e.currentTarget.style.background='transparent'}
              >
                {/* Header */}
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
                  <div className="bc" style={{ fontSize:10, letterSpacing:6, color:C.gold, fontWeight:700, textTransform:'uppercase' }}>Mercato</div>
                  <div className="bc" style={{ fontSize:10, letterSpacing:3, color:C.gold, fontWeight:700 }}>VOIR TOUT →</div>
                </div>

                {/* Arrivées preview */}
                {s.transfers?.length > 0 && (
                  <div style={{ marginBottom:14 }}>
                    <div className="bc" style={{ fontSize:9, letterSpacing:3, color:C.green, marginBottom:8, fontWeight:700 }}>↑ ARRIVÉES</div>
                    {s.transfers.slice(0,3).map((t,i) => (
                      <div key={i} style={{ display:'flex', alignItems:'center', gap:8, padding:'6px 0', borderBottom:'1px solid rgba(255,255,255,0.04)', fontSize:12 }}>
                        <span className="bc" style={{ fontSize:8, letterSpacing:1, padding:'2px 6px', fontWeight:700, flexShrink:0,
                          background: t.type==='free'?'rgba(61,214,140,0.12)':'rgba(232,184,75,0.12)',
                          border:`1px solid ${t.type==='free'?C.green:C.gold}`,
                          color: t.type==='free'?C.green:C.gold }}>
                          {t.type==='free'?'LIBRE':'PRÊT'}
                        </span>
                        <span style={{ flex:1 }}>{t.name}</span>
                        <span className="bc" style={{ fontSize:11, color:C.muted }}>{t.from}</span>
                      </div>
                    ))}
                    {s.transfers.length > 3 && (
                      <div className="bc" style={{ fontSize:10, color:C.muted, marginTop:6, letterSpacing:2 }}>+{s.transfers.length - 3} autres arrivées</div>
                    )}
                  </div>
                )}

                {/* Départs preview */}
                {s.departures?.length > 0 && (
                  <div>
                    <div className="bc" style={{ fontSize:9, letterSpacing:3, color:C.red, marginBottom:8, fontWeight:700 }}>↓ DÉPARTS</div>
                    {s.departures.slice(0,3).map((t,i) => (
                      <div key={i} style={{ display:'flex', alignItems:'center', gap:8, padding:'6px 0', borderBottom:'1px solid rgba(255,255,255,0.04)', fontSize:12 }}>
                        <span className="bc" style={{ fontSize:8, letterSpacing:1, padding:'2px 6px', fontWeight:700, flexShrink:0,
                          background: t.type==='loan'?'rgba(232,184,75,0.12)':t.type==='sell'?'rgba(232,80,80,0.12)':'rgba(106,130,176,0.12)',
                          border:`1px solid ${t.type==='loan'?C.gold:t.type==='sell'?C.red:C.muted}`,
                          color: t.type==='loan'?C.gold:t.type==='sell'?C.red:C.muted }}>
                          {t.type==='loan'?'PRÊT':t.type==='sell'?'TRANSFERT':'FIN CTR'}
                        </span>
                        <span style={{ flex:1 }}>{t.name}</span>
                        <span className="bc" style={{ fontSize:11, color:C.muted }}>{t.to}</span>
                      </div>
                    ))}
                    {s.departures.length > 3 && (
                      <div className="bc" style={{ fontSize:10, color:C.muted, marginTop:6, letterSpacing:2 }}>+{s.departures.length - 3} autres départs</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Cup */}
        {s.cup?.rounds?.length > 0 && (
          <Sec title={s.cup.name || 'Coupe de France'}>
            <div style={{ display:'flex', flexWrap:'wrap' }}>
              {s.cup.rounds.map((r, i) => (
                <div key={i} style={{ flex:'1 1 130px', textAlign:'center', padding:'18px 8px', borderTop:`2px solid ${r.result === 'W' ? C.green : C.red}`, position:'relative' }}>
                  {i < s.cup.rounds.length - 1 && (
                    <div style={{ position:'absolute', right:-10, top:'50%', transform:'translateY(-50%)', color:C.muted, fontSize:14 }}>›</div>
                  )}
                  <div className="bc" style={{ fontSize:9, letterSpacing:3, color:C.muted, marginBottom:8, textTransform:'uppercase' }}>{r.round}</div>
                  <div className="bb" style={{ fontSize:26, color:r.result === 'W' ? C.green : C.red }}>{r.score}</div>
                  <div className="bc" style={{ fontSize:11, color:C.muted, marginTop:4 }}>{r.opponent}</div>
                </div>
              ))}
            </div>
          </Sec>
        )}

        {/* Playoffs */}
        {s.playoffs && (
          <div style={{ background:'linear-gradient(135deg,rgba(12,34,89,0.9),rgba(21,45,114,0.4))', border:'1px solid rgba(232,184,75,0.28)', padding:'26px 36px', marginBottom:64, display:'flex', alignItems:'center', justifyContent:'space-between', gap:20, flexWrap:'wrap' }}>
            <div>
              <div className="bb" style={{ fontSize:24, color:C.gold, letterSpacing:3 }}>{s.playoffs.competition}</div>
              <div className="bc" style={{ fontSize:12, color:C.muted, marginTop:4 }}>vs {s.playoffs.opponent} · {s.playoffs.outcome}</div>
            </div>
            <div style={{ display:'flex', gap:28, alignItems:'center' }}>
              {[s.playoffs.leg1, s.playoffs.leg2].map((leg, i) => (
                <div key={i} style={{ textAlign:'center' }}>
                  <div className="bb" style={{ fontSize:42, color:leg.result === 'W' ? C.green : C.red, lineHeight:1 }}>{leg.score}</div>
                  <div className="bc" style={{ fontSize:10, letterSpacing:2, color:C.muted, marginTop:4, textTransform:'uppercase' }}>{leg.venue}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Standings */}
        {s.standings?.length > 0 && (
          <Sec title="Classement final">
            <StandingsTable rows={s.standings} />
          </Sec>
        )}

        {/* Promo / Releg */}
        {((s.promoted?.length > 0) || (s.relegated?.length > 0)) && (
          <div style={{ display:'flex', gap:48, flexWrap:'wrap', marginTop:8 }}>
            {s.promoted?.length > 0 && (
              <div>
                <div className="bc" style={{ fontSize:9, letterSpacing:4, color:C.green, marginBottom:10, textTransform:'uppercase', fontWeight:700 }}>↑ Promus</div>
                {s.promoted.map(t => <div key={t} className="bc" style={{ fontSize:13, color:C.white, marginBottom:5 }}>{t}</div>)}
              </div>
            )}
            {s.relegated?.length > 0 && (
              <div>
                <div className="bc" style={{ fontSize:9, letterSpacing:4, color:C.red, marginBottom:10, textTransform:'uppercase', fontWeight:700 }}>↓ Relégués</div>
                {s.relegated.map(t => <div key={t} className="bc" style={{ fontSize:13, color:C.white, marginBottom:5 }}>{t}</div>)}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════
   PERFORMER LIST
═══════════════════════════════════════════════ */
function PerfList({ title, items, unit }) {
  return (
    <div>
      <div className="bc" style={{ fontSize:10, letterSpacing:6, color:C.gold, marginBottom:18, paddingBottom:10, borderBottom:'1px solid rgba(232,184,75,0.18)', fontWeight:700, textTransform:'uppercase' }}>
        {title}
      </div>
      {(items || []).map((item, i) => (
        <div key={i} style={{ display:'flex', alignItems:'center', gap:12, padding:'12px 0', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
          <div className="bb" style={{ fontSize:24, color:C.gold, width:22, flexShrink:0 }}>{i + 1}</div>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:13, fontWeight:500 }}>{item.name}</div>
            <div className="bc" style={{ fontSize:11, color:C.muted, marginTop:2 }}>{item.detail}</div>
          </div>
          <div style={{ textAlign:'right' }}>
            <div className="bb" style={{ fontSize:32, color:C.goldL, lineHeight:1 }}>{item.value}</div>
            <div className="bc" style={{ fontSize:9, color:C.muted, letterSpacing:2, textTransform:'uppercase' }}>{unit}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════════
   TRANSFER LIST
═══════════════════════════════════════════════ */
function TransfList({ transfers }) {
  if (!transfers?.length) return null
  return (
    <div>
      <div className="bc" style={{ fontSize:10, letterSpacing:6, color:C.gold, marginBottom:18, paddingBottom:10, borderBottom:'1px solid rgba(232,184,75,0.18)', fontWeight:700, textTransform:'uppercase' }}>
        Mercato · Arrivées
      </div>
      {transfers.map((t, i) => (
        <div key={i} style={{ display:'flex', alignItems:'center', gap:10, padding:'11px 0', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
          <div className="bc" style={{ fontSize:9, letterSpacing:2, padding:'3px 8px', flexShrink:0, fontWeight:700,
            background: t.type === 'free' ? 'rgba(61,214,140,0.12)' : 'rgba(232,184,75,0.12)',
            border:     `1px solid ${t.type === 'free' ? C.green : C.gold}`,
            color:      t.type === 'free' ? C.green : C.gold }}>
            {t.type === 'free' ? 'LIBRE' : 'PRÊT'}
          </div>
          <div style={{ flex:1, fontSize:13, fontWeight:500 }}>{t.name}</div>
          <div style={{ textAlign:'right' }}>
            <div className="bc" style={{ fontSize:12, color:C.muted }}>{t.from}</div>
            <div className="bc" style={{ fontSize:10, color:C.muted, marginTop:1 }}>{t.date}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════════
   DEPARTURE LIST
═══════════════════════════════════════════════ */
function DepartList({ departures }) {
  if (!departures?.length) return null
  return (
    <div>
      <div className="bc" style={{ fontSize:10, letterSpacing:6, color:C.red, marginBottom:18, paddingBottom:10, borderBottom:'1px solid rgba(232,80,80,0.2)', fontWeight:700, textTransform:'uppercase' }}>
        Mercato · Départs
      </div>
      {departures.map((t, i) => (
        <div key={i} style={{ display:'flex', alignItems:'center', gap:10, padding:'11px 0', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
          <div className="bc" style={{ fontSize:9, letterSpacing:2, padding:'3px 8px', flexShrink:0, fontWeight:700,
            background: t.type === 'loan' ? 'rgba(232,184,75,0.12)' : t.type === 'sell' ? 'rgba(232,80,80,0.12)' : 'rgba(106,130,176,0.12)',
            border:     `1px solid ${t.type === 'loan' ? C.gold : t.type === 'sell' ? C.red : C.muted}`,
            color:      t.type === 'loan' ? C.gold : t.type === 'sell' ? C.red : C.muted }}>
            {t.type === 'loan' ? 'PRÊT' : t.type === 'sell' ? 'TRANSFERT' : 'FIN CONTRAT'}
          </div>
          <div style={{ flex:1, fontSize:13, fontWeight:500 }}>{t.name}</div>
          <div style={{ textAlign:'right' }}>
            <div className="bc" style={{ fontSize:12, color:C.muted }}>{t.to}</div>
            <div className="bc" style={{ fontSize:10, color:C.muted, marginTop:1 }}>{t.date}</div>
          </div>
        </div>
      ))}
    </div>
  )
}


/* ═══════════════════════════════════════════════
   MERCATO PAGE
═══════════════════════════════════════════════ */
function MercatoPage({ season: s, onBack }) {
  const hasArr  = s.transfers?.length > 0
  const hasDep  = s.departures?.length > 0

  return (
    <div style={{ minHeight:'100vh', background:C.navy }}>

      {/* NAV */}
      <div style={{ position:'sticky', top:0, zIndex:99, background:'rgba(7,17,31,0.96)', backdropFilter:'blur(10px)', padding:'14px 48px', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
        <button onClick={onBack} className="bc" style={{ background:'transparent', border:'none', color:C.muted, cursor:'pointer', fontSize:11, letterSpacing:4, fontFamily:'inherit' }}>
          ← BILAN {s.year}
        </button>
        <div className="bb" style={{ fontSize:15, letterSpacing:5, color:C.gold }}>MERCATO · {s.year}</div>
        <div style={{ width:120 }} />
      </div>

      {/* HERO */}
      <div style={{ background:`linear-gradient(160deg,${C.blue} 0%,${C.navy} 65%)`, padding:'48px 56px', borderBottom:'1px solid rgba(232,184,75,0.08)' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>
          <div className="bc au" style={{ fontSize:10, letterSpacing:6, color:C.gold, marginBottom:10, fontWeight:600 }}>RÉSUMÉ DES TRANSFERTS</div>
          <div className="bb au au1" style={{ fontSize:'clamp(36px,5vw,64px)', lineHeight:0.9, letterSpacing:2 }}>
            La Berrichonne<br /><span style={{ color:C.gold }}>de Châteauroux</span>
          </div>
          <div className="bc au au2" style={{ display:'inline-block', background:C.gold, color:C.navy, fontSize:11, letterSpacing:5, padding:'4px 14px', marginTop:16, fontWeight:700 }}>
            {s.league} · {s.year}
          </div>

          {/* Summary pills */}
          <div className="au au3" style={{ display:'flex', gap:12, marginTop:28, flexWrap:'wrap' }}>
            {hasArr && (
              <div style={{ background:'rgba(61,214,140,0.1)', border:'1px solid rgba(61,214,140,0.3)', padding:'8px 18px' }}>
                <span className="bb" style={{ fontSize:28, color:C.green }}>{s.transfers.length}</span>
                <span className="bc" style={{ fontSize:10, letterSpacing:3, color:C.green, marginLeft:8 }}>ARRIVÉES</span>
              </div>
            )}
            {hasDep && (
              <div style={{ background:'rgba(232,80,80,0.1)', border:'1px solid rgba(232,80,80,0.3)', padding:'8px 18px' }}>
                <span className="bb" style={{ fontSize:28, color:C.red }}>{s.departures.length}</span>
                <span className="bc" style={{ fontSize:10, letterSpacing:3, color:C.red, marginLeft:8 }}>DÉPARTS</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth:900, margin:'0 auto', padding:'56px 56px 100px' }}>

        {/* ARRIVÉES */}
        {hasArr && (
          <div style={{ marginBottom:56 }}>
            <div className="bc" style={{ fontSize:10, letterSpacing:6, color:C.green, marginBottom:22, paddingBottom:11, borderBottom:'1px solid rgba(61,214,140,0.2)', fontWeight:700, textTransform:'uppercase' }}>
              ↑ Arrivées ({s.transfers.length})
            </div>
            {s.transfers.map((t, i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:14, padding:'15px 0', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
                <div className="bc" style={{ fontSize:9, letterSpacing:2, padding:'4px 10px', flexShrink:0, fontWeight:700,
                  background: t.type==='free'?'rgba(61,214,140,0.12)':'rgba(232,184,75,0.12)',
                  border:`1px solid ${t.type==='free'?C.green:C.gold}`,
                  color: t.type==='free'?C.green:C.gold }}>
                  {t.type==='free'?'LIBRE':'PRÊT'}
                </div>
                <div style={{ flex:1, fontSize:14, fontWeight:500 }}>{t.name}</div>
                <div style={{ textAlign:'right' }}>
                  <div className="bc" style={{ fontSize:13, color:C.muted }}>{t.from}</div>
                  <div className="bc" style={{ fontSize:11, color:C.muted, marginTop:2 }}>{t.date}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* DÉPARTS */}
        {hasDep && (
          <div>
            <div className="bc" style={{ fontSize:10, letterSpacing:6, color:C.red, marginBottom:22, paddingBottom:11, borderBottom:'1px solid rgba(232,80,80,0.2)', fontWeight:700, textTransform:'uppercase' }}>
              ↓ Départs ({s.departures.length})
            </div>
            {s.departures.map((t, i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:14, padding:'15px 0', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
                <div className="bc" style={{ fontSize:9, letterSpacing:2, padding:'4px 10px', flexShrink:0, fontWeight:700,
                  background: t.type==='loan'?'rgba(232,184,75,0.12)':t.type==='sell'?'rgba(232,80,80,0.12)':'rgba(106,130,176,0.12)',
                  border:`1px solid ${t.type==='loan'?C.gold:t.type==='sell'?C.red:C.muted}`,
                  color: t.type==='loan'?C.gold:t.type==='sell'?C.red:C.muted }}>
                  {t.type==='loan'?'PRÊT':t.type==='sell'?'TRANSFERT':'FIN CONTRAT'}
                </div>
                <div style={{ flex:1, fontSize:14, fontWeight:500 }}>{t.name}</div>
                <div style={{ textAlign:'right' }}>
                  <div className="bc" style={{ fontSize:13, color:C.muted }}>{t.to}</div>
                  <div className="bc" style={{ fontSize:11, color:C.muted, marginTop:2 }}>{t.date}</div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}


/* ═══════════════════════════════════════════════
   STANDINGS TABLE
═══════════════════════════════════════════════ */
function StandingsTable({ rows }) {
  return (
    <div>
      <div style={{ display:'grid', gridTemplateColumns:'34px 1fr repeat(8,42px)', gap:5, padding:'7px 14px', borderBottom:'1px solid rgba(255,255,255,0.08)' }}>
        {['','Équipe','J','G','N','D','BP','BC','DB','Pts'].map((c, i) => (
          <div key={i} className="bc" style={{ fontSize:9, letterSpacing:2, color:C.muted, textAlign:i > 1 ? 'center' : 'left', fontWeight:700 }}>{c}</div>
        ))}
      </div>
      {rows.map(row => {
        const db = row.db > 0 ? '+' + row.db : row.db
        return (
          <div key={row.pos} style={{ display:'grid', gridTemplateColumns:'34px 1fr repeat(8,42px)', gap:5, padding:'9px 14px', fontSize:12, alignItems:'center',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
            background:   row.highlight ? 'rgba(232,184,75,0.07)' : row.zone === 'promo' ? 'rgba(61,214,140,0.04)' : row.zone === 'releg' ? 'rgba(232,80,80,0.04)' : '',
            borderLeft:   row.highlight ? `3px solid ${C.gold}` : '3px solid transparent' }}>
            <div className="bb" style={{ fontSize:15, color:row.pos <= 2 ? C.gold : C.muted }}>{row.pos}</div>
            <div style={{ fontWeight:row.highlight ? 600 : 400, fontSize:13 }}>{row.team}</div>
            {[row.j, row.g, row.n, row.l, row.bp, row.bc, db].map((v, i) => (
              <div key={i} style={{ textAlign:'center', color:C.muted, fontSize:11 }}>{v}</div>
            ))}
            <div className="bb" style={{ textAlign:'center', fontSize:19, color:C.gold }}>{row.pts}</div>
          </div>
        )
      })}
    </div>
  )
}
