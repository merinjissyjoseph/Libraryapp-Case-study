const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
// mongoose.connect('mongodb+srv://userone:userone@cluster0.m9c0o.mongodb.net/libraryapp?retryWrites=true&w=majority');
const Schema=mongoose.Schema;
const UserSchema=new Schema({
    uname:{
        type: String
        
      },
    pnumber: {
        type: String,
        required: true
      },
    email:{
        type: String,
        required: true
      },
      password:{
        type: String,
        required: true
      },
      password1:{
        type: String,
        required: true
      }
});
var Userdata=mongoose.model('userdata',UserSchema);
module.exports=Userdata;