const express = require('express')

const app = express()

//ROUTE
app.get('/',(req,res)=>{
    res.status(200).send('Server Running')
})

// CREATE A SERVER
const PORT = 8001
app.listen(PORT, ()=>{
    console.log('Server Started');
})
