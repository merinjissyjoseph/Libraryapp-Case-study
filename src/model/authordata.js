const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
// mongoose.connect('mongodb+srv://userone:userone@cluster0.m9c0o.mongodb.net/libraryapp?retryWrites=true&w=majority');
const Schema=mongoose.Schema;
const AuthorSchema=new Schema({
    name:String,
    description: String,
    image:String
});
var Authordata=mongoose.model('authordata',AuthorSchema);
module.exports=Authordata;