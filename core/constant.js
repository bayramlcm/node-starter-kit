const path = require('path');

const ROOT = path.resolve(__dirname, '../');

const COREPATH = path.join(ROOT, './core');
const APPPATH = path.join(ROOT, './app');

const CONTROLLERPATH = path.join(APPPATH, './controller');
const MODELPATH = path.join(APPPATH, './model');
const DATABASEPATH = path.join(APPPATH, './database');
const VALIDATIONPATH = path.join(APPPATH, './validation');

const CONFIG = require(path.join(APPPATH, './config'))


global.C_CONSTANT = {
    ROOT,
    COREPATH,
    APPPATH,
    CONTROLLERPATH,
    MODELPATH,
    DATABASEPATH,
    VALIDATIONPATH,
    CONFIG,
}