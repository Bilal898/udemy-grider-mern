
const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport');
const app = express()
const keys = require('./config/keys')
mongoose.connect(keys.mongoURI);
require('./models/User')
require('./services/passport')

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)

app.get('/', (req, res) => {
    res.send({ hi: 'sss334'})
})
app.get('/google', (req, res) => {
    res.send({ hi: 'google'})
})





const PORT = process.env.PORT || 5000
app.listen(PORT)