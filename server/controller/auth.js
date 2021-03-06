const db = require('../db');
const utils = require('utility');
const jwtUtils = require('../utils/jwtUtils');

var login = async (ctx, next) => {

    var user = db.get('user').value();

    if(ctx.request.body.username === user.username && utils.sha256(ctx.request.body.password) === user.password) {
        ctx.body =  {
            token: jwtUtils.signToken(user.username, ctx.ip)
        }
    } else {
        ctx.throw(401, 'Authentication Error');
    }
};

var logout = async (ctx, next) => {
    var scuuess = false;
    if (ctx.header.authorization) {
        scuuess = jwtUtils.removeToken(ctx.header.authorization);
    }

    ctx.body =  {
        success: scuuess
    }
};

module.exports = {
    'POST /login': login,
    'GET /logout': logout
};