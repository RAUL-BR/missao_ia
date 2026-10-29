// "proxima" = índice da próxima pergunta. Sem "proxima" = fim da história.
export const perguntas = [
    // 0
    {
        enunciado:
            "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que responde quase todas as dúvidas que uma pessoa pode ter e ainda gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                    "No início, ficou com medo do que essa tecnologia pode fazer.",
                    "Achou assustador pensar na velocidade com que a tecnologia está avançando.",
                ],
                proxima: 1,
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "Quis saber como usar IA no dia a dia.",
                    "Foi atrás de vídeos, artigos e mais informações sobre como utilizar essa tecnologia.",
                ],
                proxima: 2,
            },
        ],
    },
    // 1 (caminho do medo)
    {
        enunciado:
            "Para entender melhor o que sentia, você decidiu pesquisar. No caminho, encontrou notícias sobre IA substituindo empregos e outras sobre IA ajudando a salvar vidas. O que faz?",
        alternativas: [
            {
                texto: "Estudo os riscos e os limites antes de usar.",
                afirmacao: [
                    "Passou semanas estudando os riscos e os limites da IA.",
                    "Descobriu que conhecer a tecnologia diminuía bastante o medo.",
                ],
                proxima: 3,
            },
            {
                texto: "Converso com pessoas de confiança.",
                afirmacao: [
                    "Conversou com amigos e professores sobre as preocupações.",
                    "Percebeu que muita gente sentia o mesmo e que o diálogo ajudava.",
                ],
                proxima: 4,
            },
        ],
    },
    // 2 (caminho do entusiasmo)
    {
        enunciado:
            "Com muita empolgação, você começa a usar IA nos estudos e em projetos. Um colega pede que você faça o trabalho dele inteiro com a ajuda da IA. O que faz?",
        alternativas: [
            {
                texto: "Recuso e ensino a usar a IA de forma ética.",
                afirmacao: [
                    "Explicou ao colega que a IA deve apoiar o aprendizado, não substituí-lo.",
                    "Criou um grupo de estudos para usar a ferramenta com responsabilidade.",
                ],
                proxima: 4,
            },
            {
                texto: "Aceito, afinal é mais rápido.",
                afirmacao: [
                    "Entregou o trabalho rapidamente, sem revisar o conteúdo gerado.",
                    "Logo notou erros no texto e entendeu que confiar cegamente é arriscado.",
                ],
                proxima: 5,
            },
        ],
    },
    // 3
    {
        enunciado:
            "Depois de estudar tanto, você é convidado para um debate sobre regras para o uso de IA na escola. O que defende?",
        alternativas: [
            {
                texto: "Regras claras e transparência.",
                afirmacao: [
                    "Defendeu que todo conteúdo feito com IA fosse identificado.",
                    "Propôs regras simples e claras, criadas junto com os estudantes.",
                ],
                proxima: 6,
            },
            {
                texto: "Liberdade com responsabilidade.",
                afirmacao: [
                    "Defendeu que a IA fosse liberada, desde que usada com responsabilidade.",
                    "Sugeriu aulas sobre uso consciente em vez de proibições.",
                ],
                proxima: 6,
            },
        ],
    },
    // 4
    {
        enunciado:
            "Você é chamado para participar de um projeto da comunidade que usará IA. O que prioriza?",
        alternativas: [
            {
                texto: "Ajudar quem tem menos acesso à tecnologia.",
                afirmacao: [
                    "Organizou oficinas gratuitas para quem nunca tinha usado IA.",
                    "Mostrou que a tecnologia pode reduzir desigualdades quando é bem distribuída.",
                ],
                proxima: 6,
            },
            {
                texto: "Criar algo inovador e ousado.",
                afirmacao: [
                    "Liderou a criação de uma ferramenta inovadora para a comunidade.",
                    "Aprendeu que boas ideias precisam de testes e de feedback das pessoas.",
                ],
                proxima: 6,
            },
        ],
    },
    // 5 (depois do erro)
    {
        enunciado:
            "Imagens falsas de um colega, criadas por IA, começam a circular pela escola. O que você faz?",
        alternativas: [
            {
                texto: "Denuncio e ajudo o colega.",
                afirmacao: [
                    "Denunciou as imagens e apoiou o colega que foi prejudicado.",
                    "Passou a alertar outras pessoas sobre os perigos das falsificações digitais.",
                ],
                proxima: 6,
            },
            {
                texto: "Ignoro, não é problema meu.",
                afirmacao: [
                    "Ignorou o assunto, mas se sentiu mal ao ver o estrago que as imagens causaram.",
                    "Entendeu, tempos depois, que omissão também tem consequências.",
                ],
                proxima: 6,
            },
        ],
    },
    // 6 (final)
    {
        enunciado:
            "Anos depois, você é convidado a ajudar a decidir o futuro da IA no seu país. Qual é a sua prioridade?",
        alternativas: [
            {
                texto: "Educação e ética para todos.",
                afirmacao: [
                    "Defendeu que toda pessoa aprenda a usar IA com consciência.",
                    "Ajudou a criar programas gratuitos de formação digital em todo o país.",
                ],
            },
            {
                texto: "Inovação com regras de segurança.",
                afirmacao: [
                    "Propôs que a inovação avançasse junto com regras de segurança.",
                    "Ajudou a criar um comitê que avalia o impacto de cada nova tecnologia.",
                ],
            },
        ],
    },
];
