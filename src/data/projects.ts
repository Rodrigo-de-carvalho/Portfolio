export type Project = {
  title: string
  description: string
  tech: string[]
  githubUrl?: string
  demoUrl?: string
  isPrivate?: boolean
  inDevelopment?: boolean
}

export const projects: Project[] = [
  {
    title: 'Sistema – RPG de treino gamificado',
    description:
      'PWA de treino inspirado no "Sistema" de Solo Leveling: ganhe XP e ouro fazendo exercícios de verdade. Usa MediaPipe (IA de visão computacional, rodando 100% no aparelho) para verificar se o movimento foi feito corretamente, com corrida comprovada via GPS (Strava), notificações push e pagamento do Premium via Mercado Pago. Back-end serverless completo no Supabase, com regras de segurança e anti-trapaça no próprio banco de dados.',
    tech: ['React', 'Vite', 'Supabase', 'MediaPipe', 'Deno (Edge Functions)'],
    demoUrl: 'https://sistema-plum-xi.vercel.app',
    inDevelopment: true,
  },
  {
    title: 'Cifra – Gerenciador financeiro pessoal',
    description:
      'Aplicação para controle de finanças pessoais, com importação de CSV e adequação à LGPD. Possui versão Android via wrapper Kotlin/WebView.',
    tech: ['React', 'Supabase', 'Vercel', 'Kotlin'],
    demoUrl: 'https://gerenciador-psi.vercel.app',
    inDevelopment: true,
  },
  {
    title: 'Forja – Gerenciador de tarefas gamificado',
    description:
      'Aplicação de produtividade com elementos de gamificação para incentivar a constância do usuário.',
    tech: ['React'],
  },
  {
    title: 'Ignis Cristão – PWA de estudo bíblico',
    description:
      'Aplicativo web progressivo e gamificado, desenvolvido para a Igreja Adventista do Arenoso.',
    tech: ['React', 'PWA'],
  },
  {
    title: 'Sistema de gestão para clínica odontológica',
    description: 'Projeto acadêmico em equipe para gestão de uma clínica odontológica.',
    tech: ['Java Spring Boot', 'MySQL', 'React'],
  },
  {
    title: 'PDV para loja de roupas de bebê',
    description: 'Sistema de ponto de venda desktop, em uso interno na loja.',
    tech: ['Electron', 'SQLite'],
  },
  {
    title: 'Gerenciador de Tarefas',
    description: 'Aplicação web de gerenciamento de tarefas, com versão Android (APK).',
    tech: ['Flask', 'MySQL'],
    demoUrl: 'https://teste-zeta-eight-56.vercel.app',
  },
  {
    title: 'Gerador de orçamentos em PDF',
    description:
      'Ferramenta interna criada para agilizar a elaboração de orçamentos da EM Instalações.',
    tech: ['Python'],
    demoUrl: 'https://or-amento-ashy.vercel.app',
  },
  {
    title: 'Site institucional – EM Instalações e Manutenções Elétricas',
    description:
      'Site institucional criado para a empresa da família, com apresentação dos serviços e contato.',
    tech: ['React'],
    demoUrl: 'https://em-instala-es-e-manuten-es-eletrica.vercel.app',
  },
  {
    title: 'Sistema de comandas para barraca de praia',
    description:
      'Protótipo inicial de um sistema de controle de mesas e pedidos feitos pelo próprio cliente via site.',
    tech: ['Firebase'],
  },
]
