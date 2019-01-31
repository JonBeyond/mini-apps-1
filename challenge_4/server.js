const express = require('express');
const path = require('path');
var app = express();


var server = {
    port: 3000,
    initialize: () => {
        //start server here, and call router functions to begin listening
        router.serveClient();
        app.listen(server.port, (err) => {
            console.log(`Listening on ${server.port}`);
        })
    }
}

var router ={ //this will route requests
    serveClient: () => {
        //this will serve (send) the index.html file
        //will also need to allow static access to bundle.js
        app.use(express.static('/client/'));
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname,'/client/dist/index.html'));
        });
    }
}

server.initialize();