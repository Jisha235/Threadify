const mongoose = require("mongoose")

const mongoDbUrl ="mongodb+srv://jisha235:Threadify2024@cluster0.aqiiusx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb =() =>{
    return mongoose.connect(mongoDbUrl);
}

module.exports={connectDb}