const express = require('express')
require('dotenv').config()
const database = require('./db/conection')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json({extended:true}))

app.use('/', require("./routes/index"))
app.use('/announcement', require("./routes/announcement"))


database()
    .then(info=>{
        console.log(`Connected to ${info.host}:${info.port}/${info.name}`)
        app.listen(process.env.PORT, () => 
            console.log(`Example app listening on port ${process.env.PORT}!`)
        ) 
    })
    .catch(()=>{
        console.error('unable to conect to db\n\n')
    })


