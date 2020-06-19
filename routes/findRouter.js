var express = require('express');
var router = express.Router();

var file = require('../public/util/file.js')
var jsonUtils = require('../public/util/jsonUtils.js')

const {carouselJsonPath,musicJsonPath} = require('../public/util/path')

router.get('/find/carousel', function(req, res) {
    console.log('请求轮播图')
    var response = {
        "datus": 1,
        "mes": "成功",
        "data": []
    }
    file.readJson(carouselJsonPath, carousel)

    function carousel(data) {
        var result = jsonUtils.findCarousel(data)
        if (result.length > 0) {
            response.data = result
            res.json(response)
        } else {
            response.datus = 0
            response.datus.mes = '失败'
            res.json(response)
        }
    }
});

router.get('/find/music/type', function(req, res) {
    console.log('根据类型请求音乐',req.query.type)
    var response = {
        "datus": 1,
        "mes": "成功",
        "data": []
    }
    if(req.query.type<=0 || req.query.type == null){
        response.datus = 0
        response.datus.mes = '失败'
        res.json(response)
        return
    }

    file.readJson(musicJsonPath, musicType)

    function musicType(data) {
        var result = jsonUtils.findMusicByType(data,req.query.type)
        if (result.length > 0) {
            response.data = result
            res.json(response)
        } else {
            response.datus = 0
            response.datus.mes = '失败'
            res.json(response)
        }
    }
});

module.exports = router;