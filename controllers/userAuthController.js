const User = require("../model/userModel");

const signUp = async (req,res) => {
    console.log(req.body);
    
    let {name,email,password}= req.body;


    if(!name || !email || !password){
        return res.status(400).json({success:false , message:"All fields required"})
    }

    if(!(email.includes("@"))){
  return res.status(400).json({success:false , message:"Enter proper email"})
    }


 if(password.length<6){
  return res.status(400).json({success:false , message:"Password must be 6 digit"})
    }

let isExist = await User.findOne({email});

if(isExist){
     return res.status(400).json({success:false , message:"Email already exist"})
}

let newUser = await User.create({
    name:name,
    email:email,
    password:password
})


 return res.status(201).json({success:true , message:"User Register SuccessFully"})

}








// const login = async (req,res) => {
    
// }


module.exports = {signUp}