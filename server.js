const app = require('./app');
const port = 3000;

app.listen(port, () => {
  console.log(`Máy chủ đang chạy trên http://localhost:${port}`);
});