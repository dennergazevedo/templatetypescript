import { Sequelize } from "sequelize";

export const database = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'c10mtp3urn',
  database: 'artcopias',
});