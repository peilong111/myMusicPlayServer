// 引入express
var express = require('express');
var bodyParser = require('body-parser')
// 通过第三方中间件cors，来解决前端和自己的服务器之间的跨域问题。
var cors = require('cors')

var router = require('./routes/router');
var indexRouter = require('./routes/indexRouter')
var findRouter = require('./routes/findRouter')
var friendRouter = require('./routes/friendRouter')
var myRouter = require('./routes/myRouter')
// 1. 创建app
var app = express();

app.use(cors())
// 配置body-parser
// 只要加入这个配置，则在req请求对象上会多出来一个属性：body
// 也就是说可以直接通过req.body来获取表单post请求数据
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// 开放静态资源
// 1.当以/public/开头的时候，去./public/目录中找对应资源
app.use('/public/',express.static('./public/')); 
app.use(router)
app.use(indexRouter)
app.use(findRouter)
app.use(friendRouter)
app.use(myRouter)

app.all('*', function(req, res, next) {
    console.log(req.method);
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-type');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
    res.header('Access-Control-Max-Age',1728000);//预请求缓存20天
    next();  
});

//设置跨域访问
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });


app.listen(3000,function(){
    console.log('express app is runing...');
})