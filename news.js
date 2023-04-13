var NewsModel = require("./model/news.js");

//增加数据
var news = new NewsModel({
  title: "   new333   ",
  author: "",
  pic: "pic", //url地址的话，有的会加http，有的加了，但是我们统一要有http。
  content: "news333news333news333",
});
news.content = "content";
news
  .save()
  .then(() =>
    NewsModel.find()
      .then((docs) => console.log(docs))
      .catch((err) => console.log(err))
  )
  .catch((err) => console.log(err));
