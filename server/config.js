const fs = require("fs");
const _ = require('lodash');

let config = {
    app: {
        secret: 'some--secret',
        tokenExpire: '3h',
        port: 3030
    },

    db: {
        uri: './db/db.json'
    }
}

let configFile = process.env.ALO_CONFIG;

if(configFile){
    try {
      let configJson = fs.readFileSync(configFile, 'utf8');
      let loaded = JSON.parse(configJson);

      _.merge(config, loaded);
    } catch (error) {
        console.error("config file not found")
    }
    

}
module.exports = config;