const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
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