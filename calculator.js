const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
const port = 3200;

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/calculator.html")
})

app.post("/calculated",(req,res)=>{
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1+num2;
    res.send("The calculated result is: "+result);
})


app.listen(port,()=>{
    console.log(`the server is running on ${port}`);
})