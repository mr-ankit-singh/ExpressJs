import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000

// Import Routes
import routeParameter from './routes/RouteParameter.js'
app.use('/', routeParameter)


// app.params() => Called only Once
app.param(("/id", (req, res, next, id) => {
    console.log(`Id : ${id}`)
    next()
}))
app.get("/used/:id", (req, res) => {
    console.log("This id user ID path")
    res.send("Response OK")
})


app.get('/', (req, res) => {
    res.send("<h1>We are learning Route Parameter and Query string :)</h1>")
})

app.listen(PORT, () => {
    console.log(`Listening on http:localhost:${PORT}`)
})


