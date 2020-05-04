const mocha = require("mocha");
const assert = require("assert"); // 自带的, 引入断言模块

const MarioChar = require("../models/mariochar");
let char;

describe("saving test", function () {
    it("数据存储成功", function () {
        // 准备需要存储的数据
        char = new MarioChar({
            name: "money",
        });

        // 存储数据
        char.save().then(function (result) {
            // 注意connection.js加一句Promise
            assert(result.isNew === false);
        });
    });

    it("finding data by id", function (done) {
        MarioChar.findOne({ _id: char._id }).then((result) => {
            console.log("by id----", result);
            done();
        });
    });
});
