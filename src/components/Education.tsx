import { useLang } from '../i18n'
import { education } from '../data/education'
import './Education.css'

function Education() {
  const { t } = useLang()

  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <h2 className="section-title">{t({ pt: 'Formação', en: 'Education' })}</h2>
        <div className="education-card">
          <div className="education-header">
            <div>
              <h3>{t(education.course)}</h3>
              <p className="education-institution">
                {education.institution}, {education.location}
              </p>
            </div>
            <span className="education-period">{t(education.period)}</span>
          </div>

          <div className="education-certs">
            <p className="education-certs-title">
              {t({ pt: 'Certificações internas (UniJorge)', en: 'Internal certifications (UniJorge)' })}
            </p>
            <ul>
              {education.certifications.map((cert) => (
                <li key={cert.pt}>{t(cert)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
