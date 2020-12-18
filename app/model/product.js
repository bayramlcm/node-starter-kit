const { user } = global.database;

module.exports = {
    // Tüm ürünlerin bilgisini getir
    getAll: () => new Promise((resolve, reject) => {
        user.find({}, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    }),
    // ID'den ürün bilgisini getir
    getById: ({_id}) => new Promise((resolve, reject) => {
        user.findOne({_id}, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    }),
    // Ürün kayıt et
    add: ({name, description}) => new Promise((resolve, reject) => {
        user.create({name, description}, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    }),
    // Ürün Sil
    deleteById: ({_id}) => new Promise((resolve, reject) => {
        user.deleteOne({_id}, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    }), 
}