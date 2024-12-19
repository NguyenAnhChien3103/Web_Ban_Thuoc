const express = require("express");
const cors = require("cors");
const sanphamRoutes = require("./routes/sanphamRoutes");
const danhmucRoutes = require("./routes/danhmucRoutes");
const searchProductRoutes = require("./routes/searchProductRoutes");
const path = require("path");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const apiKey = process.env.GOOGLE_MAPS_API_KEY;
app.use("/api/sanpham", sanphamRoutes);
app.use("/api/danhmuc", danhmucRoutes);
app.use("/api/search", searchProductRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
