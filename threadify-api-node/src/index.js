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

module.exports = app;                                                                                                                                                                                                                                                                                                                                                                                                                                        