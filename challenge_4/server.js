const express = require('express');
const path = require('path');
var mysql = require('mysql');
var app = express();


var server = {
    port: 3000,
    initialize: () => {
        //start server here, and call router functions to begin listening
        router.serveClient();
        router.receiveResult();
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
                let db = mysql.createConnection({
                    host: 'localhost',
                    user: 'root',
                    password: '', //temporary PW - do not commit
                    database: 'connectfour'
                })
                db.connect();

                db.query(`INSERT INTO results (result, timestamp) VALUES ('${result.winner}',${result.timestamp});`, (err, results, fields) => {
                    if(err) throw err;
                    console.log('result added to database');
                })
                db.end();
            })
            //at this point, should send the game to the database
            res.setStatus = 201;
            res.end();
        })
    }
}

server.initialize();


/*


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();


*/