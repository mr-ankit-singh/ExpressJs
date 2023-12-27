import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000
import route from './routes/route.js'
import { join } from "path"

// Load static files
// app.use(express.static("public"))
console.log(join(process.cwd(), "public"))

app.use(express.static(join(process.cwd() , "public")))
// Onlic specific folder
app.use(express.static(join(process.cwd() , "public/css")))
// Create virtual path
app.use("/static", express.static(join(process.cwd() , "public")))



// Load Router
app.use("/" , route)
app.get('/', (req, res) => {
    res.send("<h1>Hello, Welcome from this Side :)</h1>")
})



app.listen(PORT, () => {
    console.log(`Listening on http:localhost:${PORT}`)
})