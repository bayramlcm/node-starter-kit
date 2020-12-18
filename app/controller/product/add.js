const express = require('express');
const app = express();

// Ürün oluştur
app.post('/', (req, res) => {
    // Validation İşlemleri
    const body = app.get('validation').product.add.validate(req.body);
    if (body.error) return res.json({
        type: false,
        data: {},
        message: body.error
    });

    const { add } = app.get('model').user
    // Ürün ekle
    add(body.value).then((data) => {
        res.json({
            type: true,
            data: data,
            message: "Ürün başarıyla oluşturuldu."
        })
    }).catch((err) => {
        res.json({
            type: false,
            data: {},
            message: err
        })
    });

})

module.exports = app;