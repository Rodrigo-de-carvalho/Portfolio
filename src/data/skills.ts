export type SkillGroup = {
  category: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Front-end',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap', 'React'],
  },
  {
    category: 'Back-end',
    items: ['Python (Flask, automação e geração de PDF)', 'Java (Spring Boot)', 'Kotlin', 'C'],
  },
  {
    category: 'Banco de dados',
    items: ['PostgreSQL (Supabase)', 'MySQL', 'SQLite', 'Firebase'],
  },
  {
    category: 'Ferramentas e deploy',
    items: ['Vercel', 'Railway', 'Electron', 'Git/GitHub', 'AWS (noções)', 'Claude Code'],
  },
]
