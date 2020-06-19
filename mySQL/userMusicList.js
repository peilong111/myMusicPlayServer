//


var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({    
    id: { type: Number,require: true},    
    name: { type: String}, 
    musicId: {type:Array}          
});
//导出模块
module.exports = mongoose.model('userMusicList',UserSchema,'userMusicLists');//引用名 定义的表结构 表名