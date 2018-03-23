
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

let PythonShell = require('python-shell');

const app = express();
const port = 5050;

app.set('view engine', 'ejs');

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//angular material
app.use('/angular-material', express.static(__dirname + '/node_modules/angular-material/'));
app.use('/scripts', express.static(__dirname + '/node_modules/'));
// app.use('/images', express.static(__dirname + './VIS_crop_registered_0.png'));
//static elements folder
app.use('/public', express.static(__dirname + '/public/'));
// app.use('/images', express.static(__dirname + '/public/img/'));
app.use('/font-awesome', express.static(__dirname + '/node_modules/font-awesome/'));
app.set('views', __dirname + '/views/');

// For views
app.get('/', (req,res) => {
    res.render('index');
});

app.get('/models', (req,res) => {
    res.render('models');
})
app.get('/imageVIS', (req,res) => {
    const id = req.query.num;
    console.log('number', id);
    fs.readFile(`../Art-CNN/data/images/VIS_crop_registered/VIS_crop_registered_${id}.png`, function(err, data) {
        if (err) throw err; // Fail if the file can't be read.        
        
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

app.post('/fileCode', (req, res) => {    
    filePath = req.body.route;    
    fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});


app.listen(port, () =>{
    console.log(`the server is running in the port ${port}`)
})