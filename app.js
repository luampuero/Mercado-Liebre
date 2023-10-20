const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get("/",(req,res)=>{
    res.send("Mercado Liebre")
})

app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"));
})

app.use(express.static("public"));

app.listen(port,console.log(`Server running  in http://localhost:${port}`))