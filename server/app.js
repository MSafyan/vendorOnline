//***Importing Modules
const express = require('express');
const http = require('http');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const socketIo = require('socket.io');
const apiRoutes = require('./routes');
// const deserializeUser = require('./src/middlewares/deserializeUser');
const setEnv = require('./utils/setEnv');

setEnv();

// App Configuration
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

// socket
// const io = socketIo(server, {
//   cors: {
//     origin: '*',
//   },
//   pingTimeout: 4000,
//   pingInterval: 12000,
// });

// global.io = io;
// require('./src/socketManger/socketManger')(io);

//Middlwares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(cookieParser());
// app.use(deserializeUser);

app.use(express.static('build'));
app.use('/public', express.static('public'));
// API Routes
app.use('/api/', apiRoutes);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./build", "index.html"));
// });

server.listen(PORT, () => {
  console.log(`Server Is running on ${process.env.BASE_URL}`);
});
