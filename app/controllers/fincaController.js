"use strict";
var business_1 = require("../business");
var FincaController = (function () {
    function FincaController() {
    }
    FincaController.prototype.getAll = function (req, res) {
        try {
            var fincaBusiness = new business_1.FincaBusiness();
            fincaBusiness.getAll(function (error, result) {
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
    FincaController.prototype.findById = function (req, res) {
        try {
            var _id = req.params._id;
            var fincaBusiness = new business_1.FincaBusiness();
            fincaBusiness.findById(_id, function (error, result) {
                error ?
                    res.status(400).send({ 'ERROR': 'Error en su solicitud', 'MSG': error }) :
                    !result ?
                        res.status(404).send({ 'ERROR': 'Finca no encontrada' }) :
                        res.status(200).send({ 'RESULT': result });
            });
        }
        catch (error) {
            res.status(500).send({ 'SERVER_ERROR': error });
        }
    };
    FincaController.prototype.update = function (req, res) {
        try {
            var _id = req.params._id;
            var dataUpdate_1 = req.body;
            var fincaBusiness = new business_1.FincaBusiness();
            fincaBusiness.update(_id, dataUpdate_1, function (error, result) {
                error || (result && result.nModified === 0) ?
                    res.status(400).send({ 'ERROR': 'Error en su solicitud', 'MSG': error }) :
                    !result ?
                        res.status(404).send({ 'ERROR': 'Finca no encontrada - no se puede actualizar' }) :
                        res.status(200).send({ 'UPDATED': dataUpdate_1 });
            });
        }
        catch (error) {
            res.status(500).send({ 'SERVER_ERROR': error });
        }
    };
    FincaController.prototype.delete = function (req, res) {
        try {
            var _id_1 = req.params._id;
            var fincaBusiness = new business_1.FincaBusiness();
            fincaBusiness.delete(_id_1, function (error, result) {
                error ?
                    res.status(400).send({ 'ERROR': 'Error en su solicitud', 'MSG': error }) :
                    !result ?
                        res.status(404).send({ 'ERROR': 'Finca no encontrada - no se puede eliminar' }) :
                        res.status(200).send({ 'DELETED': _id_1 });
            });
        }
        catch (error) {
            res.status(500).send({ 'SERVER_ERROR': error });
        }
    };
    return FincaController;
}());
exports.FincaController = FincaController;
