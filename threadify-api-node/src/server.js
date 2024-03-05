const app = require(".");
const { connectDb } = require("./config/db");

const PORT = 5001;
app.listen(PORT, async() => {
    await connectDb();
    console.log("threadify api listening on port : ", PORT);
})