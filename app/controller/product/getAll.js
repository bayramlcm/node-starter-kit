const express = require('express');
const app = express();

// Tüm Ürünler döndürür
app.get('/', (req, res) => {
    const { getAll } = app.get('model').product

    getAll().then((data) => {
        res.json({
            type: true,
            data: data,
            message: "Ürünler başarıyla getirildi."
        })
    }).catch((err) => {
        res.json({
            type: true,
            data: {},
            message: err
        })
    });
});


module.exports = app;