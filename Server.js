const express =require('express')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())
const PORT=8080
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}...`)
})
const mongoose=require('mongoose')
const DB='mongodb+srv://sharanyamanohar03:2109sha03m@cluster0.jshjhkk.mongodb.net/'
mongoose.connect(DB,{
    useNewUrlParser:true,
    
}).then(() =>{
    console.log('Database connect..')
})
const PhoneBook=require('./model/Phonebook.js')
app.post('/add-phone',async(req,res)=>{
    const phoneNumber=new PhoneBook(req.body)
    try{
        
        await price.save()
        res.status(201).json({
            status:'Sucess',
            headers: {
                'Authorization': '',
                'Content-Type': '',
              },
            data:{
                price
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
})
app.get('/get-phone',async(req,res)=>{
    const prices=await PhoneBook.find({})
    try{
        res.status(200).json({
            status:'Sucess',
            data:{
                prices
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
})