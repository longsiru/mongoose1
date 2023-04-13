var mongoose = require("./db.js");

var NewsSchema = mongoose.Schema({
  title: "string", //默认参数
  auther: String,
  pic: String,
  content: String,
  status: {
    typr: Number,
    //default: 1,
  },
});

module.exports = mongoose.model("News", NewsSchema, "news");
