import { useLang } from '../i18n'
import { skillGroups } from '../data/skills'
import './Skills.css'

function Skills() {
  const { t } = useLang()

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">{t({ pt: 'Habilidades', en: 'Skills' })}</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skills-group" key={group.category.pt}>
              <h3>{t(group.category)}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={t(item)}>{t(item)}</li>
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
