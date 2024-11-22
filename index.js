const express = require('express');
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const userRoute = require("./routes/user");
const findUserRoute = require("./routes/find_user");
const updateInfoRoute = require("./routes/update_user");

const {authenticateToken} = require("./utils/authMiddleware");


const bodyParser = require('body-parser');
const cors = require("cors")



const port = process.env.PORT || 3000;
const app=express();
app.use(cors());
connectDB();

app.use(express.json());
app.use(bodyParser.json());

app.use("/user", findUserRoute);
app.use("/user", signupRoute);
app.use("/user", loginRoute);
app.use("/api", userRoute);
app.use("/user",authenticateToken,updateInfoRoute);
app.get("/",(req,res)=>{
    res.send("Working");
})


 app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });