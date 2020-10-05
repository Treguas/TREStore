const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

server.use(express.static('public'))
server.use(express.urlencoded({ extended: true}))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("src/app/views", {
    express: server,
    noCache: true
})

//server listen the port 5000
server.listen(5000, function() {

    console.log('server is running')

})