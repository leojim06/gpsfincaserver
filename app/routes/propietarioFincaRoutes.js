"use strict";
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = express_1.Router();
var PropietarioFincaRoutes = (function () {
    function PropietarioFincaRoutes() {
        this.propietarioFincaController = new controllers_1.PropietarioFincaController();
    }
    Object.defineProperty(PropietarioFincaRoutes.prototype, "routes", {
        get: function () {
            var controller = this.propietarioFincaController;
            router.get('/:_id/fincas', controller.get);
            router.post('/:_id/fincas', controller.create);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return PropietarioFincaRoutes;
}());
exports.PropietarioFincaRoutes = PropietarioFincaRoutes;
