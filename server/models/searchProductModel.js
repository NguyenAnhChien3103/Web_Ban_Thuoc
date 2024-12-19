const db = require("../config/db");
const normalizeText = require("../utils/normalizeText.js");

exports.searchProducts = async (keyword) => {
  const normalizedKeyword = normalizeText(keyword);
  const query = `
        SELECT sp.sanpham_id, sp.ten_san_pham, sp.gia_san_pham, sp.hsd_san_pham, sp.hinh_anh, dm.ten_danh_muc
        FROM sanpham sp
        JOIN danhmuc dm ON sp.danhmuc_id = dm.danhmuc_id
        WHERE 
            normalizeText(sp.ten_san_pham) LIKE ? 
            OR normalizeText(dm.ten_danh_muc) LIKE ?
    `;

  const values = [`%${normalizedKeyword}%`, `%${normalizedKeyword}%`];
  const [results] = await db.execute(query, values);

  return results;
};
