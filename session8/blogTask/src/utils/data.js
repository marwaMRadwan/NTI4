const request = require('request')
//LocalStorage = require('localStorage')
var localStorage = require('localStorage')

commonURL = 'http://medical.marwa-radwan.com/api'

getAllPosts = (langid, callback) =>{
    // console.log(window.localStorage('aa'))
    langid=localStorage.getItem('lang')||1
    myValue = { foo: 'bar', baz: 'quux' }
    localStorage.setItem('myKey', JSON.stringify(myValue));
    myValue = localStorage.getItem('myKey');
    console.log(myValue)
    request({url: `${commonURL}/blog/${langid}`, json:true}, (error, data, body)=>{
        if(error) callback('Api problem', undefined)
        else if(data.error) callback('server error', undefined)
        else callback (undefined, body)
    })
}

getSinglePost = (langid, id, callback) =>{
    request({url: `${commonURL}/SingleBlog/${id}/${langid}`, json:true}, (error, data, body)=>{
        if(error) callback('Api problem', undefined)
        else if(data.error) callback('server error', undefined)
        else {
            callback (undefined, body)
        }
    })
}

module.exports={
    getAllPosts,
    getSinglePost
}