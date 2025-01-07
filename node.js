const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// 使用 body-parser 解析 JSON
app.use(bodyParser.json());

// 處理表單資料
app.post("/submit", (req, res) => {
  const { name, email } = req.body;

  // 在這裡可以將資料存入資料庫
  console.log(`接收到的資料：姓名=${name}, 電子郵件=${email}`);

  res.json({ message: "資料提交成功！" });
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`伺服器運行於 http://localhost:${port}`);
});
