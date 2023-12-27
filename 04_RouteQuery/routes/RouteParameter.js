import express from "express"
const router = express.Router()


// #__ Route Parameter __#

// http://localhost:3000/student/delete/21
router.get('/student/delete/:id', (req, res) => {
    console.log(req.params)
    res.send(`Student deleted :  ${req.params.id}`)
})

// http://localhost:3000/product/facewash/001
router.get('/product/:category/:id', (req, res) => {
    console.log(req.params)
    res.send(`Product Detail => ID : ${req.params.id} , Category : ${req.params.category}`)
})

// http://localhost:3000/population/asian/102023654
router.get('/population/:category/:count', (req, res) => {
    console.log(req.params)
    const { category, count } = req.params
    res.send(`Product Detail => Category : ${category} , Count : ${count}`)
})

// http://localhost:3000/product/order/2023/and/november
router.get('/product/order/:year/and/:month', (req, res) => {
    console.log(req.params)
    const { year, month } = req.params
    res.send(`Product Detail => Year : ${year} and Month : ${month}}`)
})

// http://localhost:3000/train/delhi-patna
router.get('/train/:from-:to', (req, res) => {
    console.log(req.params)
    const { from, to } = req.params
    res.send(`Train from ${from} to ${to}}`)
})

// http://localhost:3000/location/jharkhand.dhanbad
router.get('/location/:from.:to', (req, res) => {
    console.log(req.params)
    const { from, to } = req.params
    res.send(`Location from ${from} to ${to}}`)
})


// Regular Expression

router.get("/student/delete/:id([o-9]{2})", (req, res) => {
    res.send("We fixed the id with onlr two charecter")
})

//Type will be any thing
router.get("/:type(post|article)/:id", (req, res) => {
    console.log(req.params)
    const { type, id } = req.params
    res.send(`Type : ${type} and ID : ${id}`)
})

// Restrict type
router.get("/:type(post|article)/:id", (req, res) => {
    console.log(req.params)
    const { type, id } = req.params
    res.send(`Type : ${type} and ID : ${id}`)
})
export default router;


// Query String

// http://localhost:3000/product/cat?category=mobile
router.get("/product/cat/", (req, res) => {
    console.log(req.query)
    const { category } = req.params
    res.send(`Category : ${category}`)
})