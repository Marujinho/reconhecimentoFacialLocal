const express = require('express');
const port = 3000;
const app = express();

// const cors = require('cors')({origin: true});

app.use(express.static(__dirname));

app.listen(port, function () {
  console.log("Server is running on " + port + " port");
});

app.get('/', function(req,res) {
  res.sendFile(__dirname + '/index.html');
});
