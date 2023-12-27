import express from 'express'
const app = express()


const PORT = process.env.PORT || 3000

// Routes
app.get('/', (req, res) => {
    res.send("<h1>Get method :)</h1>")
})
app.post('/', (req, res) => {
    res.send("Post Method")
})

// Set prefixes
app.all('/api/*', (req, res) => {
    res.send("Api Page")
})

// String Path
app.get('/contact', (req, res) => {
    res.send("Contact Page")
})
app.get('/about', (req, res) => {
    res.send("About Page")
})
app.get('/cart', (req, res) => {
    res.send("Cart Page")
})


// One callback
app.get('/onecb', (req, res) => {
    res.send("One callback")
})

// More than One callback
app.get('/morecb', (req, res, next) => {
    console.log("One callback ")
    next()
}, (req, res) => {
    console.log("Second Callback")
    res.send("More than one callBack")
})

// Array of calback
const cb1 = (req, res, next) => {
    console.log("First Callback")
    next()
}
const cb2 = (req, res, next) => {
    console.log("Second Callback")
    next()
}
const cb3 = (req, res, next) => {
    console.log("Third Callback")
    res.send("Array of callback")
}
app.get('/arrayofcb', [cb1, cb2, cb3])

// Chain route callback
// We can handle different method with single route using app.route()
app.route('/student')
    .all((req, res, next) => {
        console.log("First run thid for all HTTP methods")
        next()
    })
    .get((req, res) => {
        console.log("GET Method")
        res.send("All Student")
    })
    .post((req, res) => {
        console.log("POST Method")
        res.send("Add new Student")
    })
    .put((req, res) => {
        console.log("PUT Method")
        res.send("Update Student")
    })

// For Page Not Found
app.all('*', (req, res) => {
    res.send("Page NoT FounD !! (404)")
})


app.listen(PORT, () => {
    console.log(`Listening on http:localhost:${PORT}`)
})