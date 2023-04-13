var mongoose = require("./db.js");

var FocusSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true, //定义 mongoose模式修饰符 去掉空格。
  },
  pic: String,
  //redirect: String,
  //用set来自定义修饰符。
  //get是调用的时候，运行我们的get
  redirect: {
    type: String,
    set(params) {
      //增加数据的时候对redirect字段进行处理。//param可以获取redirect的值,返回的数据就是redirect在数据库实际保存的值。
      if (!params) {
        return "";
      } else {
        if (params.indexOf("http://") != 0 && params.indexOf("https://") != 0) {
          return "http://" + params; //实际保存：http://www.baidu.com
        }
        return params;
      }
    },
  },
  status: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Focus", FocusSchema, "focus");
