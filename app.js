// //1.mongoose默认参数。1.mongoose模块化，3.mongoose性能疑问

// //1.npm init --yes   —生成package.json的配置文件
// //2.安装mongoose -- npm install mongoose --save //npm i --save-dev nodemon
// //package,json: "scripts": {   "devStart": "nodemon app.js" }
// //3.引用mongoose,连接数据库。
// const mongoose = require("mongoose");
// mongoose
//   .connect("mongodb://127.0.0.1:27017/sayo", { useNewUrlParser: true })
//   .then(() => {
//     console.log("seccessfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //4.定义数据表（集合的） 映射， 字段名称必须和数据库保持一致。
// var UserSchema = mongoose.Schema({
//   name: String,
//   age: Number,
//   //status: "number",
//   //默认参数.可以自己设置，就算添加的时候没有指定也会出现默认数据。
//   status: {
//     type: Number, //类型
//     default: 1, //默认数据
//   },
// });

// //5.定义model操作数据库
// var UserModel = mongoose.model("User", UserSchema);

// //数据的查找
// UserModel.find({})
//   .then((doc) => console.log(doc))
//   .catch((err) => console.log(err));

// //数据的增加
// var user = new UserModel({
//   name: "xiaolong",
//   age: 21,
//   // 没有写参数status:的话，会出现默认参数：__v: 0
//   //多写一个没有的参数的话？
//   //status: 1,
//   //gender: "male", //还是出现默认参数：__v: 0
//   //上面设置了status: {type: Number,  //类型default: 1,  //默认数据}, 所以没有写结果也会是tatus: 1,
// });
// user
//   .save()
//   .then(() => console("seccessfully"))
//   .catch((err) => console.log(err));

//模块化之后
//引入UserModel 操作数据库
console.time("user"); //UserModel import需要的时间  长
var UserModel = require("./model/user.js");
console.timeEnd("user");

//要操作news，就引入NewsSchema
console.time("news"); //NewsModel import需要的时间  短  底层已经自动优化了。（单类模型），所以不用担心性能问题。
var NewsModel = require("./model/news.js");
console.timeEnd("news");

UserModel.find()
  .then((docs) => console.log(docs))
  .catch((err) => console.log(err));

var user = new UserModel({
  name: "sung",
  age: 22,
});

user
  .save()
  .then((docs) => console.log(docs))
  .catch((err) => console.log(err));

NewsModel.find()
  .then((docs) => console.log(docs))
  .catch((err) => console.log(err));
