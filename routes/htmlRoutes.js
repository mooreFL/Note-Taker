const path = require("path");

module.exports = (app) => {
    app.get("/notes", (req, res) => {
        //when visiting "notes" send file as result
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    }) 
//for anything else send back index.html
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })
}