const mongoose = require("mongoose");


async function startdb(){

try {

await    mongoose.connect("mongodb://127.0.0.1:27017");
console.log("mongodb connect");

} catch (error) {
    console.log("db connection error",error.message);
}
}
startdb()

module.exports = startdb;