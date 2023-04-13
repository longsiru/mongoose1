//2.模块化
//db.js的任务只有连接数据库

//mongoose默认参数。mongoose模块化，mongoose性能疑问

//1.npm init --yes   —生成package.json的配置文件
//2.安装mongoose -- npm install mongoose --save //npm i --save-dev nodemon
//package,json: "scripts": {   "devStart": "nodemon app.js" }
//3.引用mongoose,连接数据库。
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/sayo", { useNewUrlParser: true })
  .then(() => {
    console.log("seccessfully");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
