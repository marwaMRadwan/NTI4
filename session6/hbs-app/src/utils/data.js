const request = require('request')
const albumsApi = 'https://jsonplaceholder.typicode.com/albums'

const getAlbums = (callback)=>{
    request({url:albumsApi, json:true}, (err, albumsData)=>{
        if(err) callback(err, undefined)
        else callback(undefined, albumsData)
    })
}

const a = 'test'
const services = [
    {img:'/images/1.jpg', title:'service 1', content: 'content 1'},
    {img:'/images/2.jpg', title:'service 2', content: 'content 2'},
    {img:'/images/3.png', title:'service 3', content: 'content 3'},
    {img:'/images/4.png', title:'service 4', content: 'content 4'},
    {img:'/images/5.png', title:'service 5', content: 'content 5'},
]
module.exports={
    a,
    services,
    getAlbums
}