import type { Text } from '../i18n'

export type Education = {
  course: Text
  institution: string
  location: string
  period: Text
  certifications: Text[]
}

export const education: Education = {
  course: {
    pt: 'Análise e Desenvolvimento de Sistemas',
    en: 'Systems Analysis and Development (Associate degree)',
  },
  institution: 'UniJorge',
  location: 'Salvador, BA',
  period: { pt: 'Desde 2025', en: 'Since 2025' },
  certifications: [
    { pt: 'Desenvolvimento Web', en: 'Web Development' },
    { pt: 'Lógica de Programação', en: 'Programming Logic' },
    { pt: 'MySQL', en: 'MySQL' },
    { pt: 'Linguagem C', en: 'C Language' },
  ],
}
