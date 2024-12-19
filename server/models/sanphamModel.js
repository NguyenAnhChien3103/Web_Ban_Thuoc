const { poolPromise } = require("../config/db");

class SanPhamModel {
  static async getAllSanPham() {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM sanpham");
    return result.recordset;
  }
}

module.exports = SanPhamModel;
