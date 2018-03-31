const config = require("../config");
const jwt = require('jsonwebtoken');
const tokenMap = new Map();

const jwtUtils = {
  signToken: (id, ip) => {
    let token = jwt.sign({ user: id, ip: ip }, config.app.secret, {
      expiresIn: config.app.tokenExpire
    });

    tokenMap.set(id, token);
    return token;
  },

  checkRevoke: (ctx, decodedToken, token) => {
    return new Promise((resolve, reject) => {
      if (decodedToken && decodedToken.ip == ctx.ip && token == tokenMap.get(decodedToken.user)) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  }
};

module.exports = jwtUtils;
