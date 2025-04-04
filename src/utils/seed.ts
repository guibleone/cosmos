import chalk from "chalk";
import sql from "./db";
import { astrosDataTest } from "./consts";

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
        body TEXT,
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
    await sql`INSERT INTO astros ${sql(astrosDataTest)}`;
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
