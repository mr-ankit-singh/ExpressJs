import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000

import route from './routes/route.js'

// Set Directory for EJS
app.set("views" , "./views") // By Default
// Set Tamplate Engine
app.set("view engine" , "ejs")


// Load Routes
app.use("/" , route)


app.get('/', (req, res) => {
    res.send("<h1>Hello, Welcome from this Side :)</h1>")
})

app.listen(PORT, () => {
    console.log(`Listening on http:localhost:${PORT}`)
})