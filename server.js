const express=require('express')
const dotenv = require('dotenv').config()
const app=express()
const routes= require('./routes/index')
app.use(express.json())

app.use('/api', routes);

const port=process.env.PORT || 3000
app.listen(port,()=>console.log(`server running on port -> ${port}`))