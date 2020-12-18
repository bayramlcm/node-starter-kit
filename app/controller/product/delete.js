const express = require('express');
const app = express();

// Kullanıcı Siler
app.delete('/:_id', (req, res) => {
    const body = app.get('validation').product.delete.validate(req.params)
    if (body.error) return res.json({
        type: false,
        data: {},
        message: body.error
    });

    const { deleteById } = app.get('model').user

    deleteById(body.value).then((data) => {
        if (data.deletedCount === 0) {
            res.json({
                type: false,
                data: {},
                message: "Ürün bulunamadı."
            })
        } else {
            res.json({
                type: true,
                data: data,
                message: "Ürün başarıyla silindi."
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