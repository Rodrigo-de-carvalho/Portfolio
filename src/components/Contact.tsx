import { useLang } from '../i18n'
import './Contact.css'

function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="section">
      <div className="container contact-inner">
        <h2 className="section-title">{t({ pt: 'Contato', en: 'Contact' })}</h2>
        <p className="contact-text">
          {t({
            pt: 'Estou em busca de estágio ou vaga júnior na área de tecnologia, e também aberto a projetos freelance. Fique à vontade para entrar em contato por qualquer um dos canais abaixo.',
            en: "I'm looking for an internship or junior role in tech, and I'm also open to freelance projects. Feel free to reach out through any of the channels below.",
          })}
        </p>

        <div className="contact-actions">
          <a
            className="btn btn-primary"
            href="https://wa.me/5571982648511"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a
            className="btn btn-outline"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rorodrigo012007@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            {t({ pt: 'Enviar email', en: 'Send email' })}
          </a>
          <a className="btn btn-outline" href={t({ pt: '/curriculo-rodrigo-costa.pdf', en: '/resume-rodrigo-costa-en.pdf' })} download>
            {t({ pt: 'Baixar currículo', en: 'Download résumé' })}
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
