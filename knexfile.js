module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/tripspltr.db3",
      useNullAsDefault: true
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    testing: {
      client: "sqlite3",
      connection: {
        filename: "./data/test.db3"
      },
      useNullAsDefault: true,
      migrations: {
        directory: "./data/migrations"
      },
      seeds: {
        directory: "./data/seeds"
      }
    },
    useNullAsDefault: true
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      host: "localhost",
      database: "data",
      user: "jacob",
      password: "password"
    },
    migrations: {
      directory: "./src/data/migrations"
    },
    seeds: {
      directory: "./src/data/seeds/"
    }
  }
};
