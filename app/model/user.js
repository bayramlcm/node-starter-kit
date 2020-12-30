const { user } = global.database;

module.exports = {
    // Tüm kullanıcının bilgisini getir
    getAll: () => new Promise((resolve, reject) => {
        user.find({}, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    }),
    // ID'den kullanıcı bilgisini getir
    getById: ({_id}) => new Promise((resolve, reject) => {
        user.findOne({_id}, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    }),
    // Kullanıcı kayıt et
    add: ({name, surname, age}) => new Promise((resolve, reject) => {
        user.create({name, surname, age}, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    }),
    // Kullanıcı Sil
    deleteById: ({_id}) => new Promise((resolve, reject) => {
        user.deleteOne({_id}, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    }),
}