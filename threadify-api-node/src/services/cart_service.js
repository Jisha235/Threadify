const Cart = require("../models/cart_model")

async function createCart(user){
    try {
        const cart = new Cart({user});
    const createdCart = await cart.save(); // save created cart in database
    return createdCart;
        
    } catch (error) {
        throw new Error(error.message);
        
    }
    
}

module.exports ={createCart}