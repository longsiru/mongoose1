//在这里我们配置schema以及数据模型。

//首先引入db
var mongoose = require("./db.js");

//4.定义数据表（集合的） 映射， 字段名称必须和数据库保持一致。
var UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  //status: "number",
  //默认参数.可以自己设置，就算添加的时候没有指定也会出现默认数据。
  status: {
    type: Number, //类型
    default: 1, //默认数据
  },
});

//5.定义model操作数据库
var UserModel = mongoose.model("User", UserSchema, "user");
//export
module.exports = UserModel;
