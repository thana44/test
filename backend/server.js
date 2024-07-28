const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const {readdirSync} = require('fs')

const connectDB = async()=>{
    try{
        //code
        await mongoose.connect('mongodb://127.0.0.1:27017/nameOfserver7')
        console.log('DB connected server7.')
    }catch(e){
        console.log(e)
    }
}
connectDB()

const PORT = 7744

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json({limit: '10mb'}))

readdirSync('./route').map((e)=>{
    console.log(e)
    app.use('/', require('./route/' + e))
})


app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})

