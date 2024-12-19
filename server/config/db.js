const sql = require("mssql");

const config = {
  user: "sa",
  password: "123",
  server: "localhost",
  database: "Medical_Project",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("Connected to SQL Server using Windows Authentication");
    return pool;
  })
  .catch((err) => console.log("Database connection failed: ", err));

module.exports = {
  sql,
  poolPromise,
};
