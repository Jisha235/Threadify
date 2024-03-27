const express = require("express")
const cors = require("cors") // so that it does not block backend api to connect with frontend

const app = express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    return res.status(200).send({message : "Welcome to Threadify api - node", status:true})
})

const authRouters = require("./routes/auth_route")
app.use("/auth", authRouters);

const userRouters = require("./routes/user_route")
app.use("/api/users", userRouters)

const productRouter = require("./routes/product_route");
app.use("/api/products", productRouter);

const adminProductRouter = require("./routes/adminProduct_route");
app.use("/api/admin/products", adminProductRouter);

const cartRouter = require("./routes/cart_route");
app.use("/api/cart", cartRouter);

const cartItemRouter = require("./routes/cartItem_route");
app.use("/api/cart_item",cartItemRouter);

const orderRouter = require("./routes/order_route");
app.use("/api/orders", orderRouter);

const adminOrderRouter = require("./routes/adminOrder_route");
app.use("/api/admin/orders", adminOrderRouter);

const reviewRouter = require("./routes/review_route");
app.use("/api/reviews", reviewRouter);

const ratingRouter = require("./routes/rating_route");
app.use("/api/ratings", ratingRouter);


module.exports = app;                                                                                                                                                                                                                                                                                                                                                                                                                                        