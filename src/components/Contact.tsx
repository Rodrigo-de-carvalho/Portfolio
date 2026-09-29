import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact-inner">
        <h2 className="section-title">Contato</h2>
        <p className="contact-text">
          Estou em busca de estágio ou vaga júnior na área de tecnologia, e
          também aberto a projetos freelance. Fique à vontade para entrar em
          contato por qualquer um dos canais abaixo.
        </p>

        <div className="contact-actions">
          <a className="btn btn-primary" href="mailto:rorodrigo012007@gmail.com">
            Enviar email
          </a>
          <a
            className="btn btn-outline"
            href="https://linkedin.com/in/rodrigo-de-carvalho-64b858366"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn btn-outline"
            href="https://github.com/Rodrigo-de-carvalho"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
