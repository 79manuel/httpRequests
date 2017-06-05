var https = require('https');




var buffer = " ";

var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
  };

function getAndPrintHTML (options) {

  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      buffer += data;
      console.log(buffer);
    });

    response.on('end', function(end){
      console.log('End');
    });
  });
}

getAndPrintHTML (requestOptions);
