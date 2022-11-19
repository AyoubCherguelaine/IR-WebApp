const express = require("express")
const config = require("./controllers/config")
port  = process.env.port || 3000
app = express()



app.get('/config', (req, res) => {
    res.render("conf");

});

app.post('/config', (req, res) => {
    let body = req.body
    config.url=body.url
    res.end()
});




app.listen(port, () => {
    console.log(port);
});