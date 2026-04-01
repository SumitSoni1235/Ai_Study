const express = require('express');
const routes = require('./src/routes/route');
const app = express();

app.use(express.json());
app.use('/api', routes);
module.exports = app;