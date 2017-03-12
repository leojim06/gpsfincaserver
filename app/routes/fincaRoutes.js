"use strict";
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = express_1.Router();
var FincaRoutes = (function () {
    function FincaRoutes() {
        this.fincaController = new controllers_1.FincaController();
    }
    Object.defineProperty(FincaRoutes.prototype, "routes", {
        get: function () {
            var controller = this.fincaController;
            router.get('/', controller.getAll);
            router.get('/:_id', controller.findById);
            router.put('/:_id', controller.update);
            router.delete('/:_id', controller.delete);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return FincaRoutes;
}());
exports.FincaRoutes = FincaRoutes;
