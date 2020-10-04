const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');

require('dotenv').config();

//import routes 
const authRoutes = require('./routes/auth');

//app
const app = express();

//Db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex:true
}).then(()=>console.log('DB is connected'));

//middleware 
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

//routes middleware
app.use('/api',authRoutes);

//routes

const port = process.env.PORT || 8000

app.listen(port,()=> {
    console.log(`Server is running on port ${port}`);
});
