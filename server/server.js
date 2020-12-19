const express = require('express');
const storage = require('node-persist');
const app = express();
const port = 5680;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/get/:person/', (req, res) => {
    //returns current week for :person
});

app.put('/api/update/days/:person/', (req, res) => {
    //updates one or more days for :person
});

app.put('/api/update/notes/:person/', (req, res) => {
    //updates notes for :person
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});
