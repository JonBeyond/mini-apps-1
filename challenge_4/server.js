const express = require('express');
const path = require('path');
var mysql = require('mysql');
var app = express();

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', //temporary PW - do not commit
    database: 'connectfour'
})


var server = {
    port: 3000,
    initialize: () => {
        //start server here, and call router functions to begin listening
        router.serveClient();
        router.receiveResult();
        router.sendResults();
        app.listen(server.port, (err) => {
            console.log(`Listening on ${server.port}`);
        })
    }
}

var router ={ //this will route requests
    serveClient: () => {
        //this will serve (send) the index.html file
        //will also need to allow static access to bundle.js
        app.use(express.static('./client/'));
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname,'/client/dist/index.html'));
        });
    },
    receiveResult: () => {
        app.post('/result', (req, res) => {
            req.on('data', (data) => {
                let result = {
                    winner: JSON.parse(data),
                    timestamp: Date.now()
                }

                db.query(`INSERT INTO results (result, timestamp) VALUES ('${result.winner}',${result.timestamp});`, (err, results, fields) => {
                    if(err) throw err;
                    console.log('result added to database');
                })
            })
            //at this point, should send the game to the database
            res.setStatus = 201;
            res.end();
        })
    },
    sendResults: () => {
        app.get('/result', (req, res) => {
            console.log('request for db results received');

            db.query('SELECT * FROM results', (err, results) => {
                if(err) throw err;
                res.setHeader('content-type','application/JSON');
                res.statusCode = 200;
                res.send(results);
                res.end();
            })

        })

    }
}

server.initialize();