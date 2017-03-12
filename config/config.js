"use strict";
var Config = (function () {
    function Config() {
    }
    return Config;
}());
Config.PORT = normalizePort(process.env.PORT || 3000);
Config.DB = process.env.MONGOLAB_URI || "mongodb://leojim06:kairinyuna66@ds145359.mlab.com:45359/gpsfinca";
Config.DB_TEST = process.env.MONGOLAB_URI || "mongodb://localhost/gpsfinca_test";
Config.SECRET = "super.super.secret.shhh";
exports.Config = Config;
function normalizePort(val) {
    var port = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(port))
        return val;
    else if (port >= 0)
        return port;
    else
        return null;
}
