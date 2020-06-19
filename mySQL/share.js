//


var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({    
    id: { type: Number,require: true},    
    time: { type: Date}, 
    shareText: {type:String},
    shareImg: {type: Array},
    shareVideo: {type:String}          
});
//导出模块
module.exports = mongoose.model('Share',UserSchema,'Shares');//引用名 定义的表结构 表名