const fs = require('fs');
const path = require('path');

// Controller tarama işlemi başlayacak birazdan
const run = (app) => {
    const { CONTROLLERPATH } = global.C_CONSTANT;
    // Klasör / Dosyaları Tara
    const allDir = scan(CONTROLLERPATH).toString().split(',')
    allDir.forEach((dir) => {
        let route = dir.replace(CONTROLLERPATH, '').split("\\").join('/')
        // Route isminin sonunda index varsa yok et
        if (path.parse(route).base === 'index') route = route.slice(0, -5)
        // Eğer sonunda / varsa kaldır
        if (route.length > 1 && route.slice(-1) == '/') route = route.slice(0, -1)
        // Route sistemine dahil et
        app.use(route, require(dir))
    });
}

// Klasör ve dosya taramaları yap
const scan = (CONTROLLERPATH, founds = []) => {
    let _found = [];
    // Dosya Taraması
    fs.readdirSync(CONTROLLERPATH).forEach(file => {
        fileDir = path.join(CONTROLLERPATH, file);
        if (fs.lstatSync(fileDir).isFile()) {
            // JS Dosyasımı
            if (file.length > 3 && file.slice(-3) === '.js') {
                _found.push(path.join(CONTROLLERPATH, file).split('.js')[0])
            }
        }
    });
    // index öne gelecek şekilde sırala
    founds.push(_found.sort((a, b) => {
        if (path.parse(a).base === 'index') {
            return -1;
        } else if (path.parse(b).base === 'index') {
            return -1;
        }
        return 0;
    }))
    // Klasör taraması
    fs.readdirSync(CONTROLLERPATH).forEach(folder => {
        folderDir = path.join(CONTROLLERPATH, folder);
        if (fs.lstatSync(folderDir).isDirectory()) {
            founds = scan(folderDir, founds);
        }
    });
    return founds;
}

module.exports = { run }