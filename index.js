const express = require('express');
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const userRoute = require("./routes/user");

const bodyParser = require('body-parser');
const cors = require("cors")



const port = process.env.PORT || 3000;
const app=express();
app.use(cors());
connectDB();

app.use(express.json());
app.use(bodyParser.json());

app.use("/user", signupRoute);
app.use("/user", loginRoute);
app.use("/api", userRoute);


 app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
app.post("/api/products", (req, res) => {
    console.log(req.body);
    res.send("Data received");
});