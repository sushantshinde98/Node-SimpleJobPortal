const express = require('express');
require('dotenv').config();
const mongoose=require('mongoose');
const path=require('path');
const bodyParser=require('body-parser');
const config=require('./setup/config'); //Port And MongoURL
const Port=process.env.PORT || config.nodePort;
const cookieParser=require('cookie-parser');
const expsession=require('express-session');
const flash=require('express-flash')
const app=express();
//app.use(cookieParser('keyboard cat'));
//app.use(expsession({ cookie: { maxAge: null }}));
//app.use(flash());
const router=require('./routes/route');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"./views")));
//mongoose connection
mongoose.connect(config.mongoURL,{useNewUrlParser: true,
	useUnifiedTopology: true})
    .then(() => console.log("Connected To MongoDB!"))
    .catch((err) => console.log("MongoDb Not Connected!" + err));

//router
app.use('/',router);

//view engine or template engine config
app.set('view engine','ejs');




app.listen(Port,()=>{console.log(`App running at port ${Port}`)});