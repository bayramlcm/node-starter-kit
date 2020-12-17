require('./constant');
const C_SERVER = require('./server')
const C_CONTROLLER = require('./controller')
const C_MODEL = require('./model')
const C_DATABASE = require('./database')

const exec = (app, settings) => {
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
}

module.exports = {exec};