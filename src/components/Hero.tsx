import './Hero.css'

function Hero() {
  return (
    <section id="top" className="hero section">
      <div className="container hero-inner">
        <p className="hero-greeting">Olá, eu sou</p>
        <h1 className="hero-name">Rodrigo de Carvalho Costa</h1>
        <h2 className="hero-role">Desenvolvedor Full-Stack | Estudante de ADS</h2>
        <p className="hero-location">Salvador, Bahia</p>

        <span className="hero-badge">Em busca de estágio ou vaga júnior</span>

        <p className="hero-summary">
          Tenho 19 anos e estudo Análise e Desenvolvimento de Sistemas na
          UniJorge. Aprendo principalmente construindo: desenvolvo projetos
          reais, coloco no ar e vou aprimorando, do banco de dados à
          interface.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            Ver projetos
          </a>
          <a className="btn btn-outline" href="#contact">
            Contato
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
            <a href="mailto:rorodrigo012007@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Hero
