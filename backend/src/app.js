const express = require('express');
const routes = require('./routes'); //./ é para diferencia q e um arquivo em vez de pacote
const cors = require('cors');
const {errors} = require('celebrate');
const app = express();

app.use(cors());
app.use(express.json()); //converte codigo json em objeto javascript
app.use(routes);
app.use(errors());



module.exports = app;