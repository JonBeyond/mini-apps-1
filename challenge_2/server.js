const express = require('express');
const app = express();
const path = require('path');


/*************** CONTROLLER ***************/

var server = {
    port: 3000,
    initialize: () => {
        server.watch();
        server.serveClient();
        server.receiveFile();
    },
    watch: () => {
        app.listen(server.port, () => {console.log(`Server listening on ${server.port}`)});
    },
    serveClient: () => {
        //need to bundle all files and send them to the client (website)
        app.get('/', (req, res) => {
            app.use(express.static(`${__dirname}/client`));
            res.sendFile(path.join(__dirname, '/client/index.html'), (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("files served successfully");
                }
            });
        })
    },
    receiveFile: () => {
        console.log("rcvr file functionaly not complete") //TODO:
    }

}

/*************** STATE ***************/

var process = {
    inputFile: null,
    outputFile: null,
    CSV: () => {
        //process process.inputFile
        //save it under process.outputFile
    }
}





/*************** SERVER REQT DETAILS ***************
 *
 *
 * Implement all the report generation logic on the server.
 * Do not use any external libraries (such as via npm). You
 * may use jQuery on the client.
 *
 */

server.initialize();