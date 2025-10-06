const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

// Middleware untuk membaca file statis
app.use(express.static(path.join(__dirname, 'views')));

let products  = []; 

// Routing ke halaman utama (dashboard)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));

});

app.get("/tambah", (req, res) => {
   res.sendFile(path.join(__dirname, 'views', 'tambah.html'));
});

app.get("/daftar", (req, res) => {
   res.sendFile(path.join(__dirname, 'views', 'daftar.html'));
});

app,post('/tambah', (req, res) => {
  const{nama, harga, stok} = req.body;
  products.push({
    id: products.length + 1,
    nama,
    harga: parseInt(harga),
    stok: parseInt(stok)
  });
  res.redirect('/daftar')
})

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
