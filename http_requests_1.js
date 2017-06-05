var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

function getAndPrintHTMLChunks () {

  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
    console.log('Chunk Length:', data.length);
    });
    response.on('end', function(end){
      console.log('End');
    });
  });
 }

getAndPrintHTMLChunks();


