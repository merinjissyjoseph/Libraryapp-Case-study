
const express = require('express');
const user = require('../data/user.js');
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
const signupRouter=express.Router();
// var popup = require('popups');



//redirecting the broowder to use SIGNUPRouter , whenever we get /signup/... request
function router(nav1){
var user=require('../data/user.js');
signupRouter.get('/',function(req,res){
    res.render("signup",
    {
        nav1,
         title:"Library"
    }); //render to pass data as object
});

signupRouter.post('/', function (req, res) { 
    var data = req.body; 
    console.log("Name: ", data.fname); 
    console.log("Name: ", data.lname); 
    console.log("Name: ", data.pnumber); 
    console.log("Name: ", data.email); 
    console.log("Age: ", data.password); 

    var newuser={
    "email":data.email,
    "password":data.password
    }
    var strength =0;
//password validation
if (data.password.length < 6) {
res.json('password must be >6');
  res.redirect('/signup')
  
}
else if (data.password.length > 6){
  res.send("inside pattern validator");
 


}

    user.push(newuser);
    console.warn('added',{user});

    
      
    res.redirect('/login');
  }); 

return signupRouter;
}
module.exports=router;
