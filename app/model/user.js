const { users } = global.database;

module.exports = {
    // Tüm kullanıcının bilgisini getir
    getAll: () => new Promise((resolve, reject) => {
        users.find({}, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    }),
    // ID'den kullanıcı bilgisini getir
    getById: ({_id}) => new Promise((resolve, reject) => {
        users.findOne({_id}, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    }),
    // Kullanıcı kayıt et
    add: ({name, surname, age}) => new Promise((resolve, reject) => {
        users.create({name, surname, age}, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    }),
    // Kullanıcı Sil
    deleteById: ({_id}) => new Promise((resolve, reject) => {
        users.deleteOne({_id}, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    }), 
}