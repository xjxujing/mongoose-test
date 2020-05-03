const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 规范数据格式
const MarioCharSchema = new Schema({
    name: String,
    weight: Number,
});

/**
 *  创建数据模型
 *  @param 参数1: 指定名(name) 参数2: 前面规范的数据格式
 */
const MarioChar = mongoose.model("Mario", MarioCharSchema);

// 存储
// MarioChar.save().then();

// 导出
module.exports = MarioChar;
