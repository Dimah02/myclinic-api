const express = require('express');
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const userRoute = require("./routes/user");
const getClinicsRoute = require("./routes/get_clinics");
const getDoctorRoute = require("./routes/get_doctor");
const appointmentRoute = require("./routes/appointment");
const reviewRoute = require("./routes/review");





const bodyParser = require('body-parser');
const cors = require("cors")



const port = process.env.PORT || 3000;
const app=express();
app.use(cors());
connectDB();

app.use(express.json());
app.use(bodyParser.json());

app.use("/user", userRoute);
app.use("",getClinicsRoute);
app.use("",getDoctorRoute);
app.use("",appointmentRoute);
app.use("",reviewRoute);



app.get("/",(req,res)=>{
    res.send("Working");
})


 app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });