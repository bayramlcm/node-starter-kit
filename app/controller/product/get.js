const express = require('express');
const app = express();

// Ürün bilgisini döndür
app.get('/:_id', (req, res) => {
    const body = app.get('validation').product.get.validate(req.params)
    if (body.error) return res.json({
        type: false,
        data: {},
        message: body.error
    });

    const { getById } = app.get('model').user

    getById(body.value).then((data) => {
        if (data === null) {
            res.json({
                type: false,
                data: {},
                message: "Ürün bulunamadı."
            })
        } else {
            res.json({
                type: true,
                data: data,
                message: "Ürün bilgisi getirildi."
            })
        }
    }).catch((err) => {
        res.json({
            type: true,
            data: {},
            message: err
        })
    });

})

module.exports = app;