const fs = require('fs');
const path = require('path');

const run = (app) => {
    const database = {}
    const { DATABASEPATH } = global.C_CONSTANT;
    const allDir = scan(DATABASEPATH);
    allDir.forEach((dir) => {
        let name = path.parse(dir).base;
        database[name] = require(dir);
    });
    global.database = database;
    app.set('database', database)
}

const scan = (MODELPATH) => {
    let founds = []
     // Dosya Taraması
     fs.readdirSync(MODELPATH).forEach(file => {
        fileDir = path.join(MODELPATH, file);
        if (fs.lstatSync(fileDir).isFile()) {
            // JS Dosyasımı
            if (file.length > 3 && file.slice(-3) === '.js') {
                founds.push(path.join(MODELPATH, file).split('.js')[0])
            }
        }
    });
    return founds;
}

module.exports = {run}