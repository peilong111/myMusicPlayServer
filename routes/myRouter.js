var express = require('express');
var router = express.Router();

var file = require('../public/util/file.js')
var jsonUtils = require('../public/util/jsonUtils.js')


const {userJsonPath,userMusicListJsonPath,musicJsonPath} = require('../public/util/path')

router.get('/my/getMyMusicList', function(req, res) {
    console.log('请求歌单列表')
    var response = {
        "datus": 1,
        "mes": "成功",
        "data": []
    }
    if(!req.query.id){
        response.datus = 0
        response.mes = '失败'
        console.log('出错')
        res.json(response)
        return
    }
    file.readJson(userJsonPath, first)

    function first(data) {
        var result = jsonUtils.findUserById(data, req.query.id)
        if (Object.keys(result).length != 0) {
            file.readJson(userMusicListJsonPath, data => {
                var result0 = []
                for(var j = 0;j<result.listId.length;j++){
                    result0.push(jsonUtils.findSomthingById(data,result.listId[j]))
                }
                response.data = result0
                res.json(response)
            })
        } else {
            response.datus = 0
            response.mes = '失败'
            res.json(response)
        }
    }
});

router.get('/my/getMusicList', function(req, res) {
    console.log('请求歌单歌曲')
    var response = {
        "datus": 1,
        "mes": "成功",
        "data": []
    }
    if(req.query.musicId.length ==0 ||req.query.musicId == null){
        response.datus = 0
        response.mes = '失败'
        res.json(response)
        return
    }
    file.readJson(musicJsonPath, findMusic)

    function findMusic(data) {
        var result = []
        for(var i=0;i<req.query.musicId.length;i++){
            result.push(jsonUtils.findSomthingById(data, req.query.musicId[i]))
        }
        if (result.length != 0) {
            response.data = result
            res.json(response)
            
        } else {
            response.datus = 0
            response.mes = '失败'
            res.json(response)
        }
    }
});


router.get('/my/newList', function(req, res) {
    console.log('新建歌单')
    var response = {
        "datus": 1,
        "mes": "成功",
        "data": []
    }
    file.readJson(userMusicListJsonPath, first)

    function first(data) {
        var list = {
            "id": new Date().getTime(),
            "name": req.query.name,
            "musicId": []
        }

        jsonUtils.addData(data, list)
        file.writeJson(userMusicListJsonPath,data)

        file.readJson(userJsonPath, data => {
            for(var j = 0;j<data.data.length;j++){
                if(data.data[j].id == req.query.userId){
                    data.data[j].listId.push(list.id)
                    break
                }
            }
            file.writeJson(userJsonPath,data)
        })
        response.data = list
        res.json(response)
    }
});

module.exports = router;