const express = require('express');
const app = express();
const Authordata=require('../model/authordata')
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

const newauthorRouter=express.Router();

//redirecting the broowder to use booksRouter , whenever we get /books/... request
function router(nav){
    
newauthorRouter.get('/',function(req,res){
    res.render("newauthor",
    {
        nav,
         title:"Authors"
    }); //render to pass data as object
});

newauthorRouter.post('/', function (req, res) { 
  // res.send("added author");
  //   // res.send("inside post");
    var data = req.body; 
    // var authors=require('../data/authors.js');
  
   var newauthor={
    "name":data.name,
    "description":data.description,
    "image": data.image
    
  }
  console.log("data fetched");
  var author=Authordata(newauthor);
  author.save();//saving to database
  res.redirect('/authors');
//   console.log(data)
//   authors.push(newauthor);
// //   module.exports=authors;
//  console.warn('added',{authors});
//  res.render("authors",{nav,title:"Library",authors});
    
      

  });

return newauthorRouter;
}
module.exports=router;