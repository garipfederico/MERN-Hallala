const express = require('express');
const app = express();
const cors = require('cors');

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/empresas', require('./routes/empresas'))
app.use('/api/productos', require('./routes/productos'))

module.exports = app
