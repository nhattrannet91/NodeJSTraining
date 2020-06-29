const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../public/templates/views"))
hbs.registerPartials(path.join(__dirname, "../public/templates/partials"));
app.use(express.static(path.join(__dirname, "../public")));

app.get("", (req, res) => {
    res.render("index", {
        title: "Weather",
        createdBy: "Nhat Tran"
    });
});

app.get("/weather", (req, res) => {
    if(!req.query.address){
        return res.send("The address was not provided");
    }
    res.send({
        address: req.query.address
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Page",
        createdBy: "Nhat Tran"
    });
});

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help Page",
        createdBy: "Nhat Tran"
    });
});

app.listen(3000, () => { 
    console.log("Server is up at port 3000");
})