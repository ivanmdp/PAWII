const express = require ('express');
const app = express();
const penjualanRoutes = require('./routes/penjualanRoutes');

app.use(express.json());
app.use('./penjualan', penjualanRoutes);

const PORT = 3000;
app.listen(PORT,() => {
    console.log('Server berjalan di http://localhost:${PORT}');
});