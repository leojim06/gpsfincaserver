"use strict";
var repository_1 = require("../repository");
var PropietarioBusiness = (function () {
    function PropietarioBusiness() {
        this.propietarioRepository = new repository_1.PropietarioRepository();
    }
    PropietarioBusiness.prototype.create = function (item, callback) {
        var _this = this;
        this.propietarioRepository.findEmail(item, function (err, res) {
            if (res !== null) {
                return callback('El email ya existe', res);
            }
            _this.propietarioRepository.create(item, callback);
        });
    };
    PropietarioBusiness.prototype.getAll = function (callback) {
        this.propietarioRepository.getAll(callback);
    };
    PropietarioBusiness.prototype.update = function (_id, data, callback) {
        var _this = this;
        this.propietarioRepository.findById(_id, function (err, res) {
            if (err || !res) {
                return callback(err, res);
            }
            _this.propietarioRepository.update(res, data, callback);
        });
    };
    PropietarioBusiness.prototype.delete = function (_id, callback) {
        var _this = this;
        this.propietarioRepository.findById(_id, function (err, res) {
            if (err || !res) {
                return callback(err, res);
            }
            _this.propietarioRepository.delete(res, callback);
        });
    };
    PropietarioBusiness.prototype.findById = function (_id, callback) {
        this.propietarioRepository.findById(_id, callback);
    };
    PropietarioBusiness.prototype.insertLand = function (_id, finca, callback) {
        var _this = this;
        this.propietarioRepository.findById(_id, function (err, propietario) {
            if (err || !propietario) {
                return callback(err, propietario);
            }
            var fincaRepository = new repository_1.FincaRepository();
            fincaRepository.create(finca, function (err, newFinca) {
                if (err || !newFinca) {
                    return callback(err, finca);
                }
                _this.propietarioRepository.insertLand(propietario, newFinca, function (err, res) {
                    if (err || !res) {
                        fincaRepository.delete(newFinca, callback);
                    }
                    return callback(err, res);
                });
            });
        });
    };
    PropietarioBusiness.prototype.getLand = function (_id, callback) {
        var _this = this;
        this.propietarioRepository.findById(_id, function (err, res) {
            if (err || !res) {
                return callback(err, res);
            }
            _this.propietarioRepository.getLand(res, callback);
        });
    };
    ;
    return PropietarioBusiness;
}());
exports.PropietarioBusiness = PropietarioBusiness;
