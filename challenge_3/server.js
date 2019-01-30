/*
Use Express to serve up an index.html file and its associated assets
Build your UI using ReactJS and pre-compile your views using Babel
Use MongoDB or MySQL to store your user data

        mongodb://127.0.0.1:27017
        var mongoPort = 27017;

*/

const express = require('express');
const app = express();
const path = require('path');


var server = {
    port: 3000,
    initialize: () => {
        router.serveClient();
        router.receiveData();
        app.listen(server.port, () => {console.log(`Server open, listening on port ${server.port}`)});
    }
}

var router = {
    serveClient: () => {
        app.get('/', (req, res) => {
            app.use(express.static(`${__dirname}/compiled/client`)); //allow access
            console.log(`${__dirname}/compiled/client`);
            res.sendFile(path.join(__dirname, '/public/index.html'), (err) => {
                if (err) {
                    console.log(err);
                }
            })
        });
        //two lines, one for serving static assets, one serving the HTML file
    },
    receiveData: () => {
        app.post('/cart', (req, res) => {
            req.on('data', (data) => {
                processor.cart = JSON.parse(data);
            });
            res.statusCode = 201;
            res.end();
        })
    }
}

var processor = {
    cart: null,
    processCart: () => {
        console.log('no cart processing configured');
    },
    saveCart: () => {
        console.log('Saving cart to database');
        
    }
}

server.initialize();