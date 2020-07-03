// express server
const express = require('express');
const app = express();
const server = require('http').createServer(app);

// socket io server
const socketIo = require('socket.io');
const io = socketIo(server);

// send chat env to client
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


// io events
io.on('connection', (socket) => {

    socket.on('login', (data) => {
        socket.emit('successLogin', {success: true});
        socket.broadcast.emit('newUser', data);
    });


    socket.on('message', (data) => {
        socket.broadcast.emit('newMessage', data)
    });


    








    socket.on('disconnect', (socket) => {
        console.log('a user disconnected');
    });
});





server.listen(5500, () => {
    console.log('Up and running, port 5500');
});




