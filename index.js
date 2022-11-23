const express=require("express")
const app=express()
const cors=require("cors")
const port=4000;
const students=require("./data.js")
app.use(cors())
const emp={id:1,name:"user",position:"ceo"}
app.use(cors())
app.get("/",(req,res)=>{
	res.send("hi i am server")
})
app.get("/user",(req,res)=>{
	res.send("Good day")
})
app.get("/emp",(req,res)=>{
	res.json(emp)
})
app.get("/students",(req,res)=>{
	res.json(students)
})

app.listen(port,()=>console.log("server is started"))
