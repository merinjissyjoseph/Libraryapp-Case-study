const express = require('express');
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
const newbookRouter=express.Router();
 const Bookdata=require('../model/bookdata')


//redirecting the broowder to use booksRouter , whenever we get /books/... request
function router(nav){
   
newbookRouter.get('/',function(req,res){
    
        res.render("newbook",
        {
            nav,
             title:"Library"
        }); 
    
   //render to pass data as object
});

newbookRouter.post('/', function (req, res) { 
    // res.send("inside post");
    var data = req.body; 
    // var books=require('../data/books.js')
  
   var newbook={
    "title":data.title,
    "author":data.author,
    "genre": data.genre,
    "image":data.image
  }
  var book=Bookdata(newbook);
  book.save();//saving to database
  res.redirect('/books');


  });

return newbookRouter;
}
module.exports=router;