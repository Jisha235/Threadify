const userService = require("../services/user_service")

const getUserProfile = async(req, res) =>{
    const jwt = req.headers.authorization?.split(" ")[1];// on space, it will convert into array - eg: Bearer token -> [Bearer, token] - we need index 1 i.e "token" hence [1]
    console.log("req ", jwt)
    try {
        
        if(!jwt){
            return res.status(404).send({error:"Token not found"})
        }
        const user = await userService.getUserProfileByToken(jwt)
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const getAllUsers = async(req,res) =>{
    try {
        const users = await userService.getAllUsers();
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send({error:error.message})
        
    }
}

module.exports ={getUserProfile,getAllUsers}