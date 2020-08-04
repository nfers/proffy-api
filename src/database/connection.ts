import knex from 'knex';
import path from 'path'

const db = knex({
 client: 'sqlite3',
 connection: {
  filename: path.resolve(__dirname, 'db', 'db-proffy.sqlite3')
 },
 useNullAsDefault: true,
});

export default db;