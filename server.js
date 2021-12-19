const express = require("express");
const {join} = require("path");
const hbs = require('hbs');
const getMarketData = require("./util");

const publicDirPath = join(__dirname, './public');
const viewsPath = join(__dirname, "./views");
const partialsPath = join(__dirname, "./partials");

const app = express();
app.use(express.static(publicDirPath));

app.set('port', (process.env.PORT || 3000));

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
    getMarketData((error, data) => {
        if (error) {
            return res.send({ error })
        }
        res.render('table', {data: data.data.markets});

    })
})

app.get("/*", host, (req, res) => {
    res.send("Invalid url!!");
})

app.listen(app.get('port'));