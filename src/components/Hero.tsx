import { useLang } from '../i18n'
import './Hero.css'

function Hero() {
  const { t } = useLang()

  return (
    <section id="top" className="hero section">
      <div className="container hero-inner">
        <img
          className="hero-photo"
          src="/foto-rodrigo.jpg"
          alt={t({ pt: 'Foto de Rodrigo de Carvalho Costa', en: 'Photo of Rodrigo de Carvalho Costa' })}
          width={160}
          height={160}
        />
        <p className="hero-greeting">{t({ pt: 'Olá, eu sou', en: "Hi, I'm" })}</p>
        <h1 className="hero-name">Rodrigo de Carvalho Costa</h1>
        <h2 className="hero-role">
          {t({
            pt: 'Desenvolvedor Full-Stack Júnior | Estudante de ADS',
            en: 'Junior Full-Stack Developer | Systems Analysis Student',
          })}
        </h2>
        <p className="hero-location">Salvador, Bahia</p>

        <span className="hero-badge">
          {t({ pt: 'Em busca de estágio ou vaga júnior', en: 'Looking for an internship or junior role' })}
        </span>

        <p className="hero-summary">
          {t({
            pt: 'Tenho 19 anos e estudo Análise e Desenvolvimento de Sistemas na UniJorge. Aprendo principalmente construindo: desenvolvo projetos reais, coloco no ar e vou aprimorando, do banco de dados à interface.',
            en: "I'm 19 and study Systems Analysis and Development at UniJorge. I learn mostly by building: I develop real projects, ship them and keep improving them, from the database to the interface.",
          })}
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            {t({ pt: 'Ver projetos', en: 'View projects' })}
          </a>
          <a className="btn btn-outline" href={t({ pt: '/curriculo-rodrigo-costa.pdf', en: '/resume-rodrigo-costa-en.pdf' })} download>
            {t({ pt: 'Baixar currículo', en: 'Download résumé' })}
          </a>
        </div>

        <ul className="hero-social">
          <li>
            <a href="https://github.com/Rodrigo-de-carvalho" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/rodrigo-de-carvalho-64b858366"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://wa.me/5571982648511" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </li>
          <li>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rorodrigo012007@gmail.com" target="_blank" rel="noreferrer">
              Email
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Hero
