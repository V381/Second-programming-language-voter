'use strict';
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const jsonUpdate = require('json-update');
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.set('port',  process.env.OPENSHIFT_NODEJS_PORT || 3000);
app.use(express.static(path.join(__dirname + '/../')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../' + 'index.html'));
});


app.get('/icons', (req, res) => {
    let data = fs.readFileSync("../icons.json");
    res.json(JSON.parse(data));
});

app.post('/score', (req, res) => {

    jsonUpdate.update('score.json', req.body)
    .then(() => {
        res.json("score.json");
    });

    // fs.writeFile("score.json", JSON.stringify(req.body), () => {
    //     console.log('Writen to file')
    // });
    res.sendStatus(200);
});

app.get('/icons_score', (req, res) => {
    let data = fs.readFileSync("score.json");
    res.json(JSON.parse(data));
});

app.listen(app.get('port'), server_ip_address);
