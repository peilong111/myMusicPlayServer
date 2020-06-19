// music集合


var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({    
    id: { type: Number,require: true},    
    src: { type: String,require: true},  
    name: { type: String},  
    musicType: { type: Array},  
    singer: { type: String}               
});
//导出模块
module.exports = mongoose.model('Music',UserSchema,'Musics');//引用名 定义的表结构 表名