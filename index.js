require('dotenv').config();
const PORT=process.env.PORT || 3000;
const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end(`Hello ${process.env.HELLO}`);
});

server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}/`)
})
