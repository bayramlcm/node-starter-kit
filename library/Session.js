const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

class Session {
    sessionId = "";
    status = false;
    data = {};
    info = {};

    // Session init (create)
    init = () => {
        const { secret } = global.C_CONSTANT.CONFIG.session;
        this.status = true;
        this.sessionId = jwt.sign({}, secret);
        this.info = { createdAt: +new Date(), updatedAt: +new Date(), expired: false }
        this.#writeData();
        return jwt.sign({}, secret);
    }

    // Session load
    load = (sessionId) => {
        const { secret, lifeTime } = global.C_CONSTANT.CONFIG.session;
        try {
            jwt.verify(sessionId, secret);
            this.sessionId = sessionId;
            this.#readData();
            if (this.info.expired) this.status = false;
            else {
                if ((this.info.updatedAt + (lifeTime * 1000)) >= +new Date()) {
                    this.status = true;
                    this.info.updatedAt = +new Date();
                    this.#writeData();
                } else this.status = false;
            }
        } catch (e) {
            this.status = false;
        }
        return this.status;
    }

    // Session get data
    getData = (key) => {
        if (this.status && key in this.data) {
            return this.data[key];
        }
        return null;
    }

    // Session set data
    setData = (key, value) => {
        if (this.status) {
            this.data[key] = value;
            this.#writeData();
        }
        return null;
    }

    // Write Session File
    #writeData = () => {
        const { TMPPATH } = global.C_CONSTANT;
        fs.writeFileSync(
            path.join(TMPPATH, `session/${this.sessionId}.json`),
            JSON.stringify({
                data: this.data,
                info: this.info,
            })
        );
    }

    // Read Session File
    #readData = () => {
        const { TMPPATH } = global.C_CONSTANT;
        const json = JSON.parse(
            fs.readFileSync(path.join(TMPPATH, `session/${this.sessionId}.json`))
        );
        if ("data" in json) this.data = json.data;
        if ("info" in json) this.info = json.info;
    }
}

module.exports = Session;