var express = require('express');
var router = express.Router();


var file = require('../public/util/file.js')
var jsonUtils = require('../public/util/jsonUtils.js')

const {userJsonPath,musicJsonPath} = require('../public/util/path')

router.get('/', function (req, res) {
    console.log('请求主页')
    res.render('index.html');
});

router.get('/regist', function (req, res) {
    console.log('用户注册')
    // console.log(req.query)
    var response = {
        "datus": 1,
        "mes": "注册成功",
        "data": {}
    }
    if(req.query.account == null || req.query.password == null){
        response.datus = 0
        response.mes = '注册失败，账号或密码为空'
        res.json(response)
        return
    }
    
    file.readJson(userJsonPath, regist)

    function regist(data) {
        var result = jsonUtils.findUserByAccount(data, req.query.account)
        if (Object.keys(result).length == 0) {
            var date = new Date();
            date = date.getTime(); //得到时间的13位毫秒数作为id
            var user = {
                "id": date,
                "listId": [0],
                "friendList": [],
                "headSrc": "http://106.52.163.23:3000/public/img/03.png",
                "account": req.query.account,
                "password": req.query.password,
                "shareId": []
            }
            jsonUtils.addData(data, user)
            file.writeJson(userJsonPath, data)
            response.data = user
            res.json(response)
        } else {
            response.datus = 0
            response.mes = '注册失败，账号已存在'
            res.json(response)
        }
    }

});

router.get('/login', function (req, res) {
    console.log('用户登录')
    // console.log(req.query)
    var response = {
        "datus": 1,
        "mes": "登录成功",
        "data": {}
    }
    if(req.query.account == null || req.query.password == null){
        response.datus = 0
        response.mes = '登录失败，账号或密码为空'
        res.json(response)
        return
    }

    file.readJson(userJsonPath, login)

    function login(data) {
        var result = jsonUtils.checkAccountPassword(data, req.query.account, req.query.password)
        if (Object.keys(result).length > 0) {
            response.data = result
            res.json(response)
        } else {
            response.datus = 0
            response.mes = '登录失败'
            res.json(response)
        }
    }

});

router.get('/search', function (req, res) {
    console.log('用户查找')
    var response = {
        "datus": 1,
        "mes": "查找成功",
        "data": []
    }
    if(req.query.searchText == null){
        response.datus = 0
        response.mes = '失败，searchText为空'
        res.json(response)
        return
    }
    file.readJson(musicJsonPath, search)

    function search(data) {
        var result = jsonUtils.findMusicByName(data,req.query.searchText)
        if (result.length>0) {
            response.data = result
            res.json(response)
        } else {
            response.datus = 0
            response.mes = '查找失败'
            res.json(response)
        }
    }

});

module.exports = router;