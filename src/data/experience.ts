import type { Text } from '../i18n'

export type Experience = {
  company: string
  role: Text
  period: Text
  highlights: Text[]
}

export const experiences: Experience[] = [
  {
    company: 'EM Instalações e Manutenções Elétricas',
    role: { pt: 'Auxiliar Administrativo e Técnico', en: 'Administrative and Technical Assistant' },
    period: { pt: '2024 – atual', en: '2024 – present' },
    highlights: [
      {
        pt: 'Elaboração de orçamentos e documentos técnicos',
        en: 'Preparing quotes and technical documents',
      },
      {
        pt: 'Elaboração e acompanhamento de contratos',
        en: 'Drafting and tracking contracts',
      },
      {
        pt: 'Atendimento e relacionamento com clientes',
        en: 'Customer service and client relations',
      },
      {
        pt: 'Desenvolvimento de ferramentas internas para otimizar processos',
        en: 'Building internal tools to streamline processes',
      },
    ],
  },
]
