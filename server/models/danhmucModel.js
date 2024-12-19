const { poolPromise } = require("../config/db");

class DanhMucModel {
  static async getAllDanhMuc() {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM danhmuc");
    return result.recordset;
  }
}

module.exports = DanhMucModel;
