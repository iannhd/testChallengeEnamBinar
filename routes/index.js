const express = require('express')
const route = express.Router()
const visitorRoute = require('./visitorRoutes')

route.get('/', (req, res) => {
    res.send("yeah yeah index routes")
})

route.use('/visitor', visitorRoute)

module.exports = route