// Sistema de internacionalização completo para Mãe360
export type Language = 'pt' | 'en' | 'es';

export const translations = {
  pt: {
    // Navbar
    nav: {
      home: 'Início',
      modules: 'Módulos',
      pricing: 'Planos',
      community: 'Comunidade',
      login: 'Entrar',
      signup: 'Começar Grátis'
    },
    // Hero Section
    hero: {
      headline: 'Do teste positivo ao futuro',
      subheadline: 'tudo o que seu filho precisa está aqui.',
      description: 'O único app que acompanha seu filho da gestação até a faculdade — e organiza absolutamente tudo para você.',
      cta: 'Começar Jornada',
      ctaSecondary: 'Ver Demonstração',
      trustBadge: 'Mais de 100.000 mães confiam no Mãe360'
    },
    // Pricing
    pricing: {
      title: 'Planos que Crescem com Você',
      subtitle: 'Escolha o plano ideal para sua família',
      monthly: 'Mensal',
      yearly: 'Anual',
      free: {
        name: 'Gratuito',
        price: 'R$ 0',
        period: '/mês',
        features: [
          'Acesso a conteúdos básicos',
          'Rastreador de sono do bebê',
          'Calendário de vacinas',
          'Comunidade online de mães',
          'Newsletter semanal'
        ],
        cta: 'Começar Grátis'
      },
      premium: {
        name: 'Premium',
        price: 'R$ 9,90',
        priceUSD: '$4.90',
        period: '/mês',
        popular: 'Mais Popular',
        features: [
          'Todos os 13 módulos completos',
          'Planejamento financeiro completo',
          'IA integrada ilimitada',
          'Upload de exames e documentos',
          'Loja com cashback exclusivo',
          'Sem anúncios'
        ],
        cta: 'Assinar Premium'
      },
      maternityProgram: {
        name: 'Programa Maternidade Financeira Premium',
        price: 'R$ 479,00',
        period: 'à vista OU 12x de R$ 49,00',
        features: [
          'Todos os 13 módulos completos',
          'Planejamento financeiro completo',
          'IA integrada ilimitada',
          'Upload de exames e documentos',
          '✨ Consultoria com especialistas',
          'Loja com cashback exclusivo',
          '✨ Suporte prioritário 24/7',
          'Sem anúncios',
          'Acesso vitalício ao programa'
        ],
        cta: 'Assinar Programa Premium'
      },
      enterprise: {
        name: 'Empresarial',
        price: 'Personalizado',
        features: [
          'Tudo do Premium',
          'Múltiplos perfis',
          'API de integração',
          'Relatórios personalizados',
          'Gerente de conta dedicado'
        ],
        cta: 'Falar com Vendas'
      }
    },
    // Módulos
    modules: {
      title: 'Acompanhe Cada Fase',
      subtitle: '13 módulos completos para toda a jornada',
      viewModule: 'Acessar Módulo',
      pregnancy: {
        title: 'Gravidez',
        description: 'Modelos 3D, agenda pré-natal, diário emocional e muito mais',
        features: ['Semana a semana', 'Contrações', 'Movimentos do bebê', 'Plano de parto']
      },
      baby: {
        title: 'Bebê (0-24 meses)',
        description: 'Rastreadores de sono, mamadas e marcos de desenvolvimento',
        features: ['Sono inteligente', 'Amamentação', 'Crescimento OMS', 'Introdução alimentar']
      },
      childhood: {
        title: 'Infância (2-12 anos)',
        description: 'Agenda escolar, desenvolvimento e planejamento financeiro',
        features: ['Rotinas', 'Escola', 'Comportamento', 'Gastos anuais']
      },
      teen: {
        title: 'Adolescência (13-18 anos)',
        description: 'Planejamento de carreira e controle emocional',
        features: ['ENEM', 'Performance escolar', 'Emoções', 'Carreira']
      },
      college: {
        title: 'Faculdade (18+)',
        description: 'Comparações de universidades e simulações de custos',
        features: ['Comparativo', 'Custos', 'Bolsas', 'Financiamento']
      },
      financial: {
        title: 'Planejamento Financeiro',
        description: 'Estrutura completa de custos em todas as fases',
        features: ['Previsão IA', 'Alertas', 'Gráficos', 'Metas']
      },
      documents: {
        title: 'Exames e Documentos',
        description: 'Organização digital com alertas inteligentes',
        features: ['Upload', 'Busca', 'Backup nuvem', 'Histórico']
      },
      vaccinesBaby: {
        title: 'Vacinas do Bebê',
        description: 'Carteirinha digital completa',
        features: ['Calendário oficial', 'Alertas', 'Lotes', 'Histórico']
      },
      vaccinesMom: {
        title: 'Vacinas da Mamãe',
        description: 'Pré-natal e pós-parto',
        features: ['dTpa', 'Influenza', 'Hepatite B', 'Covid']
      },
      community: {
        title: 'Comunidade',
        description: 'Grupos por fase, chat e suporte entre mães',
        features: ['Grupos', 'Chat', 'Publicações', 'Ranking']
      },
      premium: {
        title: 'Consultoria Premium',
        description: 'Acesso a profissionais e aulas exclusivas',
        features: ['Pediatras', 'Nutricionistas', 'Psicólogos', 'Lives']
      },
      shop: {
        title: 'Loja + Cashback',
        description: 'Produtos selecionados com sistema de recompensas',
        features: ['Fraldas', 'Roupas', 'Cashback', 'Clube VIP']
      },
      ai: {
        title: 'IA Integrada',
        description: 'Assistente inteligente para saúde, finanças e rotina',
        features: ['Dúvidas 24/7', 'Sintomas', 'Custos', 'Organização']
      }
    },
    // Pregnancy Module
    pregnancy: {
      title: 'Módulo Gravidez',
      subtitle: 'Acompanhe cada semana da sua gestação',
      week: 'Semana',
      babySize: 'Tamanho do Bebê',
      symptoms: 'Sintomas Comuns',
      checklist: 'Checklist',
      diary: 'Diário Emocional',
      appointments: 'Consultas',
      contractions: 'Contrações',
      kicks: 'Movimentos',
      addEntry: 'Adicionar Entrada',
      viewAll: 'Ver Todos',
      nextAppointment: 'Próxima Consulta',
      daysUntil: 'dias',
      birthPlan: 'Plano de Parto'
    },
    // Baby Module
    baby: {
      title: 'Módulo Bebê',
      subtitle: 'Acompanhe o desenvolvimento do seu bebê',
      sleep: 'Sono',
      feeding: 'Mamadas',
      diapers: 'Fraldas',
      growth: 'Crescimento',
      milestones: 'Marcos',
      solidFood: 'Introdução Alimentar',
      routine: 'Rotina Diária',
      health: 'Saúde',
      costs: 'Custos',
      addRecord: 'Adicionar Registro',
      lastSleep: 'Último Sono',
      lastFeeding: 'Última Mamada',
      todayDiapers: 'Fraldas Hoje'
    },
    // Financial Module
    financial: {
      title: 'Planejamento Financeiro',
      subtitle: 'Organize as finanças do seu filho dos 0 aos 18 anos',
      pregnancy: 'Gestação',
      firstYear: 'Primeiro Ano',
      childhood: 'Infância',
      teen: 'Adolescência',
      college: 'Faculdade',
      totalCost: 'Custo Total Estimado',
      monthlyAverage: 'Média Mensal',
      addExpense: 'Adicionar Gasto',
      categories: 'Categorias',
      forecast: 'Previsão IA',
      alerts: 'Alertas de Orçamento',
      goals: 'Metas Financeiras'
    },
    // Documents Module
    documents: {
      title: 'Exames e Documentos',
      subtitle: 'Organize todos os documentos médicos',
      upload: 'Fazer Upload',
      categories: 'Categorias',
      search: 'Buscar',
      recent: 'Recentes',
      important: 'Importantes',
      exams: 'Exames',
      prescriptions: 'Receitas',
      reports: 'Laudos',
      vaccines: 'Comprovantes de Vacina'
    },
    // Vaccines Module
    vaccines: {
      title: 'Carteirinha de Vacinação',
      subtitle: 'Mantenha as vacinas em dia',
      baby: 'Bebê',
      mom: 'Mamãe',
      upToDate: 'Em Dia',
      pending: 'Pendentes',
      next: 'Próxima',
      addVaccine: 'Adicionar Vacina',
      date: 'Data',
      lot: 'Lote',
      location: 'Local',
      professional: 'Profissional'
    },
    // Community Module
    community: {
      title: 'Comunidade',
      subtitle: 'Conecte-se com outras mães',
      groups: 'Grupos',
      chat: 'Chat',
      posts: 'Publicações',
      myGroups: 'Meus Grupos',
      discover: 'Descobrir',
      newPost: 'Nova Publicação',
      firstTimeMoms: 'Mães de Primeira Viagem',
      soloMoms: 'Mães Solo',
      trying: 'Tentantes'
    },
    // Consultancy Module
    consultancy: {
      title: 'Consultoria Premium',
      subtitle: 'Acesso a especialistas',
      pediatricians: 'Pediatras',
      nutritionists: 'Nutricionistas',
      sleepConsultants: 'Consultoras de Sono',
      psychologists: 'Psicólogos',
      schedule: 'Agendar Consulta',
      lives: 'Lives Semanais',
      classes: 'Aulas Gravadas',
      nextLive: 'Próxima Live'
    },
    // Shop Module
    shop: {
      title: 'Loja Mãe360',
      subtitle: 'Produtos selecionados com cashback',
      categories: 'Categorias',
      diapers: 'Fraldas',
      clothes: 'Roupas',
      accessories: 'Acessórios',
      hygiene: 'Higiene',
      toys: 'Brinquedos',
      supplements: 'Suplementos',
      cashback: 'Cashback',
      points: 'Pontos',
      vipClub: 'Clube VIP'
    },
    // AI Module
    ai: {
      title: 'Assistente IA',
      subtitle: 'Tire suas dúvidas 24/7',
      askQuestion: 'Faça sua pergunta',
      categories: 'Categorias',
      health: 'Saúde',
      symptoms: 'Sintomas',
      sleep: 'Sono',
      routine: 'Rotina',
      feeding: 'Alimentação',
      financial: 'Financeiro',
      school: 'Escolar',
      vaccines: 'Vacinas'
    },
    // Checkout
    checkout: {
      title: 'Finalizar Assinatura',
      plan: 'Plano Selecionado',
      orderBump: 'Adicione ao seu pedido',
      bumpTitle: 'Planilha PRO + Checklists',
      bumpDescription: 'Tenha acesso a planilhas profissionais e checklists completos',
      bumpPrice: 'Apenas R$ 27',
      total: 'Total',
      payment: 'Forma de Pagamento',
      creditCard: 'Cartão de Crédito',
      pix: 'PIX',
      guarantee: 'Garantia de 7 dias',
      guaranteeText: 'Se não gostar, devolvemos 100% do seu dinheiro',
      subscribe: 'Assinar Agora'
    },
    // Members Area
    members: {
      title: 'Área de Membros',
      welcome: 'Bem-vinda',
      dashboard: 'Painel',
      courses: 'Cursos',
      templates: 'Templates',
      tools: 'Ferramentas',
      community: 'Comunidade',
      support: 'Suporte',
      myProgress: 'Meu Progresso',
      newContent: 'Novos Conteúdos'
    },
    // Footer
    footer: {
      tagline: 'Acompanhando famílias da gestação ao futuro',
      product: 'Produto',
      company: 'Empresa',
      support: 'Suporte',
      legal: 'Legal',
      allRightsReserved: 'Todos os direitos reservados'
    },
    // Common
    common: {
      save: 'Salvar',
      cancel: 'Cancelar',
      edit: 'Editar',
      delete: 'Excluir',
      loading: 'Carregando...',
      error: 'Erro',
      success: 'Sucesso',
      comingSoon: 'Em Breve'
    }
  },
  en: {
    nav: {
      home: 'Home',
      modules: 'Modules',
      pricing: 'Pricing',
      community: 'Community',
      login: 'Login',
      signup: 'Start Free'
    },
    hero: {
      headline: 'From positive test to the future',
      subheadline: 'everything your child needs is here.',
      description: 'The only app that follows your child from pregnancy to college — and organizes absolutely everything for you.',
      cta: 'Start Journey',
      ctaSecondary: 'Watch Demo',
      trustBadge: 'Over 100,000 mothers trust Mãe360'
    },
    pricing: {
      title: 'Plans That Grow With You',
      subtitle: 'Choose the perfect plan for your family',
      monthly: 'Monthly',
      yearly: 'Yearly',
      free: {
        name: 'Free',
        price: '$0',
        period: '/month',
        features: [
          'Access to basic content',
          'Baby sleep tracker',
          'Vaccine calendar',
          'Online mothers community',
          'Weekly newsletter'
        ],
        cta: 'Start Free'
      },
      premium: {
        name: 'Premium',
        price: '$4.90',
        priceUSD: '$4.90',
        period: '/month',
        popular: 'Most Popular',
        features: [
          'All 13 complete modules',
          'Complete financial planning',
          'Unlimited integrated AI',
          'Upload exams and documents',
          'Exclusive cashback shop',
          'No ads'
        ],
        cta: 'Subscribe Premium'
      },
      maternityProgram: {
        name: 'Premium Financial Maternity Program',
        price: '$95.80',
        period: 'one-time OR 12x $9.80',
        features: [
          'All 13 complete modules',
          'Complete financial planning',
          'Unlimited integrated AI',
          'Upload exams and documents',
          '✨ Expert consultancy',
          'Exclusive cashback shop',
          '✨ Priority 24/7 support',
          'No ads',
          'Lifetime program access'
        ],
        cta: 'Subscribe Premium Program'
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Everything in Premium',
          'Multiple profiles',
          'API integration',
          'Custom reports',
          'Dedicated account manager'
        ],
        cta: 'Contact Sales'
      }
    },
    modules: {
      title: 'Follow Every Stage',
      subtitle: '13 complete modules for the entire journey',
      viewModule: 'Access Module',
      pregnancy: {
        title: 'Pregnancy',
        description: '3D models, prenatal schedule, emotional diary and more',
        features: ['Week by week', 'Contractions', 'Baby movements', 'Birth plan']
      },
      baby: {
        title: 'Baby (0-24 months)',
        description: 'Sleep trackers, feedings and developmental milestones',
        features: ['Smart sleep', 'Breastfeeding', 'WHO growth', 'Solid foods']
      },
      childhood: {
        title: 'Childhood (2-12 years)',
        description: 'School schedule, development and financial planning',
        features: ['Routines', 'School', 'Behavior', 'Annual costs']
      },
      teen: {
        title: 'Adolescence (13-18 years)',
        description: 'Career planning and emotional control',
        features: ['SAT', 'School performance', 'Emotions', 'Career']
      },
      college: {
        title: 'College (18+)',
        description: 'University comparisons and cost simulations',
        features: ['Comparison', 'Costs', 'Scholarships', 'Financing']
      },
      financial: {
        title: 'Financial Planning',
        description: 'Complete cost structure at all stages',
        features: ['AI forecast', 'Alerts', 'Charts', 'Goals']
      },
      documents: {
        title: 'Exams and Documents',
        description: 'Digital organization with smart alerts',
        features: ['Upload', 'Search', 'Cloud backup', 'History']
      },
      vaccinesBaby: {
        title: 'Baby Vaccines',
        description: 'Complete digital card',
        features: ['Official calendar', 'Alerts', 'Lots', 'History']
      },
      vaccinesMom: {
        title: 'Mom Vaccines',
        description: 'Prenatal and postpartum',
        features: ['Tdap', 'Influenza', 'Hepatitis B', 'Covid']
      },
      community: {
        title: 'Community',
        description: 'Groups by stage, chat and support among mothers',
        features: ['Groups', 'Chat', 'Posts', 'Ranking']
      },
      premium: {
        title: 'Premium Consulting',
        description: 'Access to professionals and exclusive classes',
        features: ['Pediatricians', 'Nutritionists', 'Psychologists', 'Lives']
      },
      shop: {
        title: 'Shop + Cashback',
        description: 'Selected products with rewards system',
        features: ['Diapers', 'Clothes', 'Cashback', 'VIP Club']
      },
      ai: {
        title: 'Integrated AI',
        description: 'Smart assistant for health, finances and routine',
        features: ['24/7 questions', 'Symptoms', 'Costs', 'Organization']
      }
    },
    pregnancy: {
      title: 'Pregnancy Module',
      subtitle: 'Track every week of your pregnancy',
      week: 'Week',
      babySize: 'Baby Size',
      symptoms: 'Common Symptoms',
      checklist: 'Checklist',
      diary: 'Emotional Diary',
      appointments: 'Appointments',
      contractions: 'Contractions',
      kicks: 'Movements',
      addEntry: 'Add Entry',
      viewAll: 'View All',
      nextAppointment: 'Next Appointment',
      daysUntil: 'days',
      birthPlan: 'Birth Plan'
    },
    baby: {
      title: 'Baby Module',
      subtitle: 'Track your baby development',
      sleep: 'Sleep',
      feeding: 'Feeding',
      diapers: 'Diapers',
      growth: 'Growth',
      milestones: 'Milestones',
      solidFood: 'Solid Foods',
      routine: 'Daily Routine',
      health: 'Health',
      costs: 'Costs',
      addRecord: 'Add Record',
      lastSleep: 'Last Sleep',
      lastFeeding: 'Last Feeding',
      todayDiapers: 'Diapers Today'
    },
    financial: {
      title: 'Financial Planning',
      subtitle: 'Organize your child finances from 0 to 18 years',
      pregnancy: 'Pregnancy',
      firstYear: 'First Year',
      childhood: 'Childhood',
      teen: 'Adolescence',
      college: 'College',
      totalCost: 'Total Estimated Cost',
      monthlyAverage: 'Monthly Average',
      addExpense: 'Add Expense',
      categories: 'Categories',
      forecast: 'AI Forecast',
      alerts: 'Budget Alerts',
      goals: 'Financial Goals'
    },
    documents: {
      title: 'Exams and Documents',
      subtitle: 'Organize all medical documents',
      upload: 'Upload',
      categories: 'Categories',
      search: 'Search',
      recent: 'Recent',
      important: 'Important',
      exams: 'Exams',
      prescriptions: 'Prescriptions',
      reports: 'Reports',
      vaccines: 'Vaccine Records'
    },
    vaccines: {
      title: 'Vaccination Card',
      subtitle: 'Keep vaccines up to date',
      baby: 'Baby',
      mom: 'Mom',
      upToDate: 'Up to Date',
      pending: 'Pending',
      next: 'Next',
      addVaccine: 'Add Vaccine',
      date: 'Date',
      lot: 'Lot',
      location: 'Location',
      professional: 'Professional'
    },
    community: {
      title: 'Community',
      subtitle: 'Connect with other mothers',
      groups: 'Groups',
      chat: 'Chat',
      posts: 'Posts',
      myGroups: 'My Groups',
      discover: 'Discover',
      newPost: 'New Post',
      firstTimeMoms: 'First Time Moms',
      soloMoms: 'Solo Moms',
      trying: 'Trying to Conceive'
    },
    consultancy: {
      title: 'Premium Consulting',
      subtitle: 'Access to specialists',
      pediatricians: 'Pediatricians',
      nutritionists: 'Nutritionists',
      sleepConsultants: 'Sleep Consultants',
      psychologists: 'Psychologists',
      schedule: 'Schedule Appointment',
      lives: 'Weekly Lives',
      classes: 'Recorded Classes',
      nextLive: 'Next Live'
    },
    shop: {
      title: 'Mãe360 Shop',
      subtitle: 'Selected products with cashback',
      categories: 'Categories',
      diapers: 'Diapers',
      clothes: 'Clothes',
      accessories: 'Accessories',
      hygiene: 'Hygiene',
      toys: 'Toys',
      supplements: 'Supplements',
      cashback: 'Cashback',
      points: 'Points',
      vipClub: 'VIP Club'
    },
    ai: {
      title: 'AI Assistant',
      subtitle: 'Get answers 24/7',
      askQuestion: 'Ask your question',
      categories: 'Categories',
      health: 'Health',
      symptoms: 'Symptoms',
      sleep: 'Sleep',
      routine: 'Routine',
      feeding: 'Feeding',
      financial: 'Financial',
      school: 'School',
      vaccines: 'Vaccines'
    },
    checkout: {
      title: 'Complete Subscription',
      plan: 'Selected Plan',
      orderBump: 'Add to your order',
      bumpTitle: 'PRO Spreadsheet + Checklists',
      bumpDescription: 'Get access to professional spreadsheets and complete checklists',
      bumpPrice: 'Only $9.90',
      total: 'Total',
      payment: 'Payment Method',
      creditCard: 'Credit Card',
      pix: 'PIX',
      guarantee: '7-day guarantee',
      guaranteeText: 'If you don\'t like it, we\'ll refund 100% of your money',
      subscribe: 'Subscribe Now'
    },
    members: {
      title: 'Members Area',
      welcome: 'Welcome',
      dashboard: 'Dashboard',
      courses: 'Courses',
      templates: 'Templates',
      tools: 'Tools',
      community: 'Community',
      support: 'Support',
      myProgress: 'My Progress',
      newContent: 'New Content'
    },
    footer: {
      tagline: 'Following families from pregnancy to the future',
      product: 'Product',
      company: 'Company',
      support: 'Support',
      legal: 'Legal',
      allRightsReserved: 'All rights reserved'
    },
    common: {
      save: 'Save',
      cancel: 'Cancel',
      edit: 'Edit',
      delete: 'Delete',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      comingSoon: 'Coming Soon'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      modules: 'Módulos',
      pricing: 'Planes',
      community: 'Comunidad',
      login: 'Entrar',
      signup: 'Comenzar Gratis'
    },
    hero: {
      headline: 'De la prueba positiva al futuro',
      subheadline: 'todo lo que tu hijo necesita está aquí.',
      description: 'La única app que acompaña a tu hijo desde el embarazo hasta la universidad — y organiza absolutamente todo para ti.',
      cta: 'Comenzar Viaje',
      ctaSecondary: 'Ver Demostración',
      trustBadge: 'Más de 100.000 madres confían en Mãe360'
    },
    pricing: {
      title: 'Planes que Crecen Contigo',
      subtitle: 'Elige el plan perfecto para tu familia',
      monthly: 'Mensual',
      yearly: 'Anual',
      free: {
        name: 'Gratis',
        price: '$0',
        period: '/mes',
        features: [
          'Acceso a contenidos básicos',
          'Rastreador de sueño del bebé',
          'Calendario de vacunas',
          'Comunidad online de madres',
          'Newsletter semanal'
        ],
        cta: 'Comenzar Gratis'
      },
      premium: {
        name: 'Premium',
        price: '$4.90',
        priceUSD: '$4.90',
        period: '/mes',
        popular: 'Más Popular',
        features: [
          'Los 13 módulos completos',
          'Planificación financiera completa',
          'IA integrada ilimitada',
          'Subir exámenes y documentos',
          'Tienda con cashback exclusivo',
          'Sin anuncios'
        ],
        cta: 'Suscribir Premium'
      },
      maternityProgram: {
        name: 'Programa Premium Maternidad Financiera',
        price: '$95.80',
        period: 'único O 12x $9.80',
        features: [
          'Los 13 módulos completos',
          'Planificación financiera completa',
          'IA integrada ilimitada',
          'Subir exámenes y documentos',
          '✨ Consultoría con expertos',
          'Tienda con cashback exclusivo',
          '✨ Soporte prioritario 24/7',
          'Sin anuncios',
          'Acceso vitalicio al programa'
        ],
        cta: 'Suscribir Programa Premium'
      },
      enterprise: {
        name: 'Empresarial',
        price: 'Personalizado',
        features: [
          'Todo en Premium',
          'Múltiples perfiles',
          'Integración API',
          'Informes personalizados',
          'Gerente de cuenta dedicado'
        ],
        cta: 'Contactar Ventas'
      }
    },
    modules: {
      title: 'Sigue Cada Etapa',
      subtitle: '13 módulos completos para todo el viaje',
      viewModule: 'Acceder Módulo',
      pregnancy: {
        title: 'Embarazo',
        description: 'Modelos 3D, agenda prenatal, diario emocional y más',
        features: ['Semana a semana', 'Contracciones', 'Movimientos', 'Plan de parto']
      },
      baby: {
        title: 'Bebé (0-24 meses)',
        description: 'Rastreadores de sueño, alimentación y desarrollo',
        features: ['Sueño inteligente', 'Lactancia', 'Crecimiento OMS', 'Alimentos sólidos']
      },
      childhood: {
        title: 'Infancia (2-12 años)',
        description: 'Agenda escolar, desarrollo y planificación financiera',
        features: ['Rutinas', 'Escuela', 'Comportamiento', 'Gastos anuales']
      },
      teen: {
        title: 'Adolescencia (13-18 años)',
        description: 'Planificación de carrera y control emocional',
        features: ['Exámenes', 'Rendimiento escolar', 'Emociones', 'Carrera']
      },
      college: {
        title: 'Universidad (18+)',
        description: 'Comparaciones de universidades y simulaciones de costos',
        features: ['Comparación', 'Costos', 'Becas', 'Financiamiento']
      },
      financial: {
        title: 'Planificación Financiera',
        description: 'Estructura completa de costos en todas las etapas',
        features: ['Previsión IA', 'Alertas', 'Gráficos', 'Metas']
      },
      documents: {
        title: 'Exámenes y Documentos',
        description: 'Organización digital con alertas inteligentes',
        features: ['Subir', 'Buscar', 'Backup nube', 'Historial']
      },
      vaccinesBaby: {
        title: 'Vacunas del Bebé',
        description: 'Carnet digital completo',
        features: ['Calendario oficial', 'Alertas', 'Lotes', 'Historial']
      },
      vaccinesMom: {
        title: 'Vacunas de Mamá',
        description: 'Prenatal y posparto',
        features: ['dTpa', 'Influenza', 'Hepatitis B', 'Covid']
      },
      community: {
        title: 'Comunidad',
        description: 'Grupos por etapa, chat y apoyo entre madres',
        features: ['Grupos', 'Chat', 'Publicaciones', 'Ranking']
      },
      premium: {
        title: 'Consultoría Premium',
        description: 'Acceso a profesionales y clases exclusivas',
        features: ['Pediatras', 'Nutricionistas', 'Psicólogos', 'Lives']
      },
      shop: {
        title: 'Tienda + Cashback',
        description: 'Productos seleccionados con sistema de recompensas',
        features: ['Pañales', 'Ropa', 'Cashback', 'Club VIP']
      },
      ai: {
        title: 'IA Integrada',
        description: 'Asistente inteligente para salud, finanzas y rutina',
        features: ['Preguntas 24/7', 'Síntomas', 'Costos', 'Organización']
      }
    },
    pregnancy: {
      title: 'Módulo Embarazo',
      subtitle: 'Sigue cada semana de tu embarazo',
      week: 'Semana',
      babySize: 'Tamaño del Bebé',
      symptoms: 'Síntomas Comunes',
      checklist: 'Lista de Tareas',
      diary: 'Diario Emocional',
      appointments: 'Consultas',
      contractions: 'Contracciones',
      kicks: 'Movimientos',
      addEntry: 'Agregar Entrada',
      viewAll: 'Ver Todos',
      nextAppointment: 'Próxima Consulta',
      daysUntil: 'días',
      birthPlan: 'Plan de Parto'
    },
    baby: {
      title: 'Módulo Bebé',
      subtitle: 'Sigue el desarrollo de tu bebé',
      sleep: 'Sueño',
      feeding: 'Alimentación',
      diapers: 'Pañales',
      growth: 'Crecimiento',
      milestones: 'Hitos',
      solidFood: 'Alimentos Sólidos',
      routine: 'Rutina Diaria',
      health: 'Salud',
      costs: 'Costos',
      addRecord: 'Agregar Registro',
      lastSleep: 'Último Sueño',
      lastFeeding: 'Última Alimentación',
      todayDiapers: 'Pañales Hoy'
    },
    financial: {
      title: 'Planificación Financiera',
      subtitle: 'Organiza las finanzas de tu hijo de 0 a 18 años',
      pregnancy: 'Embarazo',
      firstYear: 'Primer Año',
      childhood: 'Infancia',
      teen: 'Adolescencia',
      college: 'Universidad',
      totalCost: 'Costo Total Estimado',
      monthlyAverage: 'Promedio Mensual',
      addExpense: 'Agregar Gasto',
      categories: 'Categorías',
      forecast: 'Previsión IA',
      alerts: 'Alertas de Presupuesto',
      goals: 'Metas Financieras'
    },
    documents: {
      title: 'Exámenes y Documentos',
      subtitle: 'Organiza todos los documentos médicos',
      upload: 'Subir',
      categories: 'Categorías',
      search: 'Buscar',
      recent: 'Recientes',
      important: 'Importantes',
      exams: 'Exámenes',
      prescriptions: 'Recetas',
      reports: 'Informes',
      vaccines: 'Comprobantes de Vacuna'
    },
    vaccines: {
      title: 'Carnet de Vacunación',
      subtitle: 'Mantén las vacunas al día',
      baby: 'Bebé',
      mom: 'Mamá',
      upToDate: 'Al Día',
      pending: 'Pendientes',
      next: 'Próxima',
      addVaccine: 'Agregar Vacuna',
      date: 'Fecha',
      lot: 'Lote',
      location: 'Lugar',
      professional: 'Profesional'
    },
    community: {
      title: 'Comunidad',
      subtitle: 'Conéctate con otras madres',
      groups: 'Grupos',
      chat: 'Chat',
      posts: 'Publicaciones',
      myGroups: 'Mis Grupos',
      discover: 'Descubrir',
      newPost: 'Nueva Publicación',
      firstTimeMoms: 'Madres Primerizas',
      soloMoms: 'Madres Solas',
      trying: 'Intentando Concebir'
    },
    consultancy: {
      title: 'Consultoría Premium',
      subtitle: 'Acceso a especialistas',
      pediatricians: 'Pediatras',
      nutritionists: 'Nutricionistas',
      sleepConsultants: 'Consultoras de Sueño',
      psychologists: 'Psicólogos',
      schedule: 'Agendar Consulta',
      lives: 'Lives Semanales',
      classes: 'Clases Grabadas',
      nextLive: 'Próxima Live'
    },
    shop: {
      title: 'Tienda Mãe360',
      subtitle: 'Productos seleccionados con cashback',
      categories: 'Categorías',
      diapers: 'Pañales',
      clothes: 'Ropa',
      accessories: 'Accesorios',
      hygiene: 'Higiene',
      toys: 'Juguetes',
      supplements: 'Suplementos',
      cashback: 'Cashback',
      points: 'Puntos',
      vipClub: 'Club VIP'
    },
    ai: {
      title: 'Asistente IA',
      subtitle: 'Respuestas 24/7',
      askQuestion: 'Haz tu pregunta',
      categories: 'Categorías',
      health: 'Salud',
      symptoms: 'Síntomas',
      sleep: 'Sueño',
      routine: 'Rutina',
      feeding: 'Alimentación',
      financial: 'Financiero',
      school: 'Escolar',
      vaccines: 'Vacunas'
    },
    checkout: {
      title: 'Completar Suscripción',
      plan: 'Plan Seleccionado',
      orderBump: 'Agrega a tu pedido',
      bumpTitle: 'Planilla PRO + Checklists',
      bumpDescription: 'Accede a planillas profesionales y checklists completos',
      bumpPrice: 'Solo $9.90',
      total: 'Total',
      payment: 'Método de Pago',
      creditCard: 'Tarjeta de Crédito',
      pix: 'PIX',
      guarantee: 'Garantía de 7 días',
      guaranteeText: 'Si no te gusta, devolvemos el 100% de tu dinero',
      subscribe: 'Suscribir Ahora'
    },
    members: {
      title: 'Área de Miembros',
      welcome: 'Bienvenida',
      dashboard: 'Panel',
      courses: 'Cursos',
      templates: 'Plantillas',
      tools: 'Herramientas',
      community: 'Comunidad',
      support: 'Soporte',
      myProgress: 'Mi Progreso',
      newContent: 'Nuevo Contenido'
    },
    footer: {
      tagline: 'Acompañando familias del embarazo al futuro',
      product: 'Producto',
      company: 'Empresa',
      support: 'Soporte',
      legal: 'Legal',
      allRightsReserved: 'Todos los derechos reservados'
    },
    common: {
      save: 'Guardar',
      cancel: 'Cancelar',
      edit: 'Editar',
      delete: 'Eliminar',
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      comingSoon: 'Próximamente'
    }
  }
};

export function useTranslation(lang: Language = 'pt') {
  return translations[lang];
}
