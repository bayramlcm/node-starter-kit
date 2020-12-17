const Joi = require('@hapi/joi');

module.exports = {
    // Kullanıcı bilgisini getir kontrolü
    get: Joi.object({
        _id: Joi.string().trim().alphanum().min(24).max(24).required(),
    }),
    // Kullanıcı ekle kontrolü
    add: Joi.object({
        name: Joi.string().trim().min(1).max(64).required(),
        surname: Joi.string().trim().min(1).max(64).required(),
        age: Joi.number().min(18).max(120).required(),
    }),
}