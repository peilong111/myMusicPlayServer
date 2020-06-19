var fs = require('fs');


/**
 * 将json文件读出来
 * @param {string} path 路径
 * @param {function} callback 回调函数
 */
function readJson(path, callback) {
    //现将json文件读出来
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
}
/**
 * 现将json文件写进去
 * data参数为Json对象
 * @param {string} path 保存路径
 * @param {object} json 需要保存的json数据
 */
function writeJson(path, json) {
    //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
    var str = JSON.stringify(json);
    fs.writeFile(path, str, function (err) {
        if (err) {
            console.error('文件存储失败', err);
        } else {
            console.log('文件存储成功')
        }
    })
}

//方法导出
module.exports = {
    readJson,
    writeJson
}

