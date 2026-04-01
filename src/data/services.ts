export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  items: string[];
  fullDescription: string;
  features?: Feature[];
  gallery?: string[];
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Category {
  id: string;
  label: string;
  services: Service[];
}

export const categories: Category[] = [
  {
    id: "marketing",
    label: "Marketing & Vendas",
    services: [
      {
        slug: "criacao-de-sites-profissionais",
        title: "Criação de Sites Profissionais",
        description:
          "Desenvolvimento de sites institucionais modernos, responsivos e otimizados para converter visitantes em clientes.",
        items: [
          "Sites Institucionais",
          "Landing Pages",
          "Sites com Foco em Conversão",
          "Reformulação de Sites Antigos",
        ],
        fullDescription:
          "Na CWB Partners, criamos sites que não são apenas bonitos, mas que funcionam como uma ferramenta de vendas poderosa para o seu negócio. Utilizamos as tecnologias mais modernas do mercado (Next.js, React, Tailwind CSS) para garantir que seu site seja extremamente rápido, seguro e totalmente adaptável a qualquer dispositivo (computadores, tablets e celulares). Além disso, todos os nossos projetos são desenvolvidos com as melhores práticas de SEO, garantindo uma excelente base para que sua empresa seja encontrada nos mecanismos de busca como o Google.",
        features: [
          {
            title: "Alta Performance",
            description:
              "Sites ultra-rápidos com pontuação máxima no Google PageSpeed (Core Web Vitals).",
            icon: "Zap",
          },
          {
            title: "Design Responsivo",
            description:
              "Experiência perfeita em computadores, tablets e smartphones.",
            icon: "Smartphone",
          },
          {
            title: "SEO Técnico",
            description:
              "Arquitetura otimizada para que seu site apareça nos primeiros resultados do Google.",
            icon: "Search",
          },
          {
            title: "Segurança Avançada",
            description:
              "Implementação de protocolos de segurança modernos e certificados SSL.",
            icon: "Lock",
          },
        ],
        gallery: [
          "/img/sites-hero.png",
          "/img/sites-speed.png",
          "/img/sites-responsive.png",
        ],
        metadata: {
          title: "Criação de Sites Profissionais em Curitiba | CWB Partners",
          description:
            "Desenvolvimento de sites institucionais e landing pages de alta performance. Sites rápidos, responsivos e otimizados para SEO em Curitiba.",
          keywords: [
            "criação de sites",
            "sites profissionais",
            "landing pages",
            "Curitiba",
            "desenvolvimento web",
          ],
        },
      },
      {
        slug: "lojas-virtuais-ecommerce",
        title: "Lojas Virtuais (E-commerce)",
        description:
          "Plataformas completas para vendas online com personalização total conforme a necessidade do seu negócio.",
        items: [
          "Checkout Transparente",
          "Integração com Pagamentos",
          "Cálculo de Frete Automatizado",
          "Integração com Marketplaces",
        ],
        fullDescription:
          "Transformamos sua ideia em uma máquina de vendas online. Nossas soluções de e-commerce são focadas na experiência do usuário (UX) para maximizar as conversões. Implementamos checkouts simplificados e transparentes, integrações seguras com os principais meios de pagamento (Cartão, PIX, Boleto) e sistemas de logística automatizados. Seja para vender produtos físicos ou digitais, criamos uma plataforma escalável que cresce junto com o seu negócio.",
        features: [
          {
            title: "Checkout de Alta Conversão",
            description:
              "Processo de compra simplificado para reduzir o abandono de carrinho.",
            icon: "Zap",
          },
          {
            title: "Pagamentos Seguros",
            description:
              "Integração SSL e gateways de pagamento com máxima proteção.",
            icon: "Lock",
          },
          {
            title: "Gestão de Inventário",
            description:
              "Controle total de produtos, estoque e SKUs em um só lugar.",
            icon: "Search",
          },
          {
            title: "Dashboard de Vendas",
            description:
              "Acompanhe métricas e resultados em tempo real para escalar seu negócio.",
            icon: "Zap",
          },
        ],
        gallery: [
          "/img/ecommerce-hero.png",
          "/img/ecommerce-secure.png",
          "/img/ecommerce-analytics.png",
        ],
        metadata: {
          title: "Criação de Lojas Virtuais e E-commerce | CWB Partners",
          description:
            "Plataformas de e-commerce completas e personalizadas. Venda online com segurança, performance e foco em conversão.",
          keywords: [
            "loja virtual",
            "e-commerce",
            "vendas online",
            "Mercado Pago",
            "PagSeguro",
          ],
        },
      },
    ],
  },
  {
    id: "sistemas",
    label: "Plataformas Web",
    services: [
      {
        slug: "sistemas-web-sob-medida",
        title: "Sistemas Web Sob Medida",
        description:
          "Desenvolvimento de plataformas personalizadas para gestão interna e automação de processos empresariais.",
        items: [
          "Sistemas de Gestão (ERP/CRM)",
          "Painéis Administrativos",
          "Áreas Logadas",
          "Dashboards de Dados",
        ],
        fullDescription:
          "Desenvolvemos sistemas web totalmente customizados para resolver os gargalos do seu negócio. Desde CRMs para gestão de clientes até ERPs complexos para controle financeiro e de estoque, criamos ferramentas que automatizam tarefas repetitivas, centralizam informações e fornecem dados valiosos para a tomada de decisão através de dashboards dinâmicos e intuitivos. Nossa prioridade é a escalabilidade e a segurança dos seus dados.",
        features: [
          {
            title: "ERP & CRM Customizados",
            description:
              "Software moldado exatamente aos seus processos internos, sem funcionalidades desnecessárias.",
            icon: "Zap",
          },
          {
            title: "Automação de Processos",
            description:
              "Reduza erros manuais e ganhe tempo automatizando fluxos de trabalho complexos.",
            icon: "Smartphone",
          },
          {
            title: "Dashboards de Dados",
            description:
              "Visualize KPIs e métricas importantes em tempo real para decisões baseadas em dados.",
            icon: "Search",
          },
          {
            title: "Arquitetura Escalável",
            description:
              "Sistemas preparados para crescer junto com a demanda da sua empresa.",
            icon: "Lock",
          },
        ],
        gallery: [
          "/img/systems-hero.png",
          "/img/systems-arch.png",
          "/img/systems-automation.png",
        ],
        metadata: {
          title: "Desenvolvimento de Sistemas Web Sob Medida | CWB Partners",
          description:
            "Desenvolvemos ERPs, CRMs e plataformas personalizadas para automatizar sua empresa. Sistemas web seguros e escaláveis.",
          keywords: [
            "sistemas web",
            "ERP sob medida",
            "CRM personalizado",
            "automação de processos",
          ],
        },
      },
    ],
  },
  {
    id: "engenharia",
    label: "Engenharia Core",
    services: [
      {
        slug: "full-stack-development",
        title: "Full Stack Development",
        description:
          "Desenvolvimento completo de frontend moderno, backend escalável e modelagem de banco de dados robusta.",
        items: [
          "Frontend React/Next.js",
          "Backend Seguro & Escalável",
          "Modelagem de Dados",
          "Arquitetura Cloud",
        ],
        fullDescription:
          "Oferecemos engenharia de software de ponta para projetos que exigem alta complexidade técnica. Nossa abordagem Full Stack garante que tanto a interface quanto o motor do sistema trabalhem em perfeita harmonia. Utilizamos tecnologias como Node.js, Python, PostgreSQL e arquiteturas em nuvem (AWS/Vercel) para entregar soluções robustas, capazes de suportar milhares de acessos simultâneos com segurança e estabilidade.",
        metadata: {
          title: "Desenvolvimento Full Stack Profissional | CWB Partners",
          description:
            "Consultoria e desenvolvimento Full Stack (Frontend e Backend). Arquiteturas modernas com Next.js, React e Node.js.",
          keywords: [
            "desenvolvimento full stack",
            "Next.js",
            "React",
            "Node.js",
            "arquitetura cloud",
          ],
        },
      },
      {
        slug: "integracoes-apis",
        title: "Integrações & APIs",
        description:
          "Conexão inteligente entre sua plataforma e serviços externos para automação total.",
        items: [
          "APIs de Terceiros",
          "WhatsApp & Chatbots",
          "Integrações com ERP/CRM",
          "Automação de Fluxos",
        ],
        fullDescription:
          "Sua empresa não pode ser uma ilha digital. Desenvolvemos pontes tecnológicas que conectam seu negócio ao mundo. Especialistas em arquitetura de APIs e automação de fluxos, garantimos que seus sistemas conversem de forma fluida e segura. Seja integrando gateways de pagamento, sistemas logísticos, CRMs de mercado ou criando automações inteligentes via WhatsApp, nossa engenharia elimina processos manuais e escala sua produtividade com precisão técnica.",
        features: [
          {
            title: "Integração de APIs de Mercado",
            description:
              "Conectamos sua plataforma a serviços como Stripe, Pagar.me, RD Station e sistemas de ERP.",
            icon: "Zap",
          },
          {
            title: "Automação WhatsApp & Chatbots",
            description:
              "Transforme seu atendimento com fluxos automatizados e inteligentes integrados ao seu sistema.",
            icon: "Smartphone",
          },
          {
            title: "Webhooks & Web Services",
            description:
              "Receba e envie dados em tempo real entre diferentes plataformas com total segurança.",
            icon: "Lock",
          },
          {
            title: "Sincronização de Dados",
            description:
              "Mantenha seus estoques, pedidos e clientes sincronizados entre todas as suas ferramentas.",
            icon: "Search",
          },
        ],
        gallery: ["/img/api-hero.png", "/img/api-whatsapp.png"],
        metadata: {
          title: "Integração de APIs e Chatbots WhatsApp | CWB Partners",
          description:
            "Conecte seus sistemas. Integração de APIs de terceiros, automação de WhatsApp e fluxos de dados empresariais.",
          keywords: [
            "integração de API",
            "chatbot WhatsApp",
            "automação",
            "webhooks",
          ],
        },
      },
    ],
  },
  {
    id: "suporte",
    label: "Suporte & Evolução",
    services: [
      {
        slug: "seo-presenca-digital",
        title: "SEO & Presença Digital",
        description:
          "Estratégias técnicas para garantir que seu site seja encontrado no Google e carregue instantaneamente.",
        items: [
          "SEO Técnico",
          "Otimização de Performance",
          "Core Web Vitals",
          "Google Search Console",
        ],
        fullDescription:
          "Não basta ter um site, ele precisa ser visto por quem procura seu serviço. Nossa consultoria de SEO técnico é focada em resultados orgânicos sustentáveis. Analisamos profundamente a arquitetura do seu site, otimizamos o tempo de carregamento para atingir o topo do Google PageSpeed e garantimos que sua estrutura de dados esteja perfeitamente organizada para que os mecanismos de busca compreendam e valorizem seu conteúdo. Aumentamos sua relevância digital para que você atraia leads qualificados de forma constante.",
        features: [
          {
            title: "Auditoria de SEO Técnico",
            description:
              "Análise profunda de rastreabilidade, indexação e estrutura de tags HTML.",
            icon: "Search",
          },
          {
            title: "Core Web Vitals",
            description:
              "Otimização focada em velocidade, interatividade e estabilidade visual.",
            icon: "Zap",
          },
          {
            title: "Estratégia de Conteúdo",
            description:
              "Auxiliamos na criação de conteúdo otimizado para as palavras-chave mais lucrativas.",
            icon: "Smartphone",
          },
          {
            title: "Monitoramento Contínuo",
            description:
              "Acompanhamento diário via Search Console e ferramentas de rank tracking.",
            icon: "Search",
          },
        ],
        gallery: [
          "/img/seo-hero.png",
          "/img/seo-performance.png",
          "/img/seo-audit.png",
        ],
        metadata: {
          title: "SEO Técnico e Otimização de Sites | CWB Partners",
          description:
            "Melhore seu posicionamento no Google. SEO técnico, otimização de performance e Core Web Vitals para sua empresa.",
          keywords: [
            "SEO Curitiba",
            "primeira página do Google",
            "otimização de velocidade",
            "Core Web Vitals",
          ],
        },
      },
      {
        slug: "manutencao-infra",
        title: "Manutenção & Infra",
        description:
          "Suporte contínuo para manter seu projeto seguro, atualizado e rodando em alta performance.",
        items: [
          "Correção de Bugs",
          "Certificados SSL",
          "Hospedagem & Deploy",
          "E-mails Profissionais",
        ],
        fullDescription:
          "Sua plataforma digital não pode parar. Oferecemos um serviço de manutenção proativa e infraestrutura robusta para garantir que seu site ou sistema esteja sempre online, seguro e performático. Cuidamos desde a configuração de servidores na nuvem (AWS, Google Cloud, Azure) até a implementação de firewalls, backups automáticos e monitoramento 24/7. Com nossa gestão, você foca no seu negócio enquanto nós garantimos a integridade tecnológica da sua operação.",
        features: [
          {
            title: "Hospedagem Gerenciada",
            description:
              "Servidores de alta performance com configuração otimizada para sua aplicação.",
            icon: "Zap",
          },
          {
            title: "Segurança de Dados",
            description:
              "Implementação de SSL, Firewall e proteção contra ataques DDoS.",
            icon: "Lock",
          },
          {
            title: "Monitoramento 24/7",
            description:
              "Sistemas de alerta que nos notificam instantaneamente sobre qualquer instabilidade.",
            icon: "Search",
          },
          {
            title: "Backups Automatizados",
            description:
              "Sua informação protegida com rotinas de backup diárias em múltiplos locais.",
            icon: "Smartphone",
          },
        ],
        gallery: [
          "/img/infra-hero.png",
          "/img/infra-security.png",
          "/img/infra-uptime.png",
        ],
        metadata: {
          title: "Manutenção de Sites e Infraestrutura Web | CWB Partners",
          description:
            "Suporte técnico contínuo para seu site ou sistema. Hospedagem profissional, segurança SSL e correção de bugs.",
          keywords: [
            "manutenção de sites",
            "hospedagem profissional",
            "suporte técnico",
            "segurança web",
          ],
        },
      },
    ],
  },
];

export const allServices = categories.flatMap((cat) => cat.services);
