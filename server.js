const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
app.listen(process.env.PORT || 3000, () =>{
    console.log("Server started")
})
app.get('/', (req,res) =>{
    res.send("Bhuwan")
})