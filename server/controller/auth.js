const db = require('../db');
const utils = require('utility');

var login = async (ctx, next) => {
    ctx.response.body = "login api";
};

module.exports = {
    'GET /login': login
};