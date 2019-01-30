/*
Use Express to serve up an index.html file and its associated assets
Build your UI using ReactJS and pre-compile your views using Babel
Use MongoDB or MySQL to store your user data
*/

const express = require('express');
const app = express();

var server = {
    port: 3000,
    initialize: () => {
        router.serveClient();
        app.listen(server.port, () => {console.log(`Server open, listening on port ${server.port}`)});
    }
}

var router = {
    serveClient: () => {
        app.get('/', (req, res) => res.send('client serving not available yet'));
        //two lines, one for serving static assets, one serving the HTML file
    }
}

var processor = {} //for any server-side processing

server.initialize();