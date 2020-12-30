const fs = require('fs');
const path = require('path');

const run = (app) => {
    const library = {}
    const { LIBRARYPATH } = global.C_CONSTANT;
    const allDir = scan(LIBRARYPATH);
    allDir.forEach((dir) => {
        let name = path.parse(dir).base;
        library[name] = require(dir);
    });
    app.set('library', library);
    global.library = library;
}

const scan = (LIBRARYPATH) => {
    let founds = []
     // Dosya Taraması
     fs.readdirSync(LIBRARYPATH).forEach(file => {
        fileDir = path.join(LIBRARYPATH, file);
        if (fs.lstatSync(fileDir).isFile()) {
            // JS Dosyasımı
            if (file.length > 3 && file.slice(-3) === '.js') {
                founds.push(path.join(LIBRARYPATH, file).split('.js')[0])
            }
        }
    });
    return founds;
}

module.exports = {run}