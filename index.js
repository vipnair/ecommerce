const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


app.listen(port, () => console.log(`starting server at ${port}`));
app.use(express.static('public'));
console.log("started")

