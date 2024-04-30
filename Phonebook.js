const mongoose =require('mongoose')
const PhoneBookSchema = new mongoose.Schema({
    dishname:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})
const PhoneBook =mongoose.model('phoneBook',PhoneBookSchema)
module.exports=PhoneBook