const express = require('express');
const app= express();
require('./connection')

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const PORT=process.env.PORT || 2020;

app.use('/api',require('./routes/restApi'))

app.get('/',(req,res)=>{
    console.log("Application RUNNING.....");
    res.send("Application RUNNING.....")
});

app.listen(PORT,()=>{
    console.log(`app listening on http://localhost:${PORT}`)
})