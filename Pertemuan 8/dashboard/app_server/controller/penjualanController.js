const penjualan = require('../models/penjualanModel');

class penjualanController {
  static getAll(req, res) {
    res.json(penjualan);
  }

  static getById(req, res) {
    const id = req.params.id;
    const data = penjualan.find(item => item.id === id);
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ message: 'Data tidak ditemukan' });
    }
  }

  static create(req, res) {
    const { id, produk, jumlah, harga } = req.body;
    if (!id || !produk || !jumlah || !harga) {
      return res.status(400).json({ message: 'Semua data harus diisi' });
    }

    const sudahAda = penjualan.find(item => item.id === id);
    if (sudahAda) {
      return res.status(409).json({ message: 'ID sudah digunakan' });
    }

    const total = jumlah * harga;
    const dataBaru = { id, produk, jumlah, harga, total };
    penjualan.push(dataBaru);
    res.status(201).json(dataBaru);
  }

  static update(req, res) {
    const id = req.params.id;
    const index = penjualan.findIndex(item => item.id === id);

    if (index === -1) {
      return res.status(404).json({ message: 'Data tidak ditemukan' });
    }

    const { produk, jumlah, harga } = req.body;

    if (produk) penjualan[index].produk = produk;
    if (jumlah) penjualan[index].jumlah = jumlah;
    if (harga) penjualan[index].harga = harga;

    penjualan[index].total = penjualan[index].jumlah * penjualan[index].harga;

    res.json(penjualan[index]);
  }

  static delete(req, res) {
    const id = req.params.id;
    const index = penjualan.findIndex(item => item.id === id);

    if (index === -1) {
      return res.status(404).json({ message: 'Data tidak ditemukan' });
    }

    const deleted = penjualan.splice(index, 1);
    res.json({ message: 'Data berhasil dihapus', data: deleted[0] });
  }
}

module.exports = PenjualanController;



app.js
const express = require('express');
const bodyParser = require('body-parser');
const penjualanRoutes = require('./routes/penjualanRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/penjualan', penjualanRoutes);

app.get('/', (req, res) => {
  res.send('Aplikasi Penjualan Sederhana - MVC (Model Array)');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
