const express = require("express");
const chalk = require("chalk");
const path = require("path");
const PORT = process.env.PORT || 3050;
const app = express();

app.use("/assets", express.static(path.resolve(__dirname, "./assets")));
app.use("/views", express.static(path.resolve(__dirname, "./views")));
app.set("view engine", "ejs");

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(chalk.bgBlueBright(`Server listening port: ${PORT}`));
});

app.get("/", (req, res) => {
    console.log(req.method, req.url);
    res.render("index", { title: "Works" });
});
