const express = require('express');
const app = express();
var port = process.env.PORT || 8080;
//app.listen(port);

app.use(express.static('public'))
 


