const express= require('express')
const {getPost, agregarPost}=require('./consultas')
const cors= require('cors')

const app=express();
const PORT=process.env.PORT || 3000

app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.send('Hello, world')
})

app.listen(PORT, (req,res)=>{
    console.log(`Conectado al servidor ${PORT}`)
})

app.get("/posts", async(req,res)=>{
    const result=await getPost()
    res.json(result)
})

app.post("/posts", async(req,res)=>{
    const {titulo,img,descripcion, likes}=req.body
    const results=await agregarPost(titulo,img,descripcion,likes)
    res.send('posts agregado')

})