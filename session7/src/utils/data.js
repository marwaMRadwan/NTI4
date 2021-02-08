const request = require('request')
commonURL = 'https://jsonplaceholder.typicode.com/posts'

getAllPosts = (callback) =>{
    request({url: commonURL, json:true}, (error, data, body)=>{
        if(error) callback('Api problem', undefined)
        else if(data.error) callback('server error', undefined)
        else callback (undefined, body)
    })
}

getSinglePost = (id, callback) =>{
    request({url: `${commonURL}/${id}`, json:true}, (error, data, body)=>{
        if(error) callback('Api problem', undefined)
        else if(data.error) callback('server error', undefined)
        else {
            callback (undefined, body)
            // getPostComments(id, body, (err,res)=>{
            //     alldata= {post:body, comments:res}
            //     callback(undefined, alldata)
            // })
        }
    })
}
getPostComments = ( id, body, callback) =>{
    request({url: `${commonURL}/${id}/comments`, json:true}, (error, data, body)=>{
        if(error) callback('Api problem', undefined)
        else if(data.error) callback('server error', undefined)
        else callback (undefined, body)
    })
}

module.exports={
    getAllPosts,
    getPostComments,
    getSinglePost
}