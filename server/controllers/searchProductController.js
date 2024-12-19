const searchProductModel = require("../models/searchProductModel");

exports.searchProducts = async (req, res) => {
  try {
    const { keyword } = req.query;
    const results = await searchProductModel.searchProducts(keyword);
    res.status(200).json({ success: true, data: results });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
