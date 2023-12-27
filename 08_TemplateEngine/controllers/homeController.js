const homeController = (req,res) => {
    // Send index file and local Variable
    res.render("index" , { "name" : "Ankit Singh"})
}

export { homeController }