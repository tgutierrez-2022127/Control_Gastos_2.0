const { DataSource } = require('typeorm');
const { User } = require('../entities/User');
const dotenv = require('dotenv');

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: process.env.NODE_ENV === 'development',
  entities: [User],
  subscribers: [],
  migrations: [],
});

module.exports = { AppDataSource };