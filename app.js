const express = require("express");
const path = require("path");
const app = express();

let publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));
app.listen(4000, () => console.log("Listening"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, ("./views/home.html")));
});
