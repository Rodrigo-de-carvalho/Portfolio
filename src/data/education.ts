export type Education = {
  course: string
  institution: string
  location: string
  period: string
  certifications: string[]
}

export const education: Education = {
  course: 'Análise e Desenvolvimento de Sistemas',
  institution: 'UniJorge',
  location: 'Salvador, BA',
  period: 'Desde 2025',
  certifications: [
    'Desenvolvimento Web',
    'Lógica de Programação',
    'MySQL',
    'Linguagem C',
  ],
}
