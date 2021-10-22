const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    username: String,
    email:String,
    address: {
      street: String,
      suite: String,
      city: String,
      zipcode:String,
      geo: {
        lat: String,
        lng: String
      }
    },
    phone: String,
    website: String,
    company: {
      name:String,
      catchPhrase: String,
    bs: String
    }
},

 
  

{collection : "users"})
const model = mongoose.model('userSchema', userSchema)
module.exports = model;

