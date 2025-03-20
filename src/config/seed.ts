import chalk from "chalk";
import sql from "./db";

const astrosData = [
  {
    name: "Sol",
    category: "Estrela",
    description: "A estrela central do nosso sistema solar",
    image_url: "http://exemplo.com/sol.jpg",
    distance_sun: 0,
    weight: 1.989e30,
  },
  {
    name: "Terra",
    category: "Planeta",
    description: "O planeta azul, lar da humanidade",
    image_url: "http://exemplo.com/terra.jpg",
    distance_sun: 149600000,
    weight: 5.972e24,
  },
  {
    name: "Marte",
    category: "Planeta",
    description:
      "O planeta vermelho, com potencial para futuras missões de exploração",
    image_url: "http://exemplo.com/marte.jpg",
    distance_sun: 227900000,
    weight: 6.39e23,
  },
  {
    name: "Júpiter",
    category: "Planeta",
    description:
      "O maior planeta do sistema solar, famoso por sua Grande Mancha Vermelha",
    image_url: "http://exemplo.com/jupiter.jpg",
    distance_sun: 778500000,
    weight: 1.898e27,
  },
  {
    name: "Saturno",
    category: "Planeta",
    description:
      "Conhecido pelos seus belos anéis, é o segundo maior planeta do sistema solar",
    image_url: "http://exemplo.com/saturno.jpg",
    distance_sun: 1433000000,
    weight: 5.683e26,
  },
];

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
        image_url VARCHAR(100),
        distance_sun BIGINT,
        weight DOUBLE PRECISION,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );
      `;
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

//dropTables();
//createTables();
insertData();
