"use strict";
var express = require("express");
var propietarioRoutes_1 = require("./propietarioRoutes");
var fincaRoutes_1 = require("./fincaRoutes");
var propietarioFincaRoutes_1 = require("./propietarioFincaRoutes");
var app = express();
var prefix = '/api/v1';
var Routes = (function () {
    function Routes() {
    }
    Object.defineProperty(Routes.prototype, "routes", {
        get: function () {
            app.use(prefix + "/propietarios", new propietarioRoutes_1.PropietarioRoutes().routes, new propietarioFincaRoutes_1.PropietarioFincaRoutes().routes);
            app.use(prefix + "/fincas", new fincaRoutes_1.FincaRoutes().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return Routes;
}());
exports.Routes = Routes;
