const express = require("express");
const mongoose = require("mongoose");
const User = require("./user");

const app = express();



async function db() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/aryan");
        console.log("mongodb connect");
        
    } catch (error) {
        console.log(error.message);
        
    }
    
}


db();






app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));





app.get("/", (req, res) => {

  res.render("index"); 
});



app.post("/register", async(req, res) => {
let email = req.body.email;
let password = req.body.password;

if(!email || !password){
   return  res.send("plese provide info")
}
   

let isExist = await User.findOne({email:email});

if(isExist)
{
     return  res.send("already register")
}

await User.create({
    email:email,
    password:password
});



    
  return res.send("register")
 
});


app.post("/login", async(req, res) => {

let email = req.body.email;
let password = req.body.password;

if(!email || !password){
   return  res.send("plese provide info")
}


let isExist = await User.findOne({email:email});

if(!isExist)
{
     return  res.send("pls register")
}


if(isExist.password == password){
    res.redirect('/dashboard')
}



return   res.send("invalid password")
 
});


app.get("/dashboard", (req, res) => {

  res.render("dashboard"); 
});



// start server
app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
