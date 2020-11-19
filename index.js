const express = require('express');
const app = express();
const port = process.env.PORT || 80;
app.listen(port);

app.use(express.static('public'))
 


