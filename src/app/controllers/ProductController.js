const Category = require('../models/Category')

module.exports = {

    create(req, res) {
        //PEGAR CATEGORIAS modelo PROMISSES
        Category.all().then(function(results) {

            const categories = results.rows

            return res.render("products/create.njk", { categories })
            }).catch(function(err) {
            throw new Error (err)
        })        
    },
    post(req, res) {
    // LOGICA DE SALVAR
 }
}