const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express()
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/api/auth', routes.auth)
app.use('/api/goods', routes.goods)
mongoose
    .connect(
        'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false',
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log('BD conncted...')
    })
    .catch(error => {
        console.log(error)
    })

app.listen(5000, () => console.log(`Server started http://localhost:5000`))
