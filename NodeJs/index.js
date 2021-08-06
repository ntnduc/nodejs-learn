var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(request, response) {
    response.send('Hello World');
});

app.listen(port, () => console.log('server listening on port ' + port));