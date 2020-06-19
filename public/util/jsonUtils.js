/*******************************所有data的相关处理******************************* */

/**
 * 往json中的data数据添加内容
 * @param {object} json json数据
 * @param {object} adddata 添加内容
 */
function addData(json,adddata) {
    json.data.push(adddata)
    json.total = json.data.length
}

/**
 * 往json中的data数据删除内容
 * @param {object} json json数据
 * @param {object} id 添加内容的id
 */
function deletData(json,id) {
    for(var i = 0; i < json.data.length;i++){
        if(id == json.data[i].id){
            person.data.splice(i,1);
        }
    }
    json.total = json.data.length;
}

/**
 * 根据id对象
 * 返回用户对象
 * 返回{}查找失败
 * @param {object} json json数据
 * @param {string} id id
 */
function findSomthingById(json,id){
    for(var i=0;i<json.data.length;i++){
        if(id == json.data[i].id) return json.data[i]
    }
    return {}
}


/*******************************user的相关处理******************************* */
/**
 * 根据用户id查找用户的好友
 * @param {object} json json数据
 * @param {number} userId 用户id
 */
function getFriendList(json,userId) {
    var result = []
    for(var i=0;i<json.data.length;i++){
        if(userId == json.data[i].id){
            result = json.data[i].friendList
            return result
        }
    }
    return result
}

/**
 * 根据用户id查找用户名
 * @param {*} json 
 * @param {number} userId 用户id
 */
function getUserName(json,userId) {
    var result = ""
    for(var i=0;i<json.data.length;i++){
        if(userId == json.data[i].id){
            result = json.data[i].name
            return result
        }
    }
    return result
}

/**
 * 添加好友
 * 增加friendList
 * friendList记录了好友的id
 * @param {object} json json数据
 * @param {number} userId 用户id
 * @param {number} friendId 好友id
 */
function addFriendList(json,userId,friendId) {
    for(var i = 0; i < json.data.length;i++){
        if(userId == json.data[i].id){
            //unshift() 方法将把它的参数插入 arrayObject 的头部，不创建新的数组，而是直接修改原有的数组。push头插
            json.data[i].friendList.push(friendId)
        }
    }
}

/**
 * 删除好友
 * 删除friendList
 * friendList记录了好友的id
 * @param {object} json json数据
 * @param {number} userId 用户id
 * @param {number} friendId 好友id
 */
function deletFriendList(json,userId,friendId) {
    for(var i = 0; i < json.data.length;i++){
        if(userId == json.data[i].id){
            for(var j = 0;j<json.data[i].friendList.length;j++){
                if(friendId == json.data[i].friendList[j]) 
                {
                    json.data[i].friendList.splice(j,1)
                    break
                }
            }
            break
        }
    }
}

/**
 * 根据账号查找用户
 * 返回用户对象
 * 返回{}查找失败
 * @param {object} json json数据
 * @param {string} userName 用户名
 */
function findUserByAccount(json,account){
    for(var i=0;i<json.data.length;i++){
        if(account == json.data[i].account) return json.data[i]
    }
    return {}
}

/**
 * 根据id查找用户
 * 返回用户对象
 * 返回{}查找失败
 * @param {object} json json数据
 * @param {string} id 用户id
 */
function findUserById(json,id){
    for(var i=0;i<json.data.length;i++){
        if(id == json.data[i].id) return json.data[i]
    }
    return {}
}

/**
 * 验证账号密码
 * 验证通过返回用户对象
 * 验证失败返回{}
 * @param {object} json json数据
 * @param {string} account 账号
 * @param {string} password 密码
 */
function checkAccountPassword(json,account,password){
    for(var i=0;i<json.data.length;i++){
        if(account == json.data[i].account) {
            if(password == json.data[i].password)
            return json.data[i]
        }
    }
    return {}
}

/**
 * 分享
 * 增加shareId
 * shareId记录了分享信息的id
 * @param {object} json json数据
 * @param {number} userId 用户id
 */
