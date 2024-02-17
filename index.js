import express from "express";
import{Server} from "socket.io"
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


dotenv.config();
const PORT = process.env.PORT || 8080;
const app  = express();

app.use(cors({origin:"*"}));

app.use(express.static(__dirname+'/out'))
console.log(__dirname)

const server =   app.listen(PORT,()=>{
    console.log(`server started on ${process.env.PORT}`)
})
const io = new Server(server,{cors:{
 origin:"*",
}})
io.on("connection",(socket)=>{
    console.log("users connected" + socket.id)
    socket.on("send_message",(message)=>{
        console.log("from backend "+ message)
        socket.broadcast.emit("receive_message",message)
      
    })
    socket.on("disconnect",()=>{
        console.log("user disconnected")
    })
    socket.on('reconnect_attempt', () => {
        console.log('Attempting to reconnect to Socket.IO');
      });
   
})

