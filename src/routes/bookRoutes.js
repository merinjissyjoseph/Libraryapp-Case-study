const express = require('express');
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
const Bookdata=require('../model/bookdata');
const booksRouter=express.Router();

//redirecting the broowder to use booksRouter , whenever we get /books/... request
function router(nav){
    // var books=require('../data/books.js');
    

booksRouter.get('/',function(req,res){
    Bookdata.find()
    .then(function(books){
    res.render("books",
    {
        nav,
         title:"My Books",books
    }); 
})//render to pass data as object
});

booksRouter.get('/:id', function(req,res){ //id is any variable name
    const id=req.params.id
    Bookdata.findOne({_id:id})
    .then(function(book){
        res.render("book", {nav,
            title:"Book",
            book
        });
    })

});


// edit book router
booksRouter.get('/:id/update', function(req,res) { 
    const id=req.params.id
    Bookdata.findOne({_id:id})
    .then(function(book){

        res.render("addnewbook",{
                    id:book._id,
                    title: book.title,
                    author:book.author,
                    genre:book.genre,
                    image:book.image
        });
    })
  
  });

  //   update book
 booksRouter.post('/:id/update', function(req,res) { 
    const id=req.params.id;
    // res.send("inside author post");
    var data = req.body;
    console.log(data.id1)
    
        Bookdata.updateOne(
            {_id:data.id},
            {
                $set:{
                    title:data.name,
                    author:data.author,
                    genre:data.genre,
                    image:data.image
                }
            }
        )  
        .then (res.redirect('/books')) 
        .catch(error =>console.log(error))     
           
 


  });

//  delete a book entry
booksRouter.get('/:id/delete', function(req,res) { 
    const id=req.params.id;
    console.log(id);
    Bookdata.findOne({_id:id})
    .then(function(book){
        book.remove();
        res.redirect('/books');
    })
   
   
  });



//post book update function

// booksRouter.get('/:id/update', function(req,res) { 
//     const id=req.params.id;
//     console.log(id);
//     Bookdata.findOne({_id:id})
//     .then(function(book){
//         book.remove();
//         res.redirect('/books');
//     })
   
   
//   });

return booksRouter;
}
module.exports=router;