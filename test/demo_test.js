const mocha = require("mocha");
const assert = require("assert"); // 自带的, 引入断言模块

/**
 * 测试哪个数据库
 * @param 参数1 写测试哪个 参数2
 */
// 测试时对当前测试的一个描述
mocha.descirbe("demo test", function () {

    // 创建需要测试的任务
    // 参数1 任务名
    it("测试两个数的值是否相等", function () {

        // 使用断言 类似于错误捕获 try catch
        assert(2 + 3 === 5);

        // package.json 中 scripts test 修改成mocha 因为 echo 是 php 的
        // 控制台输入npm run test 谁引用了mocha就会运行谁
        // 看控制台
    });
});
