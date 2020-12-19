const express = require('express');
const app = express();
const port = 5680;

const persistence = require('./persistence');
let db = new persistence();

app.get('/', (req, res) => {
    db.getThing1().then((result)=>{
        res.send(result);
    });
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

db.init().then(()=>{
    app.listen(port, () => {
        console.log(`app listening at http://localhost:${port}`)
    });
});
