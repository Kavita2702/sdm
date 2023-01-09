const express=require('express')
const app=express();
app.get('/',function(req,res){
    res.send("All the best Moto")
})
app.listen(2702)
console.log("Himani")