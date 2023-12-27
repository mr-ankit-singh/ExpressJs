import express from 'express'
import stuRouter from './routes/route.js'
const app = express()
const PORT = process.env.PORT || 3000

app.use("/student", stuRouter)

app.get('/', (req, res) => {
    res.send("<h1>Hello, Welcome from this Side :)</h1>")
})



app.listen(PORT, () => {
    console.log(`Listening on http:localhost:${PORT}`)
})