function addShareId(json,userId) {
    for(var i = 0; i < json.data.length;i++){
        if(userId == json.data[i].id){
            //unshift() 方法将把它的参数插入 arrayObject 的头部，不创建新的数组，而是直接修改原有的数组。push头插
            json.data[i].shareId.push(friendId)
        }
    }
}

/**
 * 删除分享
 * 删除shareId
 * shareId记录了分享信息的id
 * @param {object} json json数据
 * @param {number} userId 用户id
 * @param {number} shareId 分享内容的id
 */
function deletShareId(json,userId,shareId) {
    for(var i = 0; i < json.data.length;i++){
        if(userId == json.data[i].id){
            for(var j = 0;j<json.data[i].shareId.length;j++){
                if(shareId == json.data[i].shareId[j]) 
                {
                    json.data[i].shareId.splice(j,1)
                    break
                }
            }
            break
        }
    }
}

/**
 * 根据用户id返回用户分享id数组
 * @param {object} json 
 * @param {number} userId 用户id
 */
function getShare(json,userId){
    for(var i = 0; i < json.data.length;i++){
        if(userId == json.data[i].id){
            return json.data[i].shareId
        }
    }
    return []
}

/*******************************share的相关处理******************************* */

/**
 * 根据id查找分享内容
 * @param {*} json 
 * @param {number} id 分享id
 */
function getShareContain(json,id) {
    for(var i=0;i<json.data.length;i++){
        if(id == json.data[i].id){
            return json.data[i]
        }
    }
    return {}
} 

/*******************************music的相关处理******************************* */
/**
 * 根据歌名查找歌曲
 * @param {object} json json数据
 * @param {string} name 歌名
 */
function findMusicByName(json,name) {
    var result = []
    for(var i=0;i<json.data.length;i++){
        if(name == json.data[i].name) {
            result.push(json.data[i])
        }
    }
    return result
}

/**
 * 根据歌曲类型查找歌曲
 * @param {object} json json数据
 * @param {string} type 类型
 */
function findMusicByType(json,type) {
    var result = []
    for(var i=0;i<json.data.length;i++){
        for(var j=0;j<json.data[i].musicType.length;j++){
            if(type === json.data[i].musicType[j])
            result.push(json.data[i])
        }
    }
    return result
}

/*******************************carousel的相关处理******************************* */

/**
 * 查找轮播图路径数组
 * @param {object} json json数据
 */
function findCarousel(json) {
    var result = json.data
    return result
}


/*******************************userMusicList的相关处理******************************* */
/**
 * 添加歌曲到歌单
 * 增加musicId
 * @param {object} json json数据
 * @param {number} musicListId 音乐列表id
 * @param {number} musicId 音乐id
 */
function addMusicId(json,musicListId,musicId) {
    for(var i = 0; i < json.data.length;i++){
        if(musicListId == json.data[i].id){
            //unshift() 方法将把它的参数插入 arrayObject 的头部，不创建新的数组，而是直接修改原有的数组。push头插
            json.data[i].musicId.push(musicId)
        }
    }
}

/**
 * 删除歌单歌曲
 * 删除musicId
 *  @param {object} json json数据
 * @param {number} musicListId 音乐列表id
 * @param {number} musicId 音乐id
 */
function deletMusicId(json,musicListId,musicId) {
    for(var i = 0; i < json.data.length;i++){
        if(musicListId == json.data[i].id){
            for(var j = 0;j<json.data[i].musicId.length;j++){
                if(musicId == json.data[i].musicId[j]) 
                {
                    json.data[i].musicId.splice(j,1)
                    break
                }
            }
            break
        }
    }
}


//方法导出
module.exports = {
    addData,
    deletData,
    addFriendList,
    deletFriendList,
    addShareId,
    deletShareId,
    addMusicId,
    deletMusicId,
    findUserByAccount,
    checkAccountPassword,
    findMusicByName,
    findMusicByType,
    findCarousel,
    getFriendList,
    getUserName,
    getShare,
    getShareContain,
    findUserById,
    findSomthingById

}