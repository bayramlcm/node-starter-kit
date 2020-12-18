const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const run = (app, settings) => {
    const { CONFIG: config } = global.C_CONSTANT;
    // Veritabanı Bağlan
    if (settings.mongo === true) {
        mongoose.connect(
            `mongodb://${config.database.host}:${config.database.port}/${config.database.name}`,
            { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
            (err) => {
                if (err) return console.log(`Veritabanına bağlanılamadı: ${err}`);
                console.log("Veritabanı bağlantısı başarılı!");
            }
        )
    }
    // Morgan
    if (settings.morgan === true) {
        app.use(morgan('dev'))
    }
    // JSON
    if (settings.json === true) {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }))
    }
    // CORS
    if (settings.cors === true) {
        app.use(cors())
    }
    // HELMET
    if (settings.helmet === true) {
        app.use(helmet())
    }
    
};


module.exports = {run}