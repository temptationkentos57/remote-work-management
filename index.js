const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Chào mừng đến với Ứng dụng Quản Lý Công Việc!');
});

app.listen(port, () => {
  console.log(`Ứng dụng đang chạy trên http://localhost:${port}`);
});