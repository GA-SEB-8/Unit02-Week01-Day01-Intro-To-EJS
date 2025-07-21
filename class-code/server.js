// imports
const express = require("express") //importing express package
const app = express() // creates a express application

// Middleware
app.use(express.static('public')); //all static files are in the public folder

// database
const students = [
    {
        name: "Malak",
        id: 1
    },
    {
        name: "Muhannad",
        id: 2
    },
    {
        name: "Bayan",
        id:3
    }
]


// Routes go here
app.get("/",(req,res)=>{
    res.render("home.ejs",{language: "JavaScript"})
})


app.get("/students",(req,res)=>{
    let studentsObj = {
        students : students
    }
    res.render("students.ejs",studentsObj)
})

app.listen(3000,()=>{
    console.log("Listening on port 3000")
}) // Listen on port 3000


