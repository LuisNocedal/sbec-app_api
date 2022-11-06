const express = require('express');
const cors = require('cors');
const birds = require('./birds_test.json');
const fs = require('fs');
const bodyParser = require('body-parser')

const port = 3000;
const app = express();
app.use(cors({
    origin: 'http://localhost:4200'
}));
app.use(bodyParser.json());

app.get('/',(req, res) => {
    res.send("Index");
});

app.get('/get-birds',(req, res) => {
    res.json({birds});
});

app.post('/set-birds', (req, res) => {
    const { birds } = req.body;
    const birdsJson = JSON.stringify(birds);

    fs.writeFile('birds_test.json', birdsJson, 'utf8', () => {});

    res.json({
        message: 'Registro exitoso'
    }); 
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});