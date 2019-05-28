//inisialisasi var / const untuk menampung lib express
const express = require('express');
const app = express();

//menampilkan halaman web dengan express
app.get('/', (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.write("ini adalah menu home");
    res.end();
});

//menghubunkan ke port 8000
app.listen(8000, () => {
    console.log("layanan berjalan di port 8000");
});