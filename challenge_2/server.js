const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', (req, res) => {
    let indexPath = path.join(__dirname, '/client/index.html');
    res.sendFile(indexPath);
})

app.listen(port, () => {console.log(`Server listening on ${port}`)});