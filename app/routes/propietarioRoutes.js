"use strict";
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = express_1.Router();
var PropietarioRoutes = (function () {
    function PropietarioRoutes() {
        this.propietarioController = new controllers_1.PropietarioController();
    }
    Object.defineProperty(PropietarioRoutes.prototype, "routes", {
        get: function () {
            var controller = this.propietarioController;
            router.get('/', controller.getAll);
            router.post('/', controller.create);
            router.get('/:_id', controller.findById);
            router.put('/:_id', controller.update);
            router.delete('/:_id', controller.delete);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return PropietarioRoutes;
}());
exports.PropietarioRoutes = PropietarioRoutes;
