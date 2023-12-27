import express from "express"
const router = express.Router()

// All Student routes
router.get('/all', (req, res) => {
    res.send("All Students")
})
router.post('/create', (req, res) => {
    res.send("New student Created")
})
router.put('/update', (req, res) => {
    res.send("Update student detail")
})
router.delete('/update', (req, res) => {
    res.send("Delete student detail")
})
router.all('*', (req, res) => {
    res.send("Page NOt Found")
})

export default router;