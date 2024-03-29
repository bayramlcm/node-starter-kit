const express = require('express');
const app = express();

// Tüm kullanıcıları döndürür
app.get('/getAll', (req, res) => {
    const { getAll } = app.get('model').user

    getAll().then((data) => {
        res.json({
            type: true,
            data: data,
            message: "Kullanıcılar başarıyla getirildi."
        })
    }).catch((err) => {
        res.json({
            type: true,
            data: {},
            message: err
        })
    });
});

// Kullanıcı bilgisini döndür
app.get('/get/:_id', (req, res) => {
    const body = app.get('validation').user.get.validate(req.params)
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
                message: "Kullanıcı bulunamadı."
            })
        } else {
            res.json({
                type: true,
                data: data,
                message: "Kullanıcı bilgisi getirildi."
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

// Kullanıcı oluştur
app.post('/add', (req, res) => {
    // Validation İşlemleri
    const body = app.get('validation').user.add.validate(req.body);
    if (body.error) return res.json({
        type: false,
        data: {},
        message: body.error
    });

    const { add } = app.get('model').user
    // Kullanıcıyı ekle
    add(body.value).then((data) => {
        res.json({
            type: true,
            data: data,
            message: "Başarıyla kullanıcı oluşturuldu."
        })
    }).catch((err) => {
        res.json({
            type: false,
            data: {},
            message: err
        })
    });

})


// Kullanıcı Siler
app.delete('/delete/:_id', (req, res) => {
    const body = app.get('validation').user.delete.validate(req.params)
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
                message: "Kullanıcı bulunamadı."
            })
        } else {
            res.json({
                type: true,
                data: data,
                message: "Kullanıcı başarıyla silindi."
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