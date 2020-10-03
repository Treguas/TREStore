const express = require('require')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    noCache: true
})
//Rotas
server.get("/", function(req, res) {
    return res.render("parts/layout")

})

server.listen(5000, function() {

    console.log('server is running')

})