
const express = require('express');
const fs = require('fs');
const path = require('path');

let PythonShell = require('python-shell');

const app = express();
const port = 5050;

app.set('view engine', 'ejs');

//angular material
app.use('/angular-material', express.static(__dirname + '/node_modules/angular-material/'));
app.use('/scripts', express.static(__dirname + '/node_modules/'));
// app.use('/images', express.static(__dirname + './VIS_crop_registered_0.png'));
//static elements folder
app.use('/public', express.static(__dirname + '/public/'));
app.set('views', __dirname + '/views/');

app.get('/', (req,res) => {
    res.render('index');
})

app.get('/imageVIS', (req,res) => {
    const id = req.query.num;
    console.log('number', id);
    fs.readFile(`../Art-CNN/data/images/VIS_crop_registered/VIS_crop_registered_${id}.png`, function(err, data) {
        if (err) throw err; // Fail if the file can't be read.        
        console.log(data);
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.end(data, 'binary');
    });
})

app.get('/imageIRR', (req,res) => {
    const id = req.query.num;
    fs.readFile(`../Art-CNN/data/images/IRR_crop_registered/IRR_crop_registered_${id}.png`, function(err, data) {
        if (err) throw err; // Fail if the file can't be read.        
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.end(data, 'binary');
    });
})

app.get('/imageNoPooling', (req,res) => {
    const id = req.query.num;
    fs.readFile(`../Art-CNN/data/images/noPooling/noPooling_${id}.png`, function(err, data) {
        if (err) throw err; // Fail if the file can't be read.    
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.end(data, 'binary');
    });
})
app.get('/imageNoPoolingx3', (req,res) => {
    const id = req.query.num;
    fs.readFile(`../Art-CNN/data/images/noPoolingx3/noPoolingx3_${id}.png`, function(err, data) {
        if (err) throw err; // Fail if the file can't be read.     
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.end(data, 'binary');
    });
})
app.get('/dialog', (req,res) => {
    res.sendFile(__dirname + '/views/imgDialog.html')
})
app.get('/data', (req, res) => {
    const inputPath = "./data.csv";
    fs.readFile(inputPath, 'utf8', function (err, data) {
    var dataArray = data.split(/\r?\n/);  //Be careful if you are in a \r\n world...
    res.send(dataArray)
    // Your array contains ['ID', 'D11', ... ]
    })
})

app.get('/code', (req, res) => {
    res.render('code');
});

app.listen(port, () =>{
    console.log(`the server is running in the port ${port}`)
})