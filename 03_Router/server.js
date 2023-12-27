import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000

// Import Routes
import studentRoute from "./routes/Student.js"
import teacherRoute from "./routes/Teacher.js"

// Load Router module
app.use('/student', studentRoute)
app.use('/teacher', teacherRoute)


app.listen(PORT, () => {
    console.log(`Listening on http:localhost:${PORT}`)
})