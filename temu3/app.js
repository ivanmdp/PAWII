const http = require('http');
const express = require('express');
const app = exoress();

app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.send('Halo Selamat Datang di Express!');
});

app.get('/about',(req,res)=>{
  res.send('<h1>Tentang kami</h1><p>Halaman tambahan dengan HTML Langsung...</p>')
})

const PORT = 3000;
app.listen(PORT,()=>{
  console.log('Server berjalan di http//localhost:${PORT}');
});