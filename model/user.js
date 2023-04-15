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

var UserModel = require("./model/user.js");

var user = new UserModel({
  name: "赵四",
  sn: "sn12232421433",
  age: 30,
  status: "error",
});
user.save(function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("成功");
});

// UserModel.findBySn('123456781',function(){})

/*
        UserModel.findBySn('123456782',function(err,docs){

            if(err){

                console.log(err);

                return;
            }
            console.log(docs)
        })
    */

/*
        var user = new UserModel({
            name: '赵六',
            sn:'123456781',
            age: 29
        });


        user.print();   //自定义的实例方法
    */
