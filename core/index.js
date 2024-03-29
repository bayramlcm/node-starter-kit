require('./constant');
const C_MODEL = require('./model')
const C_SERVER = require('./server')
const C_DATABASE = require('./database')
const C_CONTROLLER = require('./controller')
const C_LIBRARY = require('./library');
const C_VALIDATOIN = require('./validation')

const use = (app, settings) => {
    // Server Start
    C_SERVER.run(app, settings)
    // Database Start
    C_DATABASE.run(app)
    console.log("Database RUN!");
    // Controller Start!
    C_CONTROLLER.run(app);
    console.log("Controller RUN!");
    // Model Start
    C_MODEL.run(app);
    console.log("Model RUN!");
    // Library Start
    C_LIBRARY.run(app);
    console.log("Library RUN!");
    // Validation
    C_VALIDATOIN.run(app)
    console.log("Validation RUN!");
}

module.exports = { use };