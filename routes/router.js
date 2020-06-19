// Express专门提供了一种更好的方式
// 专门用来提供路由的
var express = require('express');
// 1 创建一个路由容器
var router = express.Router();
// 2 把路由都挂载到路由容器中

// router.get('/students', function(req, res) {
//     // res.send('hello world');
//     // readFile的第二个参数是可选的，传入utf8就是告诉他把读取到的文件直接按照utf8编码，直接转成我们认识的字符
//     // 除了这样来转换，也可以通过data.toString（）来转换
//     fs.readFile('./db.json', 'utf8', function(err, data) {
//         if (err) {
//             return res.status(500).send('Server error.')
//         }
//         // 读取到的文件数据是string类型的数据
//         // console.log(data);
//         // 从文件中读取到的数据一定是字符串，所以一定要手动转换成对象
//         var students = JSON.parse(data).students;
//         res.render('index.html', {
//             // 读取文件数据
//             students:students
//         })
//     })
// });

// router.get('/students/new',function(req,res){
//     res.render('new.html')
// });

// router.get('/1',function(req,res){
//     res.send('1')
// });

// router.get('/search',function(req,res){
//     console.log(req.query)
//     // res.send()
// });

// router.get('/students/delete',function(req,res){
    
// });

// 3 把router导出
module.exports = router;