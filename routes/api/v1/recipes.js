const router = require("express").Router()

const recipes = require("../../../data/recipes.json")

router.get("/", (req, res) => {
    const recipeSummaries = recipes.map(( {id, title, image, prepTime, difficulty }) => {
        return {id, title, image, prepTime, difficulty }
    })

    res.send(recipeSummaries)
})

router.post("/recipe/add", (req, res) => {
    const {title, image, ingredients, instructions, prepTime, difficulty } = req.body

    const id = recipes.length + 1
    const newRecipe = {id, title, image, ingredients, instructions, prepTime, difficulty}
    recipes.push(newRecipe)
    
    res.send(newRecipe)

})

router.get("/recipe/:id", (req, res) => {
    const { id } = req.params

    const found = recipes.find(recipe => recipe.id == id)
    res.send(found)
})

module.exports = router