const express = require('express');
const app = express();

// Tüm kullanıcıları döndürür
app.get('/getAll', (req, res) => {
    const { getAll } = app.get('model').users

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
app.get('/get/:userId', (req, res) => {
    const { userId } = req.params;

    const { getById } = app.get('model').users

    getById(userId).then((data) => {
        res.json({
            type: true,
            data: data,
            message: "Kullanıcı bilgisi getirildi."
        })
    }).catch((err) => {
        res.json({
            type: true,
            data: {},
            message: err
        })
    });
})

// Kullanıcı oluştur
app.get('/insert/:name/:surname/:age', (req, res) => {
    const { name, surname, age } = req.params;

    const { insert } = app.get('model').users

    insert({name, surname, age}).then((data) => {
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



module.exports = app;