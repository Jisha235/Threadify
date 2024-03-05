const mongoose = require("mongoose")

const mongoDbUrl ="path to mongoDb database"

const connectDb =() =>{
    return mongoose.connect(mongoDbUrl);
}

module.exports={connectDb}
