const express = require('express');
const router = require('./route');
const app = express();
app.use(router);
app.listen(8080, () => console.log('start on port 8080'));
module.exports = app;
