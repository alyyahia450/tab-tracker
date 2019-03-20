const express =require('express');
const app=express();
const port=process.env.POTR||8081;
app.get('/status/:id',(req,res)=>{
   res.send({message:'hello world',
            id:req.params.id});
});
app.listen(port,()=>{console.log(`server is starting on port:${port}`)});