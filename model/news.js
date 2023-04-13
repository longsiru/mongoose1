var mongoose = require("./db.js");

var NewsSchema = mongoose.Schema({
  //title: "string", //默认参数
  title: {
    type: String,
    trim: true, //定义 mongoose模式修饰符 去掉空格。
  },
  auther: String,
  pic: String,
  content: String,
  status: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("News", NewsSchema, "news");
