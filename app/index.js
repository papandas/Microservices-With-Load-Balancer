const app = require("express")();

let appid = 3000;
if (process.env.APPID) {
    appid = process.env.APPID;
}

app.get("/", (req, res) => {
    res.send(`appid: ${appid} home page: says hello!`)
})

app.get("/home", (req, res) => {
    res.send(`appid: ${appid} home page: says hello!`)
})

app.get("/blog", (req, res) => {
    res.send(`appid: ${appid} blog page: hello blog!`)
})

app.get("/contact", (req, res) => {
    res.send(`appid: ${appid} contact us page: hello contact us!`)
})

app.get("/admin", (req, res) => {
    res.send(`appid: ${appid} ADMIN page: Hello World!`)
})

app.listen(appid, () => {
    console.log(`App is listening on ${appid}`)
})