const sql = require("mssql");
const dbConfig = require("../config/dbConf");

const checkUserCredentials = async (userName, password) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool
      .request()
      .input("userName", sql.VarChar, userName)
      .input("password", sql.VarChar, password)
      .query(
        "SELECT * FROM nguoidung WHERE user_name = @userName AND mat_khau = @password"
      );

    return result.recordset.length > 0 ? result.recordset[0] : null;
  } catch (err) {
    console.error("Database error: ", err);
    throw err;
  }
};

module.exports = { checkUserCredentials };
