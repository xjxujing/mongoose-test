const mocha = require("mocha");
const assert = require("assert"); // 自带的, 引入断言模块

const MarioChar = require("../models/mariochar");

describe("finding test", function () {
    it("查找数据", function (done) {
        MarioChar.findOne({ name: "niuniu" }).then((result) => {
            console.log("result----", result._id.toString());
            done();
        });
    });
});
