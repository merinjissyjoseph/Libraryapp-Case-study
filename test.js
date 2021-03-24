function toObject(){
    let books=[{"name":"irin","id":"22"}];
    let newbook={
        name:document.getElementById("name").value,
        number:document.getElementById("number").value,


    }
    books.push(newbook);
    console.warn('added',{books});
    // let name=document.getElementById("name").value;
    // let number=document.getElementById("number").value;
    // obj[name]=name;
    // obj[number]=number;
    // console.log(obj[name]);
    document.getElementById("newobject").innerHTML=books;

}  