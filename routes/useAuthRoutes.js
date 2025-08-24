const express = require("express");
const { login ,signUp} = require("../controllers/userAuthController");
const router = express.Router();

router.post("/signUp",signUp);



router.get("/signUp",(req,res)=>{
    res.render("SignupPage")
});


// router.get("/login",login)


module.exports = router