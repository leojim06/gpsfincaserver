"use strict";
var schemas_1 = require("../models/schemas");
var PropietarioRepository = (function () {
    function PropietarioRepository() {
        this.model = schemas_1.Propietarios;
    }
    PropietarioRepository.prototype.create = function (item, callback) {
        this.model.create(item, callback);
    };
    PropietarioRepository.prototype.getAll = function (callback) {
        this.model.find({}, callback);
    };
    PropietarioRepository.prototype.update = function (item, data, callback) {
        item.update(data, callback);
    };
    PropietarioRepository.prototype.delete = function (item, callback) {
        item.remove(function (err) { return callback(err, { _id: item._id }); });
    };
    PropietarioRepository.prototype.findById = function (_id, callback) {
        this.model.findById(_id, callback);
    };
    PropietarioRepository.prototype.insertLand = function (propietario, finca, callback) {
        propietario.update({
            $addToSet: { fincas: finca._id }
        }, function (err) { return callback(err, { propietario: propietario, finca: finca }); });
    };
    PropietarioRepository.prototype.getLand = function (item, callback) {
        item.populate('fincas', callback);
    };
    ;
    PropietarioRepository.prototype.findEmail = function (item, callback) {
        this.model.findOne({ email: item.email }, callback);
    };
    return PropietarioRepository;
}());
exports.PropietarioRepository = PropietarioRepository;
