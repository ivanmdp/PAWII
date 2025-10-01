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

  products.push({
    name : name,
    qty: parselInt(qty),
    price: parselInt(price)
  });

    res.redirect('/minimarket');
});

app.listen(port,() => {
  console.log('Server running at http://localhost:${port}')
});