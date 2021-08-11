const express = require('express')
const app = express()
app.use(express.json())
const jwt = require('jsonwebtoken')
require('dotenv').config()

const routes=require('./Routes/user')
app.use('/user',routes)
 
app.get('/u', function (req, res) {
  res.send('Hello World')
})
 
const port=process.env.PORT || 3000

app.listen(port,(req,res)=>{
    console.log("Server is running....",port)
});