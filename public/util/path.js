var path = require('path')

const path0 = path.resolve(__dirname, '..')
const path1 = path.resolve(path0, '..')


const userJsonPath = path.join(path1,'/JSON/user.json')
const carouselJsonPath = path.join(path1,'/JSON/carousel.json')
const musicJsonPath = path.join(path1,'/JSON/music.json')
const shareJsonPath = path.join(path1,'/JSON/share.json')
const userMusicListJsonPath = path.join(path1,'/JSON/userMusicList.json')


module.exports = {
    userJsonPath,
    carouselJsonPath,
    musicJsonPath,
    shareJsonPath,
    userMusicListJsonPath
}