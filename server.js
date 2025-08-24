const express = require("express");
const path = require("path");
const db = require("./config/db")
const app = express();
const authRoutes = require("./routes/useAuthRoutes")


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));


app.use("/api/auth",authRoutes);


app.get("/",(req,res)=>{
  res.render("landingPage")
})













// Start server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
