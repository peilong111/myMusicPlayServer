// user集合


var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({    
    id: { type: Number,require: true},    
    listId: { type: Number},  //记录用户歌单id
    friendList: { type: Array},  //记录用户好友id
    headSrc: { type: String},  
    account: { type: String,require: true},  
    password: { type: String,require: true},    
    shareId: {type: Number},
    friendId: {type:Array}            
});
//导出模块
module.exports = mongoose.model('User',UserSchema,'users');//引用名 定义的表结构 表名
