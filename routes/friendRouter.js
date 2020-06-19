var express = require('express');
var router = express.Router();

var file = require('../public/util/file.js')
var jsonUtils = require('../public/util/jsonUtils.js')

const {userJsonPath,shareJsonPath} = require('../public/util/path')


router.get('/friend/getFriendList', function(req, res) {
    console.log('请求好友列表')
    var response = {
        "datus": 1,
        "mes": "成功",
        "data": []
    }
    if(req.query.userId == null){
        response.datus = 0
        response.datus.mes = '失败'
        res.json(response)
    }
    file.readJson(userJsonPath, getFriendList)

    function getFriendList(data) {
        var result = jsonUtils.getFriendList(data,req.query.userId)
        var result0 = []
        if (result.length > 0) {
            for(var i=0;i<result.length;i++){
                result0.push(jsonUtils.getUserName(data,result[i]))
            }
        
            response.data = result0
            res.json(response)
        } else {
            response.datus = 0
            response.datus.mes = '失败'
            res.json(response)
        }
    }

});


//目前只实现获取个人分享
router.get('/friend/getShare', function(req, res) {
    console.log('请求个人分享')
    var response = {
        "datus": 1,
        "mes": "成功",
        "data": []
    }
    file.readJson(userJsonPath, getShare)
    

    function getShare(data) {
        var shareListId = jsonUtils.getShare(data,parseInt(req.query.userId))
        var user = jsonUtils.findSomthingById(data,parseInt(req.query.userId))
        var userName = user.name
        var result = []
        file.readJson(shareJsonPath, (d)=>{
            for(var j=0;j<shareListId.length;j++){
                var result0 = jsonUtils.getShareContain(d,shareListId[j])
                // console.log('111',result0)
                let key = 'name'
                let v = userName
                result0[key] = v
                result.push(result0)
            }
            // console.log('222',result)
            if (result.length > 0) {
                response.data = result
                res.json(response)
            } else {
                response.datus = 0
                response.mes = '失败'
                res.json(response)
            }
        })
        
        
    }

})

module.exports = router;