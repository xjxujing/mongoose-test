// 引入模块
var mongoose = require("mongoose");

// 连接MongonDB  test是数据库名 mongodb是协议头
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true, useUnifiedTopology: true });

// 测试数据库是否连接成功  once相当于触发事件
mongoose.connection
    .once("open", function () {
        console.log("数据库连接成功!");
    })
    .on("error", function (error) {
        console.log("连接失败: ", error);
    });
