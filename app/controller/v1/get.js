const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const { Session } = app.get('library');

    const session = new Session();
    session.load(req.headers.sessionid);

    return res.json({
        login: session.getData("login"),
        userId: session.getData("userId"),
    })
})


module.exports = app;