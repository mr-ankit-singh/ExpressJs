import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000
import route from './routes/route.js'
import loggerMiddleware from './middlewares/loggerMiddleware.js';

// Application Level middleware for all routes
app.use(loggerMiddleware);
app.use("/about" , loggerMiddleware);

// Set Tamplate Engine
app.set("view engine", "ejs")
// Load Routes
app.use("/", route)


app.get('/', (req, res) => {
    res.send("<h1>Hello, Welcome from this Side :)</h1>")
})


app.listen(PORT, () => {
    console.log(`Listening on http:localhost:${PORT}`)
})