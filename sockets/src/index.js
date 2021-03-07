const path = require('path')
const http = require('http')
const express= require('express')
const soketio = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = soketio(server)
port = 3000
const publicDir = path.join(__dirname, '../public')
app.use(express.static(publicDir))
//io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' });

io.on('connection', (socket)=>{
    console.log('new socket')
    socket.on('chat message',(msg)=>{
        io.emit('chat message', msg);
        console.log(msg)
    })
    socket.on('disconnect',()=>console.log('disconnected'))
})
server.listen(port)