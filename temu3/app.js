const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Array untuk menampung input
let product =[];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// Halaman daftar produk
app.get('/minimarket', (req, res)=> {
  res.render('/minimarket', {product});
});

app.get('/add', req, res =>{
   res.render('form');
})

// Terima data form
app.post('/add', (req, res) => {
  const{name,qty, price} = req.body;

  const disc = parseInt(qty) * parseInt(price) * 0.1;
  const st = parseInt(price) = disc;
  products.push({
    name : name,
    qty: parseInt(qty),
    discount : parseInt(disc),
    price: parseInt(price),
  });

    res.redirect('/minimarket');
});

app.listen(port,() => {
  const qtyInt = parseInt(qty);
  const priceInt = parseInt(price);

  cost disc = qtyInt * priceInt * 0.1;
  const totalHarga = qtyInt * priceInt ;
  console.log('Server running at http://localhost:${port}')
});