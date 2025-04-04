export const solarSystem = [
  "Sol",
  "Mercúrio",
  "Vênus",
  "Terra",
  "Marte",
  "Júpiter",
  "Saturno",
  "Urano",
  "Netuno",
  "Lua",
];

export const astrosDataTest = [
  // ASTROS ORIGINAIS (Sol, Terra, Marte, Júpiter, Saturno)
  {
    name: "Sol",
    category: "Estrela",
    description:
      "Estrela central do sistema solar, fonte de luz e energia para todos os planetas ao seu redor.",
    body: "O Sol é a estrela central do nosso sistema solar e a principal fonte de luz, calor e energia para a Terra e os demais planetas. Composto majoritariamente por hidrogênio e hélio, ele converte milhões de toneladas de matéria em energia a cada segundo através da fusão nuclear. Essa energia é irradiada para o espaço em forma de luz e calor, sustentando a vida na Terra e regulando o clima global. Seu enorme campo gravitacional mantém os planetas e outros corpos celestes em órbita. Embora represente apenas uma das bilhões de estrelas da Via Láctea, o Sol tem um papel único em nossa existência, sendo considerado por muitas culturas antigas como símbolo de divindade e vida.",
    image_url:
      "https://recreio.com.br/media/_versions/legacy/2020/07/03/sol-1223110_widexl.jpg",
    distance_sun: 0,
    weight: 1.989e30,
  },
  {
    name: "Terra",
    category: "Planeta",
    description:
      "Terceiro planeta do sistema solar, único conhecido por abrigar vida, com vastos oceanos e atmosfera rica.",
    body: "A Terra é o terceiro planeta a partir do Sol e o único, até o momento, onde se tem certeza da existência de vida. Apelidado de 'planeta azul' por ser coberto em cerca de 70% por água, possui uma atmosfera rica em oxigênio e nitrogênio. Sua crosta é dinâmica, com placas tectônicas que moldam continentes e causam terremotos. É também o cenário de toda a história humana, cultural e espiritual. Sua preservação é vital para a continuidade da vida.",
    image_url:
      "https://static.todamateria.com.br/upload/pl/an/planetaterra-cke.jpg",
    distance_sun: 149600000,
    weight: 5.972e24,
  },
  {
    name: "Marte",
    category: "Planeta",
    description:
      "Planeta vermelho, alvo de missões espaciais e estudos sobre vida fora da Terra.",
    body: "Marte é conhecido como o 'planeta vermelho' devido à presença de óxidos de ferro em sua superfície. Possui as maiores formações geológicas do sistema solar, como o Monte Olimpo. Já apresentou sinais de água no passado e é um dos principais candidatos a receber missões humanas no futuro.",
    image_url:
      "https://s1.static.brasilescola.uol.com.br/be/2021/11/planeta-marte.jpg",
    distance_sun: 227900000,
    weight: 6.39e23,
  },
  {
    name: "Júpiter",
    category: "Planeta",
    description:
      "Maior planeta do sistema solar, conhecido pela Grande Mancha Vermelha e seus intensos campos magnéticos.",
    body: "Júpiter é um gigante gasoso composto principalmente por hidrogênio e hélio. Sua Grande Mancha Vermelha é uma tempestade duradoura. Possui mais de 70 luas, incluindo Ganimedes e Europa. Seu intenso campo magnético e suas luas fazem dele um objeto de estudo vital na astronomia.",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
    distance_sun: 778500000,
    weight: 1.898e27,
  },
  {
    name: "Saturno",
    category: "Planeta",
    description:
      "Gigante gasoso famoso por seus anéis compostos por gelo e rochas, segundo maior planeta do sistema solar.",
    body: "Saturno é conhecido por seus anéis majestosos compostos por gelo e detritos. Sua atmosfera é composta principalmente por hidrogênio. Possui luas importantes, como Titã, e é um dos planetas mais impressionantes visualmente. Seu estudo ajuda a entender a formação do sistema solar.",
    image_url:
      "https://conteudo.imguol.com.br/c/noticias/69/2021/04/26/saturno-e-suas-luas-capa-1619445415906_v2_900x675.jpg",
    distance_sun: 1433000000,
    weight: 5.683e26,
  },

  // LUAS
  {
    name: "Titã",
    category: "Lua",
    description:
      "Maior lua de Saturno, com atmosfera espessa e lagos de metano líquido em sua superfície.",
    body: "Titã é a maior lua de Saturno e a segunda maior do sistema solar. Possui uma atmosfera densa, composta principalmente de nitrogênio, e lagos e rios de metano e etano líquidos. Acredita-se que Titã tenha um oceano subterrâneo de água, o que a torna um forte candidato à presença de vida microbiana.",
    image_url: "https://img.odcdn.com.br/wp-content/uploads/2023/09/tita-.jpg",
    distance_sun: 1433000000,
    weight: 1.3452e23,
  },
  {
    name: "Europa",
    category: "Lua",
    description:
      "Lua de Júpiter coberta por gelo, com indícios de um oceano líquido subterrâneo.",
    body: "Europa é uma das luas mais intrigantes de Júpiter. Sua superfície é composta por uma crosta de gelo que cobre um provável oceano líquido. Cientistas acreditam que esse oceano subterrâneo possa conter as condições necessárias para a vida. A superfície mostra poucas crateras, indicando atividade geológica.",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/5/54/Europa-moon.jpg",
    distance_sun: 778500000,
    weight: 4.799e22,
  },

  // COMETAS
  {
    name: "Halley",
    category: "Cometa",
    description:
      "Cometa periódico mais famoso, visível da Terra a cada 76 anos. Próxima aparição será em 2061.",
    body: "O Cometa Halley é o mais conhecido dos cometas periódicos. Visível da Terra a cada 75-76 anos, ele foi observado desde a Antiguidade. Sua última passagem foi em 1986 e voltará em 2061. É composto por gelo, poeira e rochas, e ao se aproximar do Sol, forma uma cauda brilhante.",
    image_url:
      "https://super.abril.com.br/wp-content/uploads/2019/02/cometa-halley.png?w=720&h=440&crop=1",
    distance_sun: 5240000000,
    weight: 2.2e14,
  },
  {
    name: "Hale-Bopp",
    category: "Cometa",
    description:
      "Cometa extremamente brilhante que foi visível a olho nu por mais de 18 meses em 1997.",
    body: "Hale-Bopp foi um dos cometas mais brilhantes do século XX. Descoberto em 1995, pôde ser visto a olho nu por mais de um ano e meio em 1997. Ele possui um núcleo duplo e é composto por uma mistura de rochas, poeira e gelo. Sua cauda se estende por milhões de quilômetros.",
    image_url:
      "https://antwrp.gsfc.nasa.gov/apod/image/0404/halebopp3_pacholka_big.jpg",
    distance_sun: 3700000000,
    weight: 3e13,
  },
  {
    name: "NEOWISE",
    category: "Cometa",
    description:
      "Cometa descoberto em 2020, visível a olho nu com brilho impressionante e cauda dupla.",
    body: "O cometa NEOWISE foi descoberto em março de 2020 pela missão da NASA com o mesmo nome. Ganhou notoriedade por seu brilho e visibilidade a olho nu durante o mês de julho daquele ano. Apresentava uma cauda dupla: uma de poeira e outra de íons, visível em céus escuros do hemisfério norte.",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Comet_2020_F3_%28NEOWISE%29_on_Jul_14_2020_aligned_to_stars.jpg/1200px-Comet_2020_F3_%28NEOWISE%29_on_Jul_14_2020_aligned_to_stars.jpg",
    distance_sun: 195000000,
    weight: 2e13,
  },
  {
    name: "67P/Churyumov-Gerasimenko",
    category: "Cometa",
    description:
      "Cometa visitado pela sonda Rosetta, famoso por seu formato de 'pato de borracha'.",
    body: "O cometa 67P/Churyumov-Gerasimenko foi estudado de perto pela missão Rosetta, da ESA, que o acompanhou por dois anos e enviou o módulo Philae à sua superfície. Seu formato peculiar de 'pato de borracha' atraiu atenção mundial. A missão revelou dados valiosos sobre a composição de cometas.",
    image_url:
      "https://imagenes.elpais.com/resizer/v2/7JXT4VZBIPDG4FCTUZBR3PK7GU.jpg?auth=1727f50a7bb5787b111f8ae3d7546253d935b8b6f0242a50cd118002209d8ffc&width=1960&height=1470&smart=true",
    distance_sun: 850000000,
    weight: 1e13,
  },
];
