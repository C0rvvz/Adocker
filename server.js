const http = require("http"); 
const port = 3000; 
const server = http.createServer((req, res) => { 
res.writeHead(200, { "Content-Type": "text/plain" });
res.end("Hello, Docker!, este es el primer cambio con Git");
res.end("otro mensaje");
}); 
server.listen(port, () => { 
console.log(`Server running at http://localhost:${port}`); 
});
