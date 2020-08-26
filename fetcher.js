const a = process.argv.slice(2);
const fs = require('fs');
const request = require('request');

request (a[0], (error, response, body) => {
  //console.log('error:', error); 
  //console.log('statusCode:', response && response.statusCode);
  //console.log('body:', body); 

  fs.writeFile( a[1] , body , {flag: 'w'} , function (err) {
    if (err) return console.log(err);
    var stats = fs.statSync(a[1]);
    var fileSizeInBytes = stats["size"];
    console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${a[1]}`);
  });
})






