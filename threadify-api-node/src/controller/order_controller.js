const orderService = require("../services/order_service");

const createOrder = async(req,res) => {
    const user = await req.user;
    try {
        let createdOrder = await orderService.createOrder(user, req.body);
        res.status(200).send(createdOrder);
    } catch (error) {
        res.status(500).send({error:error.message});
    }
}

const findOrderById = async(req,res) => {
    const user = await req.user;
    try {
        let createdOrder = await orderService.findOrderById(req.params.id);
        res.status(200).send(createdOrder);
    } catch (error) {
        res.status(500).send({error:error.message});
    }
}

const orderHistory = async(req,res) => {
    const user = await req.user;
    try {
        let createdOrder = await orderService.usersOrderHistory(user._id);
        res.status(200).send(createdOrder);
    } catch (error) {
        res.status(500).send({error:error.message});
    }
}


module.exports ={
    createOrder, findOrderById, orderHistory
}

