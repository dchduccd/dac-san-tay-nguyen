const express = require("express");
const path = require("path");
const { connectDB } = require("./db");
const accountRoutes = require("./routes/accountRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cho phép server phục vụ luôn giao diện đặc sản Tây Nguyên.
app.use(express.static(path.join(__dirname, "..")));

app.use("/api/account", accountRoutes);

app.get("/api/health", function (req, res) {
  res.json({ message: "Server đang hoạt động." });
});

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, function () {
      console.log(`Server chạy tại http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Không thể khởi động server:", error.message);
    process.exit(1);
  }
}

startServer();
