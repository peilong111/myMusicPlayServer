//对user的相关操作
// id,listId, friendList, headSrc,account,password,shareId,friendId 

var User = require('./user')


/**
 * 处理用户登录
 * 登录错误：返回status = 0，message = '密码或者账号错误'
 * 登录成功：status = 1，message = '登录成功',userId = ret.id
 */

var user = new User({
	username: 'admin',
	password: '123456',
	email: 'xiaochen@qq.com'
});

user.save(function(err, ret) {
	if (err) {
		console.log('保存失败');
	} else {
		console.log('保存成功');
		console.log(ret);
	}
});
// User.find({
//     id: 3
// },(err,ret)=>{
//     if(err){}
//     else{
//         console.log('第1次找到')
//         User.find({id:4564},(err,ret)=>{
//             if(err){console.log(err)}
//             else{console.log(ret)}
//         })
//     }
// })

function login(req, res) {
    var result = []
    User.find({
        account: req.query.account,
        password: req.query.password
    }, function (err, ret) {
        if (err) {
            result.status = 0
            result.message = '密码或者账号错误'
            res.send(result)
        } else {
            result.status = 1
            result.message = '登录成功'
            result.userId = ret.id
            res.send(result)
        }
    })
}

/**
 * 处理用户登录
 * 登录错误：返回status = 0，message = '密码或者账号错误'
 * 登录成功：status = 1，message = '登录成功',userId = ret.id
 */
function regist(res) {
    var result = []
    User.count.then((count) => {
        var user = new User({
            id: count,
            account: mes.account,
            password: mes.password,
        });
        user.save(function (err, res) {
            if (err) {
                result.status = 0
                result.message = '注册失败'
                res.send(result)
            } else {
                result.status = 1
                result.message = '注册成功'
                res.send(result)
            }
        });
    });




}

module.exports = {
    login,
    regist
}