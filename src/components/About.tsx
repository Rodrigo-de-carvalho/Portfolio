import { useLang } from '../i18n'
import './About.css'

const paragraphs = [
  {
    pt: 'Tenho 19 anos e estudo Análise e Desenvolvimento de Sistemas na UniJorge, em Salvador. Aprendo principalmente construindo: desenvolvo projetos reais, coloco no ar e vou aprimorando. Crio aplicações completas, do banco de dados à interface, com React, Supabase, Java e Python, e também tenho experiência com versões mobile e desktop.',
    en: "I'm 19 and study Systems Analysis and Development at UniJorge, in Salvador, Brazil. I learn mostly by building: I develop real projects, ship them and keep improving them. I build complete applications, from the database to the interface, with React, Supabase, Java and Python, and I also have experience with mobile and desktop versions.",
  },
  {
    pt: 'Trabalho na empresa da minha família, a EM Instalações e Manutenções Elétricas, onde cuido de orçamentos, contratos e relacionamento com clientes. Essa vivência me deu uma visão prática de como o software resolve problemas reais de negócio.',
    en: "I work at my family's company, EM Instalações e Manutenções Elétricas, where I handle quotes, contracts and client relations. This experience gave me a practical view of how software solves real business problems.",
  },
  {
    pt: 'Busco minha primeira oportunidade formal em tecnologia, seja estágio ou vaga júnior, e também estou aberto a projetos freelance.',
    en: "I'm looking for my first formal opportunity in tech, either an internship or a junior role, and I'm also open to freelance projects.",
  },
]

function About() {
  const { t } = useLang()

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <h2 className="section-title">{t({ pt: 'Sobre mim', en: 'About me' })}</h2>
        <div className="about-content">
          {paragraphs.map((text) => (
            <p key={text.pt}>{t(text)}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
