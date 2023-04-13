var FocusModel = require("./model/focus.js");

//增加数据
var focus = new FocusModel({
  title: "   new333   ",
  pic: "http://www.xxx.com/x.png", //url地址的话，有的会加http，有的加了，但是我们统一要有http。
  redirect: "www.baidu.com",
});
focus
  .save()
  .then(() =>
    FocusModel.find()
      .then((docs) => console.log(docs))
      .catch((err) => console.log(err))
  )
  .catch((err) => console.log(err));
