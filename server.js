const express = require('express');
const { movies } = require('./api/movies');

const port = 4000;

const app = express();

app.get('/api/movies', (req, res) => res.send(movies));

app.listen(port, () => console.log(`server listening on port ${port}`));
