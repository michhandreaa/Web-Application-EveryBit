const http = require('http');
const port = 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {

  console.log(req.url);

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  // routing
  let path = './model/';
    switch(req.url){
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/accessories':
            path += 'accessories.html';
            res.statusCode = 200;
            break;
        case '/computers':
            path += 'computers.html';
            res.statusCode = 200;
            break;
        case '/contact':
            path += 'contact.html';
            res.statusCode = 200;
            break;
        case '/demo':
            path += 'demo.html';
            res.statusCode = 200;
            break;
        case '/gadgets':
            path += 'gadgets.html';
            res.statusCode = 200;
            break;
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/login':
            path += 'login.html';
            res.statusCode = 200;
            break;
        case '/mycart':
            path += 'mycart.html';
            res.statusCode = 200;
            break;
        case '/phones':
            path += 'phones.html';
            res.statusCode = 200;
            break;
        case '/products':
            path += 'products.html';
            res.statusCode = 200;
            break;
        case '/register':
            path += 'register.html';
            res.statusCode = 200;
            break;
        case '/tablets':
            path += 'tablets.html';
            res.statusCode = 200;
            break;
        default:
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
        console.log(err);
        res.end();
        }
        res.end(data);
    });

});

server.listen(port, 'localhost', () => {
  console.log('listening for requests on port' + port);
});