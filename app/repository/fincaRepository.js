"use strict";
var schemas_1 = require("../models/schemas");
var FincaRepository = (function () {
    function FincaRepository() {
        this.model = schemas_1.Fincas;
    }
    FincaRepository.prototype.create = function (item, callback) {
        this.model.create(item, callback);
    };
    FincaRepository.prototype.getAll = function (callback) {
        this.model.find({}, callback);
    };
    FincaRepository.prototype.update = function (item, data, callback) {
        item.update(data, callback);
    };
    FincaRepository.prototype.delete = function (item, callback) {
        item.remove(function (err) { return callback(err, { _id: item._id }); });
    };
    FincaRepository.prototype.findById = function (_id, callback) {
        this.model.findById(_id, callback);
    };
    return FincaRepository;
}());
exports.FincaRepository = FincaRepository;
