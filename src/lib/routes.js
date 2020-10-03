const express = require ('express')
const routes = express.Router()

routers.get('/', function(req, res) {
    return res.render("layout.njk")
})

module.exports = routes