const express = require('express');
const app = express();
// const Authordata=require('../model/authordata');
const Authordata=require('../model/authordata');
const authorsRouter=express.Router();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


//redirecting the broowder to use booksRouter , whenever we get /books/... request
function router(nav){
    // var authors=require('../data/authors.js');
    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
        res.render("authors",
    {
        nav,
         title:"Authors",authors
    }); //render to pass data as object
})
});

authorsRouter.get('/:id', function(req,res){ //id is any variable name
    const id=req.params.id
    console.log(id);
    Authordata.findOne({_id:id})
    .then(function(author){
    res.render("author", {nav,
    title:"Author",
    author
});
    })
});
// author form available for edit

authorsRouter.get('/:id/update', function(req,res) { 
    const id=req.params.id
    Authordata.findOne({_id:id})
    .then(function(author){

        res.render("newauthor",{
                    id:author._id,
                    name: author.name,
                    description:author.description,
                    image:author.image
        });
    })
  
  });
//   update author
authorsRouter.post('/', function(req,res) { 
    // res.send("inside author post");
    var data = req.body;
    if (data.id1!=null) {
        Authordata.updateOne(
            {_id:data.id},
            {
                $set:{
                    name:data.name,
                    description:data.description,
                    image:data.image
                }
            }
        )  
        .then (res.redirect('/authors')) 
        .catch(error =>console.log(error))     
           
 
        }


  });


// Delete an author

authorsRouter.get('/:id/delete', function(req,res) { 
    const id=req.params.id;
    console.log(id);
    Authordata.findOne({_id:id})
    .then(function(author){
        author.remove();
        res.redirect('/authors');
    })
   
   
  });

return authorsRouter;
}
module.exports=router;