// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan				 = require('morgan');
var fs 						 = require('fs');
var path 					 = require('path');

// configuration ==========================================
// config files
var db = require('./config/db');

var port = process.env.PORT || 3000; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(morgan('combined', {stream: accessLogStream}));
app.use(morgan('dev'));

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

//////////////////////////////////////////add//////////


app.post('/patient',function(req,res){
    console.log('calling post api');

    console.log("details",req.body);

    var nodemailer = require("nodemailer");
    var mail_details = {
        "service": "Gmail",
        "auth": {
            "user": "pravin.dagde.web@gmail.com",// You need to allow this mail id to use as less secure by setting it ON.You will get mail from google of this to edit security.
            "pass": "Pravin@123"
        }
    }
    var smtpTransport = nodemailer.createTransport(mail_details);



    var mailOptions = {
        to: "pravin.dagde@gmail.com", // list of receivers
        subject: req.body.email + " " + req.body.phone + " " + "FROM WEB ", // Subject line
        text:req.body.message,
        file : ""
    };

    var replayview = {
        to: req.body.email, // list of receivers
        subject: "Thank You" + " "+req.body.name + " "+"for Submitting Your Thought ON Pravin Dagde's profile", // Subject line
        text:" I am glad for submitting your view in my personal website. i always remain you in my whole life Thanks ones again",
        file : ""
    };

    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){

        }else{
             }
    });

    smtpTransport.sendMail(replayview, function(error, response){
        if(error){

        }else{
        }
    });
});


///////////



// start app ===============================================
app.listen(port);	
console.log('Server started on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app