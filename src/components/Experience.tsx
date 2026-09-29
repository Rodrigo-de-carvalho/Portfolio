import { useLang } from '../i18n'
import { experiences } from '../data/experience'
import './Experience.css'

function Experience() {
  const { t } = useLang()

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">{t({ pt: 'Experiência', en: 'Experience' })}</h2>
        <div className="experience-list">
          {experiences.map((exp) => (
            <article className="experience-card" key={exp.company}>
              <div className="experience-header">
                <div>
                  <h3>{t(exp.role)}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-period">{t(exp.period)}</span>
              </div>
              <ul className="experience-highlights">
                {exp.highlights.map((item) => (
                  <li key={item.pt}>{t(item)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
