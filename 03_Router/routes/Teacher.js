import express from "express"
const router = express.Router()

// All Teacher routes
router.get('/all', (req, res) => {
    res.send("All Teachers")
})
router.post('/create', (req, res) => {
    res.send("New Teacher Created")
})
router.put('/update', (req, res) => {
    res.send("Update Teacher detail")
})
router.delete('/update', (req, res) => {
    res.send("Delete Teacher detail")
})
router.all('*', (req, res) => {
    res.send("Page NOt Found")
})


export default router;