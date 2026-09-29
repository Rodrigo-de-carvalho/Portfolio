import { education } from '../data/education'
import './Education.css'

function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Formação</h2>
        <div className="education-card">
          <div className="education-header">
            <div>
              <h3>{education.course}</h3>
              <p className="education-institution">
                {education.institution}, {education.location}
              </p>
            </div>
            <span className="education-period">{education.period}</span>
          </div>

          <div className="education-certs">
            <p className="education-certs-title">Certificações internas (UniJorge)</p>
            <ul>
              {education.certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
