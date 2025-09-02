// Database configuration goes here

const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/remote-work-management';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối thành công đến cơ sở dữ liệu'))
  .catch(err => console.log('Lỗi kết nối:', err));