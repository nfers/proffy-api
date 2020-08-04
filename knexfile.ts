import path from 'path';

module.exports = {
 client: 'sqlite3',
 connection: {
  filename: path.resolve(__dirname, 'src', 'database', 'db', 'db-proffy.sqlite3')
 },
 migrations: {
  directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  tableName: 'knex_migrations'
 },
 useNullAsDefault: true
};

