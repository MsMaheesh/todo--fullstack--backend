const express= require('express')
const mongoose= require('mongoose')
const routes = require('./rotues')
const cors = require("cors")
require('dotenv').config()

const app = express()
app.use(express.json())
const port = process.env.port || 5000
app.use(cors())
app.use('/',routes)

mongoose
.connect(process.env.mongourl)
.then(()=>console.log("mongodb connected"))
.catch((err)=> console.log(err))
app.listen(port,(err)=>{
    if(!err){
        console.log("server running")
    }
    else{
        console.log("server not running")
    }
})