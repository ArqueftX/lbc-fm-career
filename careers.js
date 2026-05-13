/**
 * ═══════════════════════════════════════════════════════════
 *  CARRIÈRES — CONFIGURATION
 *
 *  Pour ajouter une carrière :
 *    1. Ajoute un objet dans CAREERS
 *    2. Crée le fichier seasons-[id].js correspondant
 *       (copie seasons-chateauroux.js comme base)
 * ═══════════════════════════════════════════════════════════
 */
window.CAREERS = [
  {
    id:       'chateauroux',
    name:     'La Berrichonne de Châteauroux',
    short:    'Châteauroux',
    country:  'France',
    file:     'seasons-chateauroux.js',
    logo:     'logo-chateauroux.png',
    color:    '#c0392b',   // rouge LBC
    accent:   '#e8b84b',
  },
  {
    id:       'seville',
    name:     'Sevilla FC',
    short:    'Séville',
    country:  'Espagne',
    file:     'seasons-seville.js',
    logo:     'logo-seville.png',
    color:    '#d4552b',
    accent:   '#ffffff',
  },
  {
    id:       'wolfsburg',
    name:     'VfL Wolfsburg',
    short:    'Wolfsburg',
    country:  'Allemagne',
    tag:      'Réseau',
    file:     'seasons-wolfsburg.js',
    logo:     'logo-wolfsburg.png',
    color:    '#4db848',   // vert Wolfsburg
    accent:   '#ffffff',
  },
  // Template — copie ce bloc pour ajouter une carrière :
  // {


  {
    id:       'ajax',
    name:     'Ajax Amsterdam',
    short:    'Ajax',
    country:  'Pays-Bas',
    tag:      'Multi',
    file:     'seasons-ajax.js',
    logo:     'logo-ajax.png',
    color:    '#cc0000',
    accent:   '#ffffff',
  },

  //   id:      'mon-club',
  //   name:    'Nom complet du club',
  //   short:   'Nom court',
  //   country: 'Pays',
  //   file:    'seasons-mon-club.js',
  //   logo:    'logo-mon-club.png',
  //   color:   '#couleur-principale',
  //   accent:  '#couleur-accent',
  // },
]

window.CURRENT_CAREER_KEY = 'lbc-fm-current-career'

window.LOGO_PATH = (typeof window.FORCE_CAREER !== 'undefined') ? '../' : ''

window.getCurrentCareer = function() {
  if (window.FORCE_CAREER) return window.CAREERS.find(c => c.id === window.FORCE_CAREER) || window.CAREERS[0]
  const saved = localStorage.getItem(window.CURRENT_CAREER_KEY)
  return window.CAREERS.find(c => c.id === saved) || window.CAREERS[0]
}

window.setCurrentCareer = function(id) {
  localStorage.setItem(window.CURRENT_CAREER_KEY, id)
}
