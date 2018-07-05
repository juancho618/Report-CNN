
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

let PythonShell = require('python-shell');

const app = express();
const port = 5050;


// require('child_process').exec(__dirname + '/tensorboard/runScript.bat', function (err, stdout, stderr) {
//     if (err) {
//         // Ooops.
//         // console.log(stderr);
//         return console.log(err);
//     }

//     // Done.
//     console.log(stdout);
// });

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
app.use('/animate', express.static(__dirname + '/node_modules/animate.css/'));

// app.use('/images', express.static(__dirname + '/public/img/'));
app.use('/font-awesome', express.static(__dirname + '/node_modules/font-awesome/'));
app.set('views', __dirname + '/views/');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// For views
app.get('/', (req,res) => {
    res.render('index');
});
app.get('/copy', (req,res) => {
    res.render('index-copy');
});

app.get('/models', (req,res) => {
    res.render('models');
})
app.get('/denoised', (req,res) => {
    res.render('denoised');
})
app.get('/papers', (req,res) => {
    res.render('papers');
})
app.get('/overview', (req,res) => {
    res.render('overview');
})
app.get('/latest', (req,res) => {
    res.render('latest');
})
app.get('/inferred', (req,res) => {
    res.render('inferred');
})
app.get('/architectures', (req,res) => {
    res.render('architecture');
})
app.get('/modelsOverview', (req,res) => {
    res.render('modelsOverview');
})
app.get('/vggResults', (req,res) => {
    res.render('vggResults');
})



app.get('/pdf', (req,res) => {
    const name = req.query.name;
    fs.readFile(`./papers/${name}.pdf`, function(err, data) {
        if (err) throw err; // Fail if the file can't be read.    
        res.writeHead(200, {'Content-Type': 'application/pdf'});
        res.end(data, 'binary');
    });
});



app.get('/loadImage', (req, res) => {
    const id = req.query.num;
    const name = req.query.name;
    const type = req.query.type;
    
    if (type){
        fs.readFile(`../Art-CNN/data/images/${type}/${name}.png`, function(err, data) { //add _
            if (err) throw err; // Fail if the file can't be read.        
            console.log('num', id);
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.end(data, 'binary');
        });    
    }
    else{
        fs.readFile(`../Art-CNN/data/images/${name}/${name}_${id}.png`, function(err, data) { //add _
            if (err) throw err; // Fail if the file can't be read.        
            console.log('num', id);
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.end(data, 'binary');
        });    
    }       
})

app.get('/publicReport', (req, res) => {
    const name = req.query.name;
    fs.readFile(`../Report-CNN/public/img/${name}`, function(err, data) { 
        if (err) throw err;      
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.end(data, 'binary');
    });       
})
app.get('/histograms', (req, res) => {
    const name = req.query.name;
    fs.readFile(`../Art-CNN/data/histograms/${name}.png`, function(err, data) { 
        if (err) throw err;      
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.end(data, 'binary');
    });       
})
app.get('/differencePIL', (req,res) => {
    const id = req.query.num;
    fs.readFile(`../Art-CNN/data/images/diffPIL/diffPIL_${id}.png`, function(err, data) {
        if (err) throw err; // Fail if the file can't be read.     
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.end(data, 'binary');
    });
})
app.get('/hourglass', (req,res) => {
    const id = req.query.num;
    fs.readFile(`../Art-CNN/data/images/hourglassDev18b/hourglassDev18b_${id}.png`, function(err, data) {
        if (err) throw err; // Fail if the file can't be read.     
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.end(data, 'binary');
    });
})
app.get('/1xDev18b', (req,res) => {
    const id = req.query.num;
    fs.readFile(`../Art-CNN/data/images/1xDev18b/1xDev18b_${id}.png`, function(err, data) {
        if (err) throw err; // Fail if the file can't be read.     
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.end(data, 'binary');
    });
})
app.get('/differenceGray', (req,res) => {
    const id = req.query.num;
    fs.readFile(`../Art-CNN/data/images/diffGray/diffGray_${id}.png`, function(err, data) {
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