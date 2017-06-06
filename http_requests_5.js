var https = require('https');

var buffer = " ";

var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
  };

function getHTML (options, callback) {

  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      buffer += data;

    });

    response.on('end', function(){
      callback(buffer);
    });
  });
}
function printHTML (html) {
console.log(html);
}

getHTML (requestOptions, printHTML);
