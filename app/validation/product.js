const Joi = require('@hapi/joi');

module.exports = {
    // Ürün bilgisini getir kontrolü
    get: Joi.object({
        _id: Joi.string().trim().alphanum().min(24).max(24).required(),
    }),
    // Ürün ekle kontrolü
    add: Joi.object({
        name: Joi.string().trim().min(1).max(64).required(),
        description: Joi.string().trim().min(1).max(300).required(),
    }),
    // Ürün silme kontrolü
    delete: Joi.object({
        _id: Joi.string().trim().alphanum().min(24).max(24).required(),
    }),
}