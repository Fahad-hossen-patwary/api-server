
const express = require('express')
const morgan = require('morgan')
const contactRoute = require('./api/routers/contact')
const userRoute = require('./api/routers/userroute')
const app = express()
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/test")

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})
app.use("/api/contact", contactRoute)
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/api/user", userRoute)

const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database connection is establish')
})

// app.use((req, res, next) => {
//     console.log('this is middelwere function')
//     next()
// })

app.get('/', (req, res, next) => {
    res.send('<div><h1>hello Fahad</h1><p>this is hello paragrap</p></div>')
})
app.post('/post/api/userDetails', (req, res, next) => {
    res.send(userDetails)
})

const userDetails = [
    {name:'Fahad hossen', gmail: 'scienccebd@gmail.com', contact:'01810324908'},
    {name:'Abid molla', gmail: 'abid.m.molla@gmail.com', contact:'01710324908'},
    {name:'Shakhawat hossen', gmail: 'shakhawar12@gmail.com', contact:'01910324908'},
    {name:'Abdur rahaman', gmail: 'abdurrahaman@gmail.com', contact:'01310324908'}
]