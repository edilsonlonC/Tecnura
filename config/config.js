module.exports = {
  docker: {
    database: process.env.DB_NAME || 'test',
    port: process.env.DB_PORT || '5432',
    username: process.env.DB_USER || 'dev',
    password: process.env.DB_PASSWORD || 'dev',
    host: process.env.DB_HOST || 'coffee_db'

  },
  dev: {
    database: process.env.DB_NAME || 'test',
    port: process.env.DB_PORT || '5432',
    username: process.env.DB_USER || 'dev2',
    password: process.env.DB_PASSWORD || 'dev2',
    host: process.env.DB_HOST || 'localhost'

  }
}
