const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors())

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

// app.get('/', (req, res) => {
//     res.json({ message: 'hello from server' })
// });

io.on('connection', (socket) => {
    console.log(`a user connected ${socket.id}`);

    socket.on('send_message', (data) => {
        socket.broadcast.emit('recieve_message', data)
    });

});
// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//         io.emit('chat message', msg);
//     });
// });

server.listen(3001, () => {
    console.log('listening on *:3001');
});