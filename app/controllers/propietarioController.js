"use strict";
var business_1 = require("../business");
var PropietarioController = (function () {
    function PropietarioController() {
    }
    PropietarioController.prototype.getAll = function (req, res) {
        try {
            var propietarioBusiness = new business_1.PropietarioBusiness();
            propietarioBusiness.getAll(function (error, result) {
                error ?
                    res.status(400).send({ 'ERROR': 'Error en su solicitud', 'MSG': error }) :
                    result && result.length === 0 ?
                        res.status(404).send({ 'ERROR': 'No existen registros' }) :
                        res.status(200).send({ 'RESULT': result });
            });
        }
        catch (error) {
            res.status(500).send({ 'SERVER_ERROR': error });
        }
    };
    PropietarioController.prototype.create = function (req, res) {
        try {
            var propietario = req.body;
            var propietarioBusiness = new business_1.PropietarioBusiness();
            propietarioBusiness.create(propietario, function (error, result) {
                error ?
                    res.status(400).send({ 'ERROR': 'Error en su solicitud', 'MSG': error }) :
                    res.status(201).send({ 'CREATED': result });
            });
        }
        catch (error) {
            res.status(500).send({ 'SERVER_ERROR': error });
        }
    };
    PropietarioController.prototype.findById = function (req, res) {
        try {
            var _id = req.params._id;
            var propietarioBusiness = new business_1.PropietarioBusiness();
            propietarioBusiness.findById(_id, function (error, result) {
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
    PropietarioController.prototype.update = function (req, res) {
        try {
            var _id = req.params._id;
            var dataUpdate_1 = req.body;
            var propietarioBusiness = new business_1.PropietarioBusiness();
            propietarioBusiness.update(_id, dataUpdate_1, function (error, result) {
                error || (result && result.nModified === 0) ?
                    res.status(400).send({ 'ERROR': 'Error en su solicitud', 'MSG': error }) :
                    !result ?
                        res.status(404).send({ 'ERROR': 'Propietario no encontrado - no se puede actualizar' }) :
                        res.status(200).send({ 'UPDATED': dataUpdate_1 });
            });
        }
        catch (error) {
            res.status(500).send({ 'SERVER_ERROR': error });
        }
    };
    PropietarioController.prototype.delete = function (req, res) {
        try {
            var _id_1 = req.params._id;
            var propietarioBusiness = new business_1.PropietarioBusiness();
            propietarioBusiness.delete(_id_1, function (error, result) {
                error ?
                    res.status(400).send({ 'ERROR': 'Error en su solicitud', 'MSG': error }) :
                    !result ?
                        res.status(404).send({ 'ERROR': 'Propietario no encontrado - no se puede eliminar' }) :
                        res.status(200).send({ 'DELETED': _id_1 });
            });
        }
        catch (error) {
            res.status(500).send({ 'SERVER_ERROR': error });
        }
    };
    return PropietarioController;
}());
exports.PropietarioController = PropietarioController;
