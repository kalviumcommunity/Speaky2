const express = require('express')
const app = express()
const path = require('path')
const port = 8000

const staticPath = path.join(_dirname, '../public/build')

app.use(express.static(staticPath))

app.get('*', (req,res)=>{
    res.sendFile(path.join(staticPath, 'index.html'))
})

app.listen(port, ()=>{
    console.log(`Listening to ${port}....`)
})