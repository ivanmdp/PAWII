const express = require ('express');
const app = express ();

app.get('/', (req, res)=>{
    req.setEncoding('Halo Selamat Datang di Express!');
});

app.listen(3000,()=>{
    console.log('Server Running on http://localhost3000');
});