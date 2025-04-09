import "dotenv/config";
import postgres from "postgres";

const sql = postgres({
  host: process.env.DB_HOST,
  port: 5432,
  database: "cosmos",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD ? process.env.DB_PASSWORD : "",
});

export default sql;
