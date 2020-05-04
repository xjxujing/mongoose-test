const mocha = require("mocha");
const assert = require("assert"); // 自带的, 引入断言模块

const MarioChar = require("../models/mariochar");

/**
 * 测试哪个数据库
 * @param 参数1 写测试哪个 参数2
 */
// 测试时对当前测试的一个描述
describe("saving test", function () {
    // 创建需要测试的任务
    // 参数1 任务名
    it("数据存储成功", function () {
        // 准备需要存储的数据
        let char = new MarioChar({
            name: "Mario",
        });

        // 存储数据
        char.save().then(function (result) {
            // 注意connection.js加一句Promise
            assert(result.isNew === false);
        });
    });
});
