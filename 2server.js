var http = require('http');
var PORT = 7000;

var server = http.createServer(handleRequest);

function handleRequest(req, res,){
    res.end("it works! the path hit: " + req.url);
};
server.listen(PORT, function(){
    console.log("server listening on: http://localhost:" + PORT);
});



// -------------------------------------------------------------------------------------------------------------


var sPORT = 7500;


var wserver = http.createServer(manageRequest);


function manageRequest(req, res,){
    res.end("it works! the path hit: " + req.url);
};
wserver.listen(sPORT, function(){
    console.log("server listening on: http://localhost:" + sPORT);
});