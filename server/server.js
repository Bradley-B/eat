const express = require('express');
// const path = require('path');
const app = express();
const port = 5680;

app.use(express.json());
// app.use(express.static(path.join(__dirname, 'build')));

const persistence = require('./persistence');
let db = new persistence();

app.get('/', (req, res) => {
    return res.send("hello")
});

app.get('/api/get/:person/', (req, res) => {
    db.getItem(req.params.person).then((result)=>{
        return res.send(result);
    }).catch(()=>{
        return res.sendStatus(404);
    });
});

app.put('/api/update/days/:person/', (req, res) => {
    //updates one or more days for :person
});

app.put('/api/update/notes/:person/', (req, res) => {
    // updates notes for :person
    if(!req.body.hasOwnProperty('notes') || typeof req.body.notes !== 'string') {
        return res.sendStatus(400);
    }

    db.updateNotes(req.params.person, req.body.notes).then(()=>{
        return res.sendStatus(204);
    }).catch(()=>{
        return res.sendStatus(404);
    });
});

db.init().then(()=>{
    app.listen(port, () => {
        console.log(`app listening at http://localhost:${port}`)
    });
});
