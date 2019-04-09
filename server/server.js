const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/../public/'));
app.use(bodyparser.json());


app.listen(3000, () => {
    console.log('listining to port 3000');
})