import { join } from "path"

const homePage = (req, res) => {
    res.sendFile(join(process.cwd(), "views", "index.html"))
}

const aboutPage = (req, res) => {
    console.log(join(process.cwd(), "views", "about.html"))
    res.sendFile(join(process.cwd(), "views", "about.html"))
}

export { homePage, aboutPage }