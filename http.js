const http = require('http')

const server = http.createServer((req, res)=>{
if(req.url === '/'){
    res.end('welcome to homepage')
}
if(req.url === '/about'){
    res.end('about section')
}
res.end(
    `<h1>Oops! page not found...</h1>
    <a href ="/">back home</a>`
)
})

server.listen(5000)