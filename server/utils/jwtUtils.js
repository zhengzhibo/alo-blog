const config = require("../config");
const jwt = require('jsonwebtoken');
const tokenMap = new Map();

const jwtUtils = {
  signToken: (id, ip) => {
    let token = jwt.sign({ user: id }, config.app.secret, {
      expiresIn: config.app.tokenExpire
    });

    tokenMap.set(id, token);
    return token;
  },

  removeToken: (token) => {
    if (token.indexOf(' ') > -1) {
      t = token.split(' ')[1];
      var decoded = jwt.verify(t, config.app.secret);

      if (t === tokenMap.get(decoded.user)) {
        tokenMap.delete(decoded.user);
        return true;
      }
    }
    return false;
  },

  checkRevoke: (ctx, decodedToken, token) => {
    return new Promise((resolve, reject) => {
      if (decodedToken && token == tokenMap.get(decodedToken.user)) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  }
};

module.exports = jwtUtils;
