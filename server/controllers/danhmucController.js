const DanhMucModel = require("../models/danhmucModel");

class DanhMucController {
  static async getAllDanhMuc(req, res) {
    const categories = await DanhMucModel.getAllDanhMuc();
    res.json(categories);
  }
}

module.exports = DanhMucController;
