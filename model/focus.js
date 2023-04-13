var mongoose = require("./db.js");

var FocusSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true, //定义 mongoose模式修饰符 去掉空格。
    index: true, //普通索引 //uniqu:true 唯一索引
    require: true, //数据校验//必须传入项。
    maxlength: 10, //string
    minlength: 1, //string
    match: /^xw(.*)/, //输入数据的时候，前面要加xw，用在string类型
    //自定义校验器。
    validate: function (title) {
      return title.lenfth >= 30;
    },
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
    default: 1, //默认值
    enum: [0, 1, 2, 3], //status的值必须在对应的数组里面，注意枚举是用在string类型上的。
    //max:9,//最大值。必须在number类型中使用
    //min：0//最小值。
  },
});

//封装自定义的方法
//静态方法，在schema中写,一定要加static
//FocusSchema.static.findByTitle=function（title，cb）{
//通过find方法获取title的数据， this关键字获取当前的model。
//this.find({"title":title}, function(err,docs){
//cb(err,docs)
//})
//}

//实例方法
//FocusSchema.methods.print=function(){
//console.log("this is 实例方法")
//conselo.log(this)  //访问实例里面加入的数据
//}

//扩展方法有两种
//静态方法：定义一个类，直接通过类.一个方法名就能使用。一定要加static

//实例方法：实例化之后才能访问，new了之后才可以。一定要加methods

//ts中的扩展方法。
//静态：static，类名访问静态方法。
//实例：new一个，让new的那个调用方法。

module.exports = mongoose.model("Focus", FocusSchema, "focus");
