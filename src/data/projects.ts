import type { Text } from '../i18n'

export type Project = {
  title: Text
  description: Text
  tech: string[]
  githubUrl?: string
  // Imagem própria em public/projects (ex.: '/projects/cifra.png').
  // Sem ela, usa um print automático do demoUrl.
  image?: string
  demoUrl?: string
  isPrivate?: boolean
  inDevelopment?: boolean
  // Aparece em destaque, ocupando a largura toda da grade
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: {
      pt: 'Sistema – RPG de treino gamificado',
      en: 'Sistema – Gamified workout RPG',
    },
    description: {
      pt: 'PWA de treino inspirado no "Sistema" de Solo Leveling: ganhe XP e ouro fazendo exercícios de verdade. Usa MediaPipe (IA de visão computacional, rodando 100% no aparelho) para verificar se o movimento foi feito corretamente, com corrida comprovada via GPS (Strava), notificações push e pagamento do Premium via Mercado Pago. Back-end serverless completo no Supabase, com regras de segurança e anti-trapaça no próprio banco de dados.',
      en: 'Workout PWA inspired by the "System" from Solo Leveling: earn XP and gold by doing real exercises. Uses MediaPipe (computer vision AI running 100% on-device) to check that each movement is done correctly, with GPS-verified runs (Strava), push notifications and Premium payments via Mercado Pago. Fully serverless back end on Supabase, with security and anti-cheat rules enforced in the database itself.',
    },
    tech: ['React', 'Vite', 'Supabase', 'MediaPipe', 'Deno (Edge Functions)'],
    demoUrl: 'https://sistema-plum-xi.vercel.app',
    inDevelopment: true,
    featured: true,
  },
  {
    title: {
      pt: 'Cifra – Gerenciador financeiro pessoal',
      en: 'Cifra – Personal finance manager',
    },
    description: {
      pt: 'Aplicação para controle de finanças pessoais, com importação de CSV e adequação à LGPD. Possui versão Android via wrapper Kotlin/WebView.',
      en: "Personal finance app with CSV import, built to comply with Brazil's data protection law (LGPD). Includes an Android version via a Kotlin/WebView wrapper.",
    },
    tech: ['React', 'Supabase', 'Vercel', 'Kotlin'],
    demoUrl: 'https://cifra-financas.vercel.app',
    inDevelopment: true,
  },
  {
    title: {
      pt: 'Site institucional – EM Instalações e Manutenções Elétricas',
      en: 'Company website – EM Instalações e Manutenções Elétricas',
    },
    description: {
      pt: 'Site institucional criado para a empresa da família, com apresentação dos serviços e contato.',
      en: "Website built for my family's company, presenting its services and contact information.",
    },
    tech: ['React'],
    demoUrl: 'https://em-instala-es-e-manuten-es-eletrica.vercel.app',
    githubUrl: 'https://github.com/Rodrigo-de-carvalho/EM-instala-es-e-manuten-es-eletricas',
  },
  {
    title: {
      pt: 'Gerador de orçamentos em PDF',
      en: 'PDF quote generator',
    },
    description: {
      pt: 'Ferramenta interna criada para agilizar a elaboração de orçamentos da EM Instalações.',
      en: 'Internal tool built to speed up the preparation of quotes at EM Instalações.',
    },
    tech: ['Python'],
    demoUrl: 'https://or-amento-ashy.vercel.app',
  },
  {
    title: {
      pt: 'Gerenciador de Tarefas',
      en: 'Task Manager',
    },
    description: {
      pt: 'Aplicação web de gerenciamento de tarefas, com versão Android (APK).',
      en: 'Task management web app, with an Android version (APK).',
    },
    tech: ['Flask', 'MySQL'],
    demoUrl: 'https://teste-zeta-eight-56.vercel.app',
    githubUrl: 'https://github.com/Rodrigo-de-carvalho/teste',
  },
  {
    title: {
      pt: 'Sistema de gestão para clínica odontológica',
      en: 'Dental clinic management system',
    },
    description: {
      pt: 'Projeto acadêmico em equipe para gestão de uma clínica odontológica.',
      en: 'Team academic project for managing a dental clinic.',
    },
    tech: ['Java Spring Boot', 'MySQL', 'React'],
    githubUrl: 'https://github.com/Rodrigo-de-carvalho/Trabalho-beckend-jailson',
    image: '/projects/clinica.png',
  },
  {
    title: {
      pt: 'PDV para loja de roupas de bebê',
      en: 'POS system for a baby clothing store',
    },
    description: {
      pt: 'Sistema de ponto de venda desktop, em uso interno na loja.',
      en: 'Desktop point-of-sale system, used daily in the store.',
    },
    tech: ['Electron', 'SQLite'],
    githubUrl: 'https://github.com/Rodrigo-de-carvalho/Loja',
    image: '/projects/pdv.png',
  },
]
