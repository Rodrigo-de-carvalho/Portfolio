import { experiences } from '../data/experience'
import './Experience.css'

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experiência</h2>
        <div className="experience-list">
          {experiences.map((exp) => (
            <article className="experience-card" key={exp.company}>
              <div className="experience-header">
                <div>
                  <h3>{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              <ul className="experience-highlights">
                {exp.highlights.map((item) => (
                  <li key={item}>{item}</li>
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
