
const express = require('express');
const fs = require('fs');
const path = require('path');

let PythonShell = require('python-shell');

const app = express();
const port = 6000;

app.set('view engine', 'ejs');

//angular material
app.use('/angular-material', express.static(__dirname + '/node_modules/angular-material/'));
app.use('/scripts', express.static(__dirname + '/node_modules/'));

//static elements folder
app.use('/public', express.static(__dirname + '/public/'));
app.set('views', __dirname + '/views/');

app.get('/', (req,res) => {
    res.render('index');
})

app.get('/image', (req,res) => {

    PythonShell.run('../Art-CNN/readImage.py', function (err, results) {
        if (err) throw err;
    //     const res = results[0];
    //     if (res > 0.5) {
    //         console.error(`${pdf} is a corrupted file!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);
    //     }
    //     else{
    //         console.log(`${pdf} is a good file`);
    //     }
    //   });
    
    });
    res.send('jojo');
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

app.listen(port, () =>{
    console.log(`the server is running in the port ${port}`)
})