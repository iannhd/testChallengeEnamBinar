const express = require("express")

const app = express()
const port = 3000
const routes = require('./routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(routes)

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.send("index home yeah yeah")
})

app.listen(port, () => {
    console.log(`Listening on yeah yeah ${port}`)
})