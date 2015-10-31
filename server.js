var express = require('express');
var app = express();


app.listen("8080", function() {
  console.log("server starting on port 8080");
});

app.use(express.static('./'));
