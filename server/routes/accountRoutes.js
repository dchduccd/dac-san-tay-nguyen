const express = require("express");
const { getDB } = require("../db");

const router = express.Router();

router.post("/register", async function (req, res) {
  try {
    const { fullName, email, password } = req.body;

    // Kiểm tra dữ liệu phía server.
    if (!fullName || fullName.trim().length < 3) {
      return res.status(400).json({
        message: "Họ tên không hợp lệ."
      });
    }

    if (!email || !email.includes("@")) {
      return res.status(400).json({
        message: "Email không hợp lệ."
      });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({
        message: "Mật khẩu phải có ít nhất 6 ký tự."
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const db = getDB();
    const accounts = db.collection("accounts");

    // Kiểm tra email đã tồn tại trong CSDL.
    const existingAccount = await accounts.findOne({
      email: normalizedEmail
    });

    if (existingAccount) {
      return res.status(409).json({
        message: "Email này đã được sử dụng."
      });
    }

    const newAccount = {
      fullName: fullName.trim(),
      email: normalizedEmail,
      password,
      role: "customer",
      createdAt: new Date()
    };

    await accounts.insertOne(newAccount);

    return res.status(201).json({
      message: "Đăng ký tài khoản thành công."
    });
  } catch (error) {
    // Trường hợp email bị trùng do unique index trong lúc ghi.
    if (error && error.code === 11000) {
      return res.status(409).json({
        message: "Email này đã được sử dụng."
      });
    }

    console.error(error);
    return res.status(500).json({
      message: "Lỗi server khi đăng ký tài khoản."
    });
  }
});

module.exports = router;
