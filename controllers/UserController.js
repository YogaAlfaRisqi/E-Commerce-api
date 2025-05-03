class UserController{
    static getAllUsers(req,res){
        res.json({
            message:"all users"
        })
    }
}

module.exports = UserController