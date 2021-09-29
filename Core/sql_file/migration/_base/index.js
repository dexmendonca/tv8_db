const fs = require('fs');
const path = require('path');

module.exports.up = fs.readFileSync(path.resolve(__dirname, './up.sql')).toString();
module.exports.down = fs.readFileSync(path.resolve(__dirname, './down.sql')).toString();
