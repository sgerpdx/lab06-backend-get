const express = require('express');
//const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Hello World!')
})


module.exports = {
    app
}