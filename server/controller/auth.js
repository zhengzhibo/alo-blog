const db = require('../db');
const utils = require('utility');
const jwtUtils = require('../utils/jwtUtils');

var auth = async (ctx, next) => {

    var user = db.get('user').value();

    if(ctx.request.body.username === user.username && utils.sha256(ctx.request.body.password) === user.password) {
        ctx.body =  {
            token: jwtUtils.signToken(user.username, ctx.ip)
        }
    } else {
        ctx.throw(401, 'Authentication Error');
    }
};

module.exports = {
    'POST /auth': auth
};