const express = require("express")
const bodyParser = require("body-parser")
const config = require("./controllers/config")
const docs = require("./controllers/doc")


port  = process.env.port || 3000
app = express()


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/config', (req, res) => {
    res.render("conf");

});

app.post('/config', (req, res) => {
    let body = req.body
    config.url=body.url
    res.end()
});

app.use("/docs",docs.router);


app.listen(port, () => {
    console.log(port);
});

parseInt