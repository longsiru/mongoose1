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

/*var mongoose=require('./db.js');


//mongoose数据校验:用户通过mongoose给mongodb数据库增加数据的时候，对数据的合法性进行的验证

//mongoose里面定义Schema:字段类型，修饰符、默认参数 、数据校验都是为了数据库数据的一致性



//Schema，为数据库对象的集合,每个schema会映射到mongodb中的一个collection,定义Schema可以理解为表结构的定义

var UserSchema=mongoose.Schema({
    name:{
        type:String,//指定类型
        trim:true,   //修饰符         
        required:true      
    },
    sn:{
        type:String,
        index:true,  //索引.
        set(val){  //自定义修饰符
            return val;
        },

        // maxlength:20,
        // minlength:10
        // match:/^sn(.*)/ ,
        validate: function(sn) {
            return sn.length >= 10;
        }        
        
    },   
    age:{
        type:Number,
        min:0,    //用在number类型上面
        max:150
    },       
    status:{
        type:String, 
        default:'success', //默认值
        enum:['success','error']   //status的值必须在 对应的数组里面  注意枚举是用在String
    }
})


module.exports=mongoose.model('User',UserSchema,'user');

*/
