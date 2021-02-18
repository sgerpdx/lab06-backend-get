const dotenv = require('dotenv').config()
const express = require('express');
const { planets } = require('./data.js');
const app = express();
const port = process.env.PORT || 3000;


app.get('/planets', (req, res) => {
    res.json({ results: planets })
})

app.get('/planets/:id', (req, res) => {

    const id = Number(req.params.id);
    console.log(id);

    const specificPlanet = planets.find((planet) => planet.id === id);

    res.json({ results: specificPlanet })
})


module.exports = {
    app
}
