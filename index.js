const { app } = require('./app.js');
const port = process.env.PORT || 3000;


//console.log('fully installed and operational');

app.use(cors())