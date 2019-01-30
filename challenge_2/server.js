const express = require('express');
const app = express();
const path = require('path');
//the following two allow for body parsing
const bodyParser = require('body-parser');
// const multer = require('multer');

/*************** CONTROLLER ***************/

var server = {
    port: 3000,
    initialize: () => {
        server.watch(); //open server
        server.serveClient(); //listen for GET
        server.receiveFile(); //listen for POST
        server.returnFile();
    },
    watch: () => {
        app.listen(server.port, () => {console.log(`Server listening on ${server.port}`)});
    },
    serveClient: () => { //listen for a /, for HTML loading.
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
        app.post('/submit', (req, res) => {
            req.on('data', (data) => { //NOTE: .on is asynchronous
                process.inputFile = data;
                process.CSV();
                res.setHeader('content-type', 'application/json');
                res.statusCode = 201; //meh....
                res.end();
            });
        })
    },
    returnFile: () => {
        app.get('/getfile', (req, res) => {
            //TODO: send the processed file back
            res.json(process.outputFile);
            res.end();
        })
    }

}

/*************** STATE ***************/

var process = {
    inputFile: null,
    outputFile: null,
    foundKeys: [],
    foundObjs: [],
    CSVString: '',
    CSV: () => {
        process.CSVString = ''; //reset
        process.foundObjs =[]; //reset
        process.foundKeys = []; //reset
        let object = JSON.parse(process.inputFile); //convert BUFFER to string?

        //the input object contains key:value pairs and a child property with an array
        //of additional objects that may share the same key s, and may not.

        //first, let's process the parent item and store non-'children' key s found within it to start off
        let obj = {}; //temp obj holder
        for (let key in object) {
            if (key !== 'children') {
                process.foundKeys.push(key);
                obj[key] = object[key]; //make a copy of the object for easy csv processing
            }
        }
        process.foundObjs.push(obj);

        //the below is a function that will process all of the children in a similar fasion.
        var depthTraverser = (children) => { //send the array of children.  go depth first (?)
            for (let i = 0; i < children.length; i++) {
                let obj = {}; //create new temp obj
                for (let key in children[i]) {
                    if (!process.foundKeys.includes(key) && key !== 'children') { //look for new keys
                        process.foundKeys.push(key);
                    }
                    if (key !== 'children') {
                        obj[key] = children[i][key];  //store for later
                    }
                }
                console.log(`storing new obj: ${JSON.stringify(obj)}`)
                process.foundObjs.push(obj); //see ya!
                if (children[i].children.length > 0) {
                    depthTraverser(children[i].children); //send child array
                }
            }
        }

        if (object.children.length > 0) {
            depthTraverser(object.children); //send the child array
        }




        //***** HEADER *****/
        process.foundKeys.forEach((key) => {
            process.CSVString += key+",";
        });
        process.CSVString = process.CSVString.substring(0, process.CSVString.length-1); //clumsily remove trailing comma
        process.CSVString+="<br>";  //add html new line.

        //***** ENTRY LINES *****/
        for (let i = 0; i < process.foundObjs.length; i++) {
            process.foundKeys.forEach((key) => {
                if(process.foundObjs[i].hasOwnProperty(key)) {
                    process.CSVString += process.foundObjs[i][key]+',';
                } else {
                    process.CSVString += ',';
                }
            });
            process.CSVString = process.CSVString.substring(0, process.CSVString.length-1); //trim
            process.CSVString+="<br>"; //new line
        }


        console.log(`CSV string is: ${process.CSVString}`);
        process.outputFile = process.CSVString;
    }
}

server.initialize();