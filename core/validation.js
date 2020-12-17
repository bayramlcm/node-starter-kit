const fs = require('fs');
const path = require('path');

const run = (app) => {
    const validation = {}
    const { VALIDATIONPATH } = global.C_CONSTANT;
    const allDir = scan(VALIDATIONPATH);
    allDir.forEach((dir) => {
        let name = path.parse(dir).base;
        validation[name] = require(dir);
    });
    app.set('validation', validation)
}

const scan = (VALIDATIONPATH) => {
    let founds = []
     // Dosya Taraması
     fs.readdirSync(VALIDATIONPATH).forEach(file => {
        fileDir = path.join(VALIDATIONPATH, file);
        if (fs.lstatSync(fileDir).isFile()) {
            // JS Dosyasımı
            if (file.length > 3 && file.slice(-3) === '.js') {
                founds.push(path.join(VALIDATIONPATH, file).split('.js')[0])
            }
        }
    });
    return founds;
}

module.exports = {run}