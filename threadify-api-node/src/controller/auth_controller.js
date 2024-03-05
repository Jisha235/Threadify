const userService = require("../services/user_service")
const jwtProvider = require("../config/jwtProvider")
const bcrypt = require("bcrypt")
const cartService = require("../services/cart_service")

const register = async(req,res) =>{
    try {
        const user = await userService.createUser(req.body);
        const jwt = jwtProvider.generateToken(user._id);
        
        //on creating user, the cart should be created along with that.
        await cartService.createCart(user);

        return res.status(200).send({jwt,message:"Registered successfully"})
    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }

}

const login = async(req,res) =>{
    const{password, email} = req.body;
    try {
        const user = await userService.getUserByEmail(email);
        if(!user){
            return res.status(404).send({message: "User not fouond with email : ",email})
        }
        
        const isPasswordValid =  await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).send({message:"Invalid Password"})
        }

        const jwt = jwtProvider.generateToken(user._id);
        return res.status(200).send({jwt, message:"Login successful"});

    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }
}

module.exports = {register, login}