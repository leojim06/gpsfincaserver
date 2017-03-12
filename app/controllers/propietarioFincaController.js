"use strict";
var business_1 = require("../business");
var PropietarioFincaController = (function () {
    function PropietarioFincaController() {
    }
    PropietarioFincaController.prototype.create = function (req, res) {
        try {
            var _id = req.params._id;
            var propietario = void 0;
            var finca = req.body;
            var propietarioBusiness = new business_1.PropietarioBusiness();
            propietarioBusiness.insertLand(_id, finca, function (error, result) {
                error ?
                    res.status(400).send({ 'ERROR': 'Error en su solicitud', 'MSG': error }) :
                    !result ?
                        res.status(404).send({ 'ERROR': 'Propietario no encontrado' }) :
                        res.status(201).send({ 'CREATED': result });
            });
        }
        catch (error) {
            res.status(500).send({ 'SERVER_ERROR': error });
        }
    };
    PropietarioFincaController.prototype.get = function (req, res) {
        try {
            var _id = req.params._id;
            var propietarioBusiness = new business_1.PropietarioBusiness();
            propietarioBusiness.getLand(_id, function (error, result) {
                error ?
                    res.status(400).send({ 'ERROR': 'Error en su solicitud', 'MSG': error }) :
                    !result ?
                        res.status(404).send({ 'ERROR': 'Propietario no encontrado' }) :
                        res.status(200).send({ 'RESULT': result });
            });
        }
        catch (error) {
            res.status(500).send({ 'SERVER_ERROR': error });
        }
    };
    return PropietarioFincaController;
}());
exports.PropietarioFincaController = PropietarioFincaController;
