const express = require('express');
const { planets } = require('./data.js');
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.json({ greeting: 'Hello World!' })
})

app.get('/astronomy', (req, res) => {
    res.json({ robot_message: 'comet-incoming' })
})

app.get('/planets', (req, res) => {
    res.json({ results: planets })
})


module.exports = {
    app
}