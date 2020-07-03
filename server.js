const app = require('express')();
const server = require('http').createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(5500, () => {
    console.log('Up and running, port 5500');
});




