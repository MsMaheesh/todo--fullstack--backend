const express = require("express")
const routes = express.Router()
const model=require('./model')

routes.route("/getdata").get(async (req,res)=>{
    return res.send(await model.find())
})

routes.route("/addtodo").post(async (req,res)=>{
    const data={
        todo:req.body.todo
    }
    try{
        const da=new model(data)
        da.save()
        res.send(await model.find() )
    }
    catch(err){
        console.log(err)
    }
})

routes.route('/:id').put(async (req,res)=>{
    const data = {
        todo : req.body.todo
    }
    try{
        await model.findByIdAndUpdate( req.params.id,data)
        res.send(await model.find() ) 
    } 
    catch(err){
        console.log(err)
    } 
})

routes.route('/:id').delete(async (req,res)=>{
    await model.findByIdAndDelete(req.params.id)
    res.send(await model.find())
})
routes.route('/getdata/:id').get(async (req,res)=>{
    const data=await model.findById(req.params.id)
    res.send(await data)
})
module.exports= routes