import { ServiceDetail } from '../types';

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'financeiro',
    title: 'Gestão Financeira',
    subtitle: 'Controle de caixa, contas e relatórios estratégicos',
    tagline: 'Previsibilidade, liquidez e inteligência nos números do seu negócio',
    badge: 'Função Financeira',
    description:
      'Assumimos a operação financeira do seu negócio para que você tenha total clareza sobre receitas, custos, fluxo de caixa futuro e margens de lucro, eliminando atrasos e cobranças indevidas.',
    targetAudience: 'Empresas de comércio, serviços e indústrias que buscam profissionalizar seu fluxo de caixa e ter relatórios diários de liquidez.',
    keyBenefits: [
      'Visão diária e projetada do fluxo de caixa',
      'Zero juros ou multas por pagamentos em atraso',
      'Conciliação bancária 100% alinhada e auditada',
      'Redução de inadimplência com rotinas de cobrança amigável',
      'Relatórios executivos mensais com DRE gerencial'
    ],
    activities: [
      {
        name: 'Contas a Pagar e a Receber',
        description: 'Agendamento pontual de títulos, conferência de boletos, emissão de faturamentos e acompanhamento de recebíveis.'
      },
      {
        name: 'Conciliação Bancária Diária',
        description: 'Conferência minuciosa entre extratos bancários, cartões de crédito, PIX e o sistema de gestão da empresa.'
      },
      {
        name: 'Projeção de Fluxo de Caixa',
        description: 'Mapeamento das entradas e saídas futuras para antecipar necessidades de capital de giro e evitar imprevistos.'
      },
      {
        name: 'Gestão e Cobrança Preventiva',
        description: 'Controle de prazos de vencimento e contato consultivo com clientes para garantir o recebimento no prazo.'
      },
      {
        name: 'Emissão de Notas Fiscais e Boletos',
        description: 'Faturamento rápido e preciso integrado ao seu ERP ou sistema comercial.'
      }
    ],
    deliverables: [
      'Relatório Semanal de Fluxo de Caixa',
      'Espelho de Contas a Pagar e Receber',
      'Relatório de Conciliação e Saldos',
      'Painel de Indicadores Financeiros (DRE)'
    ],
    whatsappMessage: 'Ol%C3%A1%2C%20tenho%20interesse%20na%20Assessoria%20Financeira%20da%20DS%20Assessoria.%20Poderia%20me%20passar%20mais%20detalhes%3F'
  },
  {
    id: 'contabil',
    title: 'Funções Contábeis',
    subtitle: 'Escrituração, conformidade tributária e segurança fiscal',
    tagline: 'Sua empresa protegida, em dia com o fisco e pagando apenas o imposto justo',
    badge: 'Função Contábil',
    description:
      'Garantimos rigor técnico e conformidade com todas as exigências das esferas municipal, estadual e federal. Cuidamos dos balanços, apuração fiscal e planejamento tributário contínuo.',
    targetAudience: 'Empresas no Simples Nacional, Lucro Presumido e Lucro Real que precisam de segurança jurídica e planejamento contábil.',
    keyBenefits: [
      'Apuração de impostos com máxima pontualidade',
      'Planejamento tributário para redução legal de carga de impostos',
      'Demonstrações contábeis oficiais (Balanço Patrimonial, DRE, Balancetes)',
      'Emissão e monitoramento contínuo de Certidões Negativas de Débito (CNDs)',
      'Suporte consultivo para tomada de decisões societárias'
    ],
    activities: [
      {
        name: 'Escrituração Contábil e Fiscal',
        description: 'Lançamento de documentos, classificação contábil e apuração de tributos (PIS, COFINS, IRPJ, CSLL, ICMS, ISS).'
      },
      {
        name: 'Obrigações Acessórias (SPED, DCTF, EFD)',
        description: 'Envio regular e rigoroso de todas as declarações exigidas pela Receita Federal e Secretaria da Fazenda.'
      },
      {
        name: 'Balanço Patrimonial e DRE Oficial',
        description: 'Elaboração das demonstrações anuais e intermediárias fundamentais para bancos, investidores e sócios.'
      },
      {
        name: 'Consultoria e Planejamento Tributário',
        description: 'Análise anual do melhor enquadramento fiscal para diminuir despesas com impostos dentro da lei.'
      },
      {
        name: 'Emissão e Controle de CNDs',
        description: 'Garantia de certidões sempre atualizadas para licitações e operações bancárias.'
      }
    ],
    deliverables: [
      'Guias de Impostos Calculadas e Conferidas',
      'Balancetes e DRE Contábil Mensal/Trimestral',
      'Comprovantes de Transmissão de Obrigações',
      'Dossiê de Certidões Negativas Atualizadas'
    ],
    whatsappMessage: 'Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20os%20Servi%C3%A7os%20Cont%C3%A1beis%20da%20DS%20Assessoria.'
  },
  {
    id: 'rh',
    title: 'Recursos Humanos',
    subtitle: 'Departamento pessoal, eSocial e conformidade trabalhista',
    tagline: 'Cuidado com sua equipe e blindagem contra passivos trabalhistas',
    badge: 'Função de RH & DP',
    description:
      'Gerenciamos todo o ciclo do colaborador na sua organização, desde o processo admissional, gestão de benefícios e cálculo da folha, até o eSocial e desligamento, sempre em estrito cumprimento da CLT.',
    targetAudience: 'Negócios com equipe própria que precisam de agilidade no processamento de pessoal e proteção contra riscos trabalhistas.',
    keyBenefits: [
      'Folha de pagamento calculada sem erros e dentro do prazo',
      'Transmissão segura de eventos ao eSocial',
      'Controle rigoroso de férias, ponto eletrônico e escalas',
      'Atendimento humanizado para dúvidas de colaboradores',
      'Orientação preventiva sobre convenções coletivas e normas sindicais'
    ],
    activities: [
      {
        name: 'Processamento de Folha e Encargos',
        description: 'Cálculo de salários, pró-labore, INSS, FGTS, IRRF, 13º salário e benefícios (vale transporte, refeição, plano de saúde).'
      },
      {
        name: 'Admissões e Desligamentos',
        description: 'Elaboração de contratos de trabalho, conferência documental, aviso prévio, rescisões e homologações.'
      },
      {
        name: 'Gestão de Férias e Ponto',
        description: 'Acompanhamento do período aquisitivo de férias, cálculo de adicionais e controle de horas extras e banco de horas.'
      },
      {
        name: 'eSocial e Segurança do Trabalho',
        description: 'Envio tempestivo de todos os eventos trabalhistas e integração com laudos de SST (PCMSO/PGR).'
      },
      {
        name: 'Assessoria em Convenções Coletivas',
        description: 'Aplicação correta dos pisos salariais e benefícios previstos pelo sindicato da sua categoria em Jaú e região.'
      }
    ],
    deliverables: [
      'Folha de Pagamento Sintética e Analítica',
      'Holerites em PDF para Envio aos Funcionários',
      'Guias de FGTS Digital, DARF Previdenciário',
      'Calendário Proativo de Gestão de Férias'
    ],
    whatsappMessage: 'Ol%C3%A1%2C%20tenho%20interesse%20em%20solu%C3%A7%C3%B5es%20de%20Recursos%20Humanos%20e%20DP%20com%20a%20DS%20Assessoria.'
  },
  {
    id: 'administracao',
    title: 'Assessoria Administrativa',
    subtitle: 'Padronização de processos, contratos e rotinas operacionais',
    tagline: 'Estruturação operacional para sua empresa rodar com máxima eficiência',
    badge: 'Função Administrativa',
    description:
      'Organizamos o motor operacional da sua empresa. Atuamos na padronização de fluxos de trabalho, gestão de contratos, suporte societário, controle de documentação e rotinas de compras e fornecedores.',
    targetAudience: 'Líderes e gestores que gastam horas no operacional burocrático e precisam de apoio técnico para focar no crescimento do negócio.',
    keyBenefits: [
      'Liberação de tempo dos sócios para focar em vendas e clientes',
      'Processos documentados e rotinas padronizadas',
      'Gestão de contratos com fornecedores e reajustes em dia',
      'Organização de arquivos digitais seguros e acessíveis',
      'Suporte para licenças, alvarás de funcionamento e renovações'
    ],
    activities: [
      {
        name: 'Organização e Padronização de Processos',
        description: 'Desenho de Procedimentos Operacionais Padrão (POPs) para reduzir retrabalhos e gargalos na rotina.'
      },
      {
        name: 'Gestão de Contratos e Fornecedores',
        description: 'Acompanhamento de prazos, vigências, reajustes anuais e cotações de serviços essenciais.'
      },
      {
        name: 'Apoio Societário e Legalização',
        description: 'Abertura, alteração contratual, obtenção e renovação de alvarás na Prefeitura de Jaú e órgãos reguladores.'
      },
      {
        name: 'Arquivo Digital e Gestão de Documentos',
        description: 'Digitalização, catalogação segura na nuvem e facilidade de localização de qualquer arquivo corporativo.'
      },
      {
        name: 'Atendimento e Suporte Operacional',
        description: 'Suporte no intermédio entre clientes, fornecedores e parceiros com agilidade e cordialidade.'
      }
    ],
    deliverables: [
      'Manual e Fluxograma de Processos Internos',
      'Planilha e Alerta de Gestão de Contratos',
      'Relatório de Status de Alvarás e Licenças',
      'Diretório Estruturado de Documentos Digitais'
    ],
    whatsappMessage: 'Ol%C3%A1%2C%20quero%20conhecer%20a%20Assessoria%20Administrativa%20da%20DS%20Assessoria%20para%20minha%20empresa.'
  }
];
