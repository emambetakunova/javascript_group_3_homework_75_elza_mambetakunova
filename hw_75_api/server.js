const express = require('express');
const app = express();
const code = require('./code');
const cors = require('cors');
const port = 8000;

app.use(express.json());

app.use(cors());

app.use('/', code);

app.listen(port, () => {
    console.log(`Server started on ${port} port`);
});