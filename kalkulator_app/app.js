const express = require('express');
const app = express();
const PORT = 3000;

// Data Produk dalam Array
const products = [
  { name: 'Air Mineral', qty: 1, price: 10000 },
  { name: 'Susu', qty: 1, price: 15000 },
  { name: 'Roti', qty: 2, price: 20000 },
  { name: 'Telur', qty: 3, price: 30000 },
];

// Set view engine ke EJS
app.set('view engine', 'ejs');

// Menyajikan file statis dari folder "public"
app.use(express.static('public'));

// Route untuk halaman minimarket
app.get('/minimarket', (req, res) => {
  res.render('minimarket', { products });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
