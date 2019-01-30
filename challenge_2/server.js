const express = require('express');
const app = express();
const path = require('path');

/************************* CONTROLLER *************************/

var server = {
    port: 3000,
    initialize: () => {
        server.watch(); //open server
        server.serveClient(); //listen for HTML GET
        server.receiveFile(); //listen for POST
        server.returnFile(); //listen for a FILE GET
    },
    watch: () => {
        app.listen(server.port, () => {console.log(`Server listening on ${server.port}`)});
    },
    serveClient: () => {
        app.get('/', (req, res) => {
            app.use(express.static(`${__dirname}/client`));
            res.sendFile(path.join(__dirname, '/client/index.html'), (err) => {
                if (err) {
                    console.log(err);
                }
            });
        })
    },
    receiveFile: () => {
        app.post('/submit', (req, res) => {
            req.on('data', (data) => { //NOTE: .on is asynchronous
                process.inputFile = data;
                process.CSVParams(); //create required items for the CSV generation
                process.processCSV(); //generate the CSV
                res.setHeader('content-type', 'application/json');
                res.statusCode = 201; //meh.... this is forced
                res.end();
            });
        })
    },
    returnFile: () => {
        app.get('/getfile', (req, res) => {
            res.json(process.outputFile);
            res.end();
        })
    }
}

/************************* STATE *************************/

var process = {
    inputFile: null,
    outputFile: null,
    foundKeys: [],
    foundObjs: [],
    CSVString: '',
    CSVParams: () => { //this function processes the input file into easily parsable, flat objects
        process.CSVString = ''; //reset
        process.foundObjs =[]; //reset
        process.foundKeys = ['#']; //reset
        let count = 0;
        let object = JSON.parse(process.inputFile);

        //*************** process the parent object ***************/
        let obj = {};
        for (let key in object) {
            if (key !== 'children') {
                process.foundKeys.push(key);
                obj[key] = object[key]; //essentially, flattened the obj and stored it
            }
        }
        obj['#'] = count;
        count++;
        process.foundObjs.push(obj);

        //********* process all children objects recursively *********/
        var depthTraverser = (children) => { //send the array of children.  go depth first (?)
            for (let i = 0; i < children.length; i++) {
                let obj = {};
                for (let key in children[i]) {
                    if (!process.foundKeys.includes(key) && key !== 'children') { //look for new keys
                        process.foundKeys.push(key);
                    }
                    if (key !== 'children') {
                        obj[key] = children[i][key]; //create flattened obj
                    }
                }
                obj['#'] = count;
                count++;
                process.foundObjs.push(obj);

                if (children[i].children.length > 0) {
                    depthTraverser(children[i].children); //send any children
                }
            }
        }
        if (object.children.length > 0) {
            depthTraverser(object.children); //send the child array
        }
    },
    processCSV: () => {
        //*************** COLUMN HEADERS ***************/
        process.foundKeys.forEach((key) => {
            process.CSVString += key+",";
        });
        process.CSVString = process.CSVString.substring(0, process.CSVString.length-1); //clumsily remove trailing comma
        process.CSVString+="<br>";  //add html new line.

        //*************** GENERATE EACH ROW ***************/
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
        process.outputFile = process.CSVString;
    }
}

server.initialize();