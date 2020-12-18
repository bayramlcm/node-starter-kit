const express = require("express");
const app = express();

const CORE = require('./core');

CORE.use(app, {
    cors: true,
    json: true,
    morgan: true,
    mongo: true,
    helmet: true,
})

app.listen(1111, () => {
    console.log("Server RUN!");
});