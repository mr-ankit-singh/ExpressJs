const aboutController = (req, res) => {
    // Send index file and local Variable
    res.render("index", { "about": "I'm Ankit Singh" })
}

export { aboutController }