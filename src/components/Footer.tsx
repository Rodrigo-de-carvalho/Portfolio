import { useLang } from '../i18n'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLang()

  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {year} Rodrigo de Carvalho Costa.{' '}
          {t({ pt: 'Todos os direitos reservados.', en: 'All rights reserved.' })}
        </p>
      </div>
    </footer>
  )
}

export default Footer
