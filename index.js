const { app } = require('./app.js');
const port = process.env.PORT || 3000;
const cors = require('cors');


app.use(cors())

app.listen(port, () => {
    console.log(`Spoiler: app was already listening at http://localhost:${port}`)
});
