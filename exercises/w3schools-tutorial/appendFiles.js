let fs = require('fs');
// let http = require('http');

fs.appendFile('demoFile2.txt', 'Hello content!', err =>  {
    if (err) throw err;
    console.log('saved!');
})

// http.createServer((req, res) => {
//     fs.readFile('demofile1.html', (err, data) => {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);
