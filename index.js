import express from "express";
import{Server} from "socket.io"
import cors from 'cors'
import http from 'http'
import dotenv from 'dotenv'
dotenv.config();
const app  = express();
const server = http.createServer(app);
app.use(cors({origin:"*"}));
app.get("/hey" , (req ,res)=>{
    res.send("<h1>hey</h1>")
})  
const io = new Server({cors:{
 origin:"*",
}}).listen(server)
io.on("connection",(socket)=>{
    console.log("users connected" + socket.id)
    socket.on("send_message",(message)=>{
        io.emit("receive_message",`id:${socket.id} ->${message}`)
    })
   
})
app.use(express.static('out'))

  server.listen(process.env.PORT,process.env.HOST,()=>{
    console.log(`server started on ${process.env.PORT}`)
})