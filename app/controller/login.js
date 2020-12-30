const express = require('express');
const app = express();

app.get('/:userId', (req, res) => {
    const { Session } = app.get('library');
    
    const session = new Session();
    let sessionId = session.init();

    session.setData("login", true);
    session.setData("userId", req.params.userId)
    
    return res.json({
        type: true,
        login: true,
        userId: req.params.userId,
        sessionId,
    });
})


module.exports = app;