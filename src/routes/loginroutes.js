
const express = require('express');
const Userdata = require('../model/userdata');
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
const loginRouter=express.Router();


function router(nav1){

loginRouter.get('/',function(req,res){
    res.render("login",
    {
        nav1,
         title:"Library"
    }); //render to pass data as object
});
loginRouter.post('/',function(req,res){
//    res.send("login successful");
   var email = req.body.email; 
   var password=req.body.password;
   Userdata.findOne({email:email,password:password},
    function (err, user) {
        if(err) { 
            return handleError(res, err);
         }
        if(!user)
         { return res.redirect('/signup') ;
        }
        return res.redirect('/home');
      });
    }
)
    
   
 
 




return loginRouter;
}
module.exports=router;