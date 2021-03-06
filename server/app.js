require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const socketIO = require('socket.io');
const http = require('http')

const rtsIndex = require('./routes/index.router');

var app = express();


// middleware
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(passport.initialize());
app.use('/api', rtsIndex);

// var server = app.listen(process.env.PORT, () => {
//     console.log("Listening ..");
//   });
// const io = socketIO.listen(server);
// app.set('io',io);
// app.set('server',server)

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));
// app.get('server').listen(process.env.PORT);
