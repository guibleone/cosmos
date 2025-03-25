import postgres from "postgres";

const sql = postgres(process.env.POSTGRESQL_CONN!);

export default sql;
