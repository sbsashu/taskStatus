const express = require('express');
const server = express();
const mongoose = require('mongoose');
const {config} = require('./config');

server.use(express.json());

//Database Connection
mongoose.connect(config.DB_URL || "mongodb://localhost:27017/task_status", {useNewUrlParser: true, useFindAndModify: false})
        .then(() => console.log("Database connected"))
        .catch(err => console.log('ERROR WHILE CONNECTING THE DB', err))

// API Routes

server.use('/api/v1', require('./route/'))



server.listen(config.PORT || 3001, () => {
    console.log("Port is running on ", config.PORT || 3001);
})