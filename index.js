const express = require('express')
const cors = require('cors')
const config = require('config')
const mongoose = require('mongoose')
const userPage = require('./routes/user.route')


require('./db')


const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use('/user',userPage)

app.set('view engine','pug')
app.set('views','./views')


app.get('/',(req,res)=>{
    res.send('PLUMBING OKK')
})
app.get('*',(req,res)=>{
    res.status(404).send('SERVER NOT FOUND')
})

const port = config.get('port') || 8080
mongoose.connection.once('open',()=>{
    app.listen(port,()=>{
        console.log(`Server running on port ${port}`)
    })

    console.log('DB CONNECTED')
})
