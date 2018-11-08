const express=require('express');
const app=express();

//app.use(express.static('./public'));

app.use('/api', require('./API/index'));


/*
app.use('/Index.html', function(request,response){
		 console.log("Entering helloworld...");

		 var fs = require('fs');
		 var url = require('url');
		 var q = url.parse(request.url, true);

		 var filename="./Index.html"
		 var filename1=q.pathname;

		 fs.readFile(filename, function(err, data) {
              if (err) {
                    response.setHeader(404, {'Content-Type': 'text/html'});
	                console.log('Client Request Unable to proceed for '+filename1);
                    return response.end("404 Not Found");
                  }
              else{
                    console.log('Client Request about to proceed for '+filename1);
                    response.setHeader('Content-Type','text/html');
                    response.send(data);
                  }
          });
	});

app.use('/Profile.html', function(request,response){
		 console.log("Entering helloworld...");

		 var fs = require('fs');
		 var url = require('url');
		 var q = url.parse(request.url, true);

		 var filename="./Profile.html"
		 var filename1=q.pathname;

		 fs.readFile(filename, function(err, data) {
              if (err) {
                    response.setHeader(404, {'Content-Type': 'text/html'});
	                console.log('Client Request Unable to proceed for '+filename1);
                    return response.end("404 Not Found");
                  }
              else{
                    console.log('Client Request about to proceed for '+filename1);
                    response.setHeader('Content-Type','text/html');
                    response.send(data);
                  }
          });
	});

app.use('/Create.html', function(request,response){
		 console.log("Entering helloworld...");

		 var fs = require('fs');
		 var url = require('url');
		 var q = url.parse(request.url, true);

		 var filename="./Create.html"
		 var filename1=q.pathname;

		 fs.readFile(filename, function(err, data) {
              if (err) {
                    response.setHeader(404, {'Content-Type': 'text/html'});
	                console.log('Client Request Unable to proceed for '+filename1);
                    return response.end("404 Not Found");
                  }
              else{
                    console.log('Client Request about to proceed for '+filename1);
                    response.setHeader('Content-Type','text/html');
                    response.send(data);
                  }
          });
	});

 app.use('/Update.html', function(request,response){
		 console.log("Entering helloworld...");

		 var fs = require('fs');
		 var url = require('url');
		 var q = url.parse(request.url, true);

		 var filename="./Update.html"
		 var filename1=q.pathname;

		 fs.readFile(filename, function(err, data) {
              if (err) {
                    response.setHeader(404, {'Content-Type': 'text/html'});
	                console.log('Client Request Unable to proceed for '+filename1);
                    return response.end("404 Not Found");
                  }
              else{
                    console.log('Client Request about to proceed for '+filename1);
                    response.setHeader('Content-Type','text/html');
                    response.send(data);
                  }
          });
	});

  app.use('/View.html', function(request,response){
		 console.log("Entering helloworld...");

		 var fs = require('fs');
		 var url = require('url');
		 var q = url.parse(request.url, true);

		 var filename="./View.html"
		 var filename1=q.pathname;

		 fs.readFile(filename, function(err, data) {
              if (err) {
                    response.setHeader(404, {'Content-Type': 'text/html'});
	                console.log('Client Request Unable to proceed for '+filename1);
                    return response.end("404 Not Found");
                  }
              else{
                    console.log('Client Request about to proceed for '+filename1);
                    response.setHeader('Content-Type','text/html');
                    response.send(data);
                  }
          });
	});

  app.use('/Board.html', function(request,response){
		 console.log("Entering helloworld...");

		 var fs = require('fs');
		 var url = require('url');
		 var q = url.parse(request.url, true);

		 var filename="./View.html"
		 var filename1=q.pathname;

		 fs.readFile(filename, function(err, data) {
              if (err) {
                    response.setHeader(404, {'Content-Type': 'text/html'});
	                console.log('Client Request Unable to proceed for '+filename1);
                    return response.end("404 Not Found");
                  }
              else{
                    console.log('Client Request about to proceed for '+filename1);
                    response.setHeader('Content-Type','text/html');
                    response.send(data);
                  }
          });
	});


*/

const server=app.listen(8080, function(){
          let host=server.address().address;
          let port=server.address().port;
          console.log("server listening at http://"+host+":"+port+"/");
});