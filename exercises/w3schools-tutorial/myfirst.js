let http = require('http');
let dt = require('./myfirstmodule');
let url = require('url');

http.createServer( (req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write(`The date and time are currently: ${dt.myDateTime()}`);
    //res.write(req.url);
    let q = url.parse(req.url, true).query;
    let txt = q.year + " " + q.month;
    res.end(txt);

}).listen(8080);

