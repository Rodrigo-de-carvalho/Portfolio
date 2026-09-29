import { useState } from 'react'
import { useLang, type Lang } from '../i18n'
import './Header.css'

const links = [
  { href: '#about', label: { pt: 'Sobre', en: 'About' } },
  { href: '#skills', label: { pt: 'Habilidades', en: 'Skills' } },
  { href: '#projects', label: { pt: 'Projetos', en: 'Projects' } },
  { href: '#experience', label: { pt: 'Experiência', en: 'Experience' } },
  { href: '#education', label: { pt: 'Formação', en: 'Education' } },
  { href: '#contact', label: { pt: 'Contato', en: 'Contact' } },
]

const languages: Lang[] = ['pt', 'en']

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="header-logo">
          Rodrigo Costa
        </a>

        <nav className={`header-nav ${menuOpen ? 'is-open' : ''}`}>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {t(link.label)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label={t({ pt: 'Idioma', en: 'Language' })}>
            {languages.map((option) => (
              <button
                key={option}
                type="button"
                className={option === lang ? 'is-active' : ''}
                aria-pressed={option === lang}
                onClick={() => setLang(option)}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="header-toggle"
            aria-label={t({ pt: 'Abrir menu', en: 'Open menu' })}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
