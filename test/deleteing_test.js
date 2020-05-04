const mocha = require("mocha");
const assert = require("assert"); // 自带的, 引入断言模块

const MarioChar = require("../models/mariochar");
let char;

describe("saving test", function () {

    it("deleting data from db", function () {

        // char.remove 删除某一条数据
        // MarioChar.remove 删除整段数据
        
        MarioChar.findOneAndRemove({ name: "niuniu" }).then((result) => {
            assert(result === null);
        });
    });
});
