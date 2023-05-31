const express = require ("express");
const path = require ("path");
const app = express ();

app.use(express.static("public"))

app.listen(process.env.PORT || 4000,() =>{
    console.log ("Listening")
})

app.get ("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"/view/home.html")) 
})

app.get ("/login", (req,res)=>{
    res.sendFile(path.join(__dirname,"/view/login.html")) 
})

app.get ("/register", (req,res)=>{
    res.sendFile(path.join(__dirname,"/view/register.html")) 
})
    

    
