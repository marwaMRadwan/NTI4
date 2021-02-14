const auth = async(req, res, next)=>{
    try{
        next()
    }
    catch(error){
        res.status(400).send({
            error: error,
            apiStatus:false,
            data: 'unauthorized user'
        })
    }
}

module.exports = auth