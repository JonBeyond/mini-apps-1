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
    CSV: () => {

/*************** CSV DETAILS ***************
 *
 * The server must flatten the JSON hierarchy, mapping each item/object in
 * the JSON to a single line of CSV report (see included sample output),
 * where the keys of the JSON objects will be the columns of the CSV report.

 * You may assume the JSON data has a regular structure and hierarchy
 * (see included sample file). In other words, all sibling records at a
 * particular level of the hierarchy will have the same set of properties,
 * but child objects might not contain the same properties. In all cases,
 * every property you encounter must be present in the final CSV output.

 * You may also assume that child records in the JSON will always be
 * in a property called `children`.
 *
 ******************************************/

        let object = JSON.parse(process.inputFile); //convert BUFFER to string?

        //var buf = Buffer.from(JSON.stringify(obj))
        //now need to process the string.
        console.log('converting the following object to .csv:');
        console.log(object);
        let csvString = '';
        let keys = [];
        let objs = []; //store all objs.

        let obj = {};//temp obj

        for (let key in object) {
            if (key !== 'children') {
                keys.push(key);
                obj.key = object[key];
            }
        }
        objs.push(obj); //store first line

        var depthTraverser = (children) => { //send the array of children.  go depth first (?)
            for (let i = 0; i < children.length; i++) {
                obj = {}; //create new temp obj
                for (let key in children[i]) {
                    if (!keys.includes(key) && key !== 'children') { //look for new keys
                        keys.push(key);
                    }
                    obj.key = object[key];  //store for later
                }
                objs.push(obj); //see ya!
                if (children[i].children.length > 0) {
                    depthTraverser(children[i].children); //send child array
                }
            }
        }

        if (object.children.length > 0) {
            depthTraverser(object.children); //send the child array
        }

        //***** HEADER *****/
        keys.forEach((key) => {
            csvString += key+",";
        });
        csvString.substring(0, csvString.length-1); //clumsily remove trailing comma
        csvString+="<br>";  //add html new line.

        //***** ENTRY LINES *****/
        for (let i = 0; i < objs.length; i++) {
            keys.forEach((key) => {
                if(objs[i].hasOwnProperty(key)) {
                    csvString += objs[i][key]+',';
                } else {
                    csvString += ',';
                }
            });
            csvString.substring(0, csvString.length-1); //trim
            csvString+="<br>"; //new line
        }

        console.log(csvString);

        console.log(`CSV string is: ${csvString}`);
        process.outputFile = csvString;
        //save it under process.outputFile
    }
}

server.initialize();