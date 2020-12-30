const express = require('express');
const app = express();

// MiddleWare
app.use((req, res, next) => {
    const { Session } = app.get('library');

    const session = new Session();
    session.load(req.headers.sessionid);
    
    if (!session.status)
        return res.json({
            type: false,
            message: "Session failed.",
        })

    if (!session.getData("login"))
        return res.json({
            type: false,
            message: "Login failed.",
        })
    next();
})


module.exports = app;