// imports
const express = require("express") //importing express package
const app = express() // creates a express application

// Middleware
app.use(express.static('public')); //all static files are in the public folder



// Routes go here
app.get("/",(req,res)=>{
    res.render("home.ejs")
})

app.listen(3000,()=>{
    console.log("Listening on port 3000")
}) // Listen on port 3000


