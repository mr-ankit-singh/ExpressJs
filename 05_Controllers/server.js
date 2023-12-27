import express from 'express'
const app = express()
import student from "./routes/studentRoutes.js"
const PORT = process.env.PORT || 3000

app.use("/student", student)

app.get('/', (req, res) => {
    res.send("<h1>Hello, Welcome from this Side :)</h1>")
})



app.listen(PORT, () => {
    console.log(`Listening on http:localhost:${PORT}`)
})