const express = require("express");
const SanPhamController = require("../controllers/sanphamController");

const router = express.Router();

router.get("/", SanPhamController.getAllSanPham);

module.exports = router;
