const mongoose = require("mongoose");

const db = "mongodb+srv://admin:rajajish@cluster0.jzsod.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectDb = async ()=>{
try {
const conn = await mongoose.connect(db,{
useNewUrlParser: true,
useUnifiedTopology: true,
})
console.log(`MongoDB Connected ${conn.connection.host}`);
} catch (error) {
console.log(`Error: ${error.message}`)
process.exit();
}
}



module.exports = connectDb