const http = require('http')  // use require to import the Node.js http package

const hostname = '127.0.0.1'   // set constants
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname, () => {
  // Tell the user where to find the app (use backtics with variables)
  console.log(`Server running at http://${hostname}:${port}/`)
})