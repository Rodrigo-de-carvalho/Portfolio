import type { Localized, Text } from '../i18n'

export type SkillGroup = {
  category: Text
  items: Localized[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: { pt: 'Front-end', en: 'Front-end' },
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap', 'React'],
  },
  {
    category: { pt: 'Back-end', en: 'Back-end' },
    items: [
      {
        pt: 'Python (Flask, automação e geração de PDF)',
        en: 'Python (Flask, automation and PDF generation)',
      },
      'Java (Spring Boot)',
      'Kotlin',
      'C',
    ],
  },
  {
    category: { pt: 'Banco de dados', en: 'Databases' },
    items: ['PostgreSQL (Supabase)', 'MySQL', 'SQLite', 'Firebase'],
  },
  {
    category: { pt: 'Ferramentas e deploy', en: 'Tools and deployment' },
    items: ['Vercel', 'Railway', 'Electron', 'Git/GitHub', { pt: 'AWS (noções)', en: 'AWS (basics)' }],
  },
]
