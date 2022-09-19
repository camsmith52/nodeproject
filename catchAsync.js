module.exports = func =>{
    return (req,res, next)=>{
        func(req,res,next).catch(next())
    }
}

//func is the function used in the CONTROLLER