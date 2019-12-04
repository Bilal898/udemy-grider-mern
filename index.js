
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const keys = require('./config/keys')
mongoose.connect(keys.mongoURI);
require('./models/User')
require('./services/passport')

require('./routes/authRoutes')(app)

app.get('/', (req, res) => {
    res.send({ hi: 'sss334'})
})
app.get('/google', (req, res) => {
    res.send({ hi: 'google'})
})





const PORT = process.env.PORT || 5000
app.listen(PORT)