const http = require('http');
const Book = require('./book');
const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/books') {
        Book.getAll((books) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(books));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});