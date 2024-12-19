const SanPhamModel = require("../models/sanphamModel");

class SanPhamController {
  static async getAllSanPham(req, res) {
    const products = await SanPhamModel.getAllSanPham();
    res.json(products);
  }
}

module.exports = SanPhamController;
