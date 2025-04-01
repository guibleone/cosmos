import chalk from "chalk";
import sql from "./db";

const astrosData = [
  {
    name: "Sol",
    category: "Estrela",
    description: "A estrela central do nosso sistema solar",
    image_url:
      "https://recreio.com.br/media/_versions/legacy/2020/07/03/sol-1223110_widexl.jpg",
    distance_sun: 0,
    weight: 1.989e30,
  },
  {
    name: "Terra",
    category: "Planeta",
    description: "O planeta azul, lar da humanidade",
    image_url:
      "https://static.todamateria.com.br/upload/pl/an/planetaterra-cke.jpg",
    distance_sun: 149600000,
    weight: 5.972e24,
  },
  {
    name: "Marte",
    category: "Planeta",
    description:
      "O planeta vermelho, com potencial para futuras missões de exploração",
    image_url:
      "https://s1.static.brasilescola.uol.com.br/be/2021/11/planeta-marte.jpg",
    distance_sun: 227900000,
    weight: 6.39e23,
  },
  {
    name: "Júpiter",
    category: "Planeta",
    description:
      "O maior planeta do sistema solar, famoso por sua Grande Mancha Vermelha",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
    distance_sun: 778500000,
    weight: 1.898e27,
  },
  {
    name: "Saturno",
    category: "Planeta",
    description:
      "Conhecido pelos seus belos anéis, é o segundo maior planeta do sistema solar",
    image_url:
      "https://conteudo.imguol.com.br/c/noticias/69/2021/04/26/saturno-e-suas-luas-capa-1619445415906_v2_900x675.jpg",
    distance_sun: 1433000000,
    weight: 5.683e26,
  },
];

const selectFunction = process.argv[2];
if (!selectFunction) {
  console.error(
    "Insira uma função como argumento. Opções: [seed drop, seed create, seed insert]"
  );
  process.exit(1);
}

async function dropTables() {
  try {
    await sql`DROP TABLE IF EXISTS astros`;
    console.log(chalk.green("Table (Astros) droped successfully."));
  } catch (error) {
    throw error;
  }
}

async function createTables() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS astros (
        id_astro SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        category VARCHAR(50) NOT NULL,
        description VARCHAR(255),
        image_url VARCHAR(255),
        distance_sun BIGINT,
        weight DOUBLE PRECISION,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW(),
        CONSTRAINT astros_name_UN UNIQUE(name)
      )
      `;
    await sql`CREATE EXTENSION IF NOT EXISTS unaccent;`;
    console.log(chalk.green("Table (Astros) created successfully."));
  } catch (error) {
    throw error;
  }
}

async function insertData() {
  try {
    await sql`INSERT INTO astros ${sql(astrosData)}`;
    console.log(chalk.green("Data inserted into (Astros) successfully."));
  } catch (error) {
    throw error;
  }
}

switch (selectFunction) {
  case "drop": {
    dropTables();
    break;
  }
  case "create": {
    createTables();
    break;
  }
  case "insert": {
    insertData();
    break;
  }
  default: {
    console.error(
      "Comando inserido inválido. Opções: [seed drop, seed create, seed insert]"
    );
    process.exit(1);
  }
}
