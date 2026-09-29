import { projects, type Project } from '../data/projects'
import { useLang } from '../i18n'
import './Projects.css'

// Gera um print do site automaticamente a partir da URL
function screenshotUrl(url: string) {
  return `https://s0.wp.com/mshots/v1/${url}?w=800&h=500`
}

function ProjectImage({ project }: { project: Project }) {
  const src = project.image ?? (project.demoUrl && screenshotUrl(project.demoUrl))
  if (!src) return null

  const img = <img src={src} alt="" loading="lazy" width={800} height={500} />

  if (!project.demoUrl) return <div className="project-image">{img}</div>

  return (
    <a
      className="project-image"
      href={project.demoUrl}
      target="_blank"
      rel="noreferrer"
      tabIndex={-1}
      aria-hidden="true"
    >
      {img}
    </a>
  )
}

function Projects() {
  const { t } = useLang()

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <h2 className="section-title">{t({ pt: 'Projetos', en: 'Projects' })}</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card${project.featured ? ' project-featured' : ''}`}
              key={project.title.pt}
            >
              <ProjectImage project={project} />
              <div className="project-body">
                {project.featured && (
                  <p className="project-featured-label">
                    {t({ pt: 'Projeto em destaque', en: 'Featured project' })}
                  </p>
                )}
                <div className="project-title-row">
                  <h3>{t(project.title)}</h3>
                  {project.inDevelopment && (
                    <span className="project-badge">
                      {t({ pt: 'Em desenvolvimento', en: 'In development' })}
                    </span>
                  )}
                </div>
                <p className="project-description">{t(project.description)}</p>
                <ul className="project-tech">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      {t({ pt: 'Visitar site', en: 'Visit site' })}
                    </a>
                  )}
                  {project.isPrivate && (
                    <span className="project-private">
                      {t({ pt: 'Projeto privado', en: 'Private project' })}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="projects-more">
          {t({ pt: 'Mais projetos no', en: 'More projects on' })}{' '}
          <a href="https://github.com/Rodrigo-de-carvalho" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </section>
  )
}

export default Projects
