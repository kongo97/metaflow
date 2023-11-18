const http = require('http');
const server = http.createServer();
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:8080", // Sostituisci con l'URL del tuo client
        methods: ["GET", "POST"],
        credentials: true
    }
});

io.on('connection', (socket) => {
    socket.on('start', (data) => {
        console.log('Messaggio ricevuto dal client:', data);
        console.log('Tipo del dato', typeof(data));

        socket.emit('confirm-start', true)
    });
});

server.listen(3000, () => {
    console.log('Socket.io server in ascolto sulla porta 3000');
});
