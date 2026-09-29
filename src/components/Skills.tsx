import { skillGroups } from '../data/skills'
import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skills-group" key={group.category}>
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
