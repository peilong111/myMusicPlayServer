var fs = require('fs')

var path = '../../JSON/user.json'
fs.readFile(path, function (err, data) {
    if (err) {
        console.log(err);
        console.log('读取文件失败')
    } else {
        var dataS = data.toString(); //将二进制的数据转换为字符串
        dataJ = JSON.parse(dataS); //将字符串转换为json对象
        callback(dataJ)
    }
})