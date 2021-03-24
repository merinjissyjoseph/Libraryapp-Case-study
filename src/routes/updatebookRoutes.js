const express = require('express');
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
const editbookRouter=express.Router();
 const Bookdata=require('../model/bookdata');
//redirecting the broowder to use booksRouter , whenever we get /books/... request
function router(nav){
   
editbookRouter.get('/',function(req,res){
    
        res.render("addnewbook",
        {
            nav,
             title:"Library"
        }); 
    
   //render to pass data as object
});

editbookRouter.post('/', function (req, res) { 
 res.send("inside edit post");
//     var data = req.body; 
//     // var books=require('../data/books.js')
  
//    var newbook={
//     "title":data.title,
//     "author":data.author,
//     "genre": data.genre,
//     "image":data.image
//   }
//   var book=Bookdata(newbook);
//   book.save();//saving to database
//   res.redirect('/books');


  });

return editbookRouter;
}
module.exports=router;