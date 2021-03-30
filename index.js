const express = require("express");
const app = express();

const CORE = require('./core');
const CONFIG = require('./app/config');

CORE.use(app, {
    cors: true,
    json: true,
    morgan: true,
    mongo: true,
    helmet: true,
    library: {
        session: true,
    }
})

app.listen(CONFIG.server.port, () => {
    console.log(`Server RUN ${CONFIG.server.host}:${CONFIG.server.port}!`);
});