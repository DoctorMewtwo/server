var http = require("http");

var port1 = 7500;
var port2 = 7000;


function handleRequest(request, response) {
    
    response.end("It Works!! Path Hit: " + request);
    if(request.url === "/")
    {
        
    }
}


var server = http.createServer(handleRequest);

server.listen(port1 , function () {

    console.log("Server listening on: http://localhost:" + port1)
    console.log("You look really good today");
})


server.listen(port2 , function() {
    console.log("Server listening on: http://localhost:" + port2)
    console.log("Im over being nice");
})