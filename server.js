"use strict";
var config_1 = require("./config/config");
var express_1 = require("./config/express");
express_1.default.listen(config_1.Config.PORT, function (err) {
    err ?
        console.error("Server error: " + err) :
        console.log("Server listening on port " + config_1.Config.PORT);
});
