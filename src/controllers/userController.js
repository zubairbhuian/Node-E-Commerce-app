const getUsers =(req ,res,next)=>{
    try{
        res.status(200).send('User')
    }catch(error){
        next(error)
    }
    }


module.exports =getUsers;