"use strict";
var repository_1 = require("../repository");
var FincaBusiness = (function () {
    function FincaBusiness() {
        this.fincaRepository = new repository_1.FincaRepository();
    }
    FincaBusiness.prototype.create = function (item, callback) {
        this.fincaRepository.create(item, callback);
    };
    FincaBusiness.prototype.getAll = function (callback) {
        this.fincaRepository.getAll(callback);
    };
    FincaBusiness.prototype.update = function (_id, data, callback) {
        var _this = this;
        this.fincaRepository.findById(_id, function (err, res) {
            if (err || !res) {
                return callback(err, res);
            }
            _this.fincaRepository.update(res, data, callback);
        });
    };
    FincaBusiness.prototype.delete = function (_id, callback) {
        var _this = this;
        this.fincaRepository.findById(_id, function (err, res) {
            if (err || !res) {
                return callback(err, res);
            }
            _this.fincaRepository.delete(res, callback);
        });
    };
    FincaBusiness.prototype.findById = function (_id, callback) {
        this.fincaRepository.findById(_id, callback);
    };
    return FincaBusiness;
}());
exports.FincaBusiness = FincaBusiness;
