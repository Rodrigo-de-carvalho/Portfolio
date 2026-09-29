import { projects } from '../data/projects'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-title-row">
                <h3>{project.title}</h3>
                {project.inDevelopment && (
                  <span className="project-badge">Em desenvolvimento</span>
                )}
              </div>
              <p className="project-description">{project.description}</p>
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
                    Ver demo
                  </a>
                )}
                {project.isPrivate && (
                  <span className="project-private">Projeto privado</span>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="projects-more">
          Mais projetos no{' '}
          <a href="https://github.com/Rodrigo-de-carvalho" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </section>
  )
}

export default Projects
