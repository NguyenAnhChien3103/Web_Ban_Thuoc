const express = require("express");
const DanhMucController = require("../controllers/danhmucController");

const router = express.Router();

router.get("/", DanhMucController.getAllDanhMuc);

module.exports = router;
