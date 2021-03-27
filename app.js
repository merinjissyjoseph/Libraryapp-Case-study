const express = require('express');
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
const port=process.env.port||3000;
// const bodyParser = require('body-parser')

// app.use(bodyParser.json())
const nav1= [
    {link:'/signup',name:'Signup'},
    {link:'/login',name:'Login'}
]
const nav= [
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/newbook',name:'Add new Book'},
    {link:'/newauthor',name:'Add new Author'},
    {link:'/logout',name:'Logout'}
];
const nav2= [
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'}
];
const nav3=[
    {link:'/newbook',name:'Add new Book'},
    {link:'/newauthor',name:'Add new Author'}
]
const signupRouter=require('./src/routes/signupRoutes')(nav1);
const loginRouter=require('./src/routes/loginRoutes')(nav1);
const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorsRouter=require('./src/routes/authorRoutes')(nav);
const newbookRouter=require('./src/routes/newbookRoutes')(nav);
const newauthorRouter=require('./src/routes/newauthorRoutes')(nav);
const editbookRouter=require('./src/routes/updatebookRoutes')(nav);
app.use(express.static('./public'));

app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/books',booksRouter); 
app.use('/update',editbookRouter);//redirecting the browser to use booksRouter , whenever we get /books/... request
app.use('/authors',authorsRouter);
app.use('/newbook',newbookRouter);
app.use('/newauthor',newauthorRouter);
app.set('view engine','ejs');
app.set('views','./src/views/')
app.get('/',function(req,res){
    res.render("index",
    {
        nav1,
         title:"Library"
    }); //render to pass data as object
});
app.get('/home',function(req,res){
    res.render("home",
    {
        nav,
         title:"Library"
    }); //render to pass data as object
});
app.get('/logout',function(req,res){
    res.render("index",{
        nav1, 
        title: "Library"
    });

});



app.listen(port,()=>(console.log("listening to port at" +port)));