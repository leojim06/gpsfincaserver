"use strict";
var ExpressResponse = (function () {
    function ExpressResponse() {
    }
    ExpressResponse.prototype.responseGet = function (res, result) {
        res.status(200).send({ 'RESULT': result });
    };
    ExpressResponse.prototype.responseUpdate = function (res, result) {
        res.status(200).send({ 'UPDATE': result });
    };
    ExpressResponse.prototype.responseCreate = function (res, result) {
        res.status(200).send({ 'CREATE': result });
    };
    ExpressResponse.prototype.responseDelete = function (res, result) {
        res.status(200).send({ 'DELETE': result });
    };
    ExpressResponse.prototype.responseNotFound = function (res, msg) {
        res.status(404).send({ 'ERROR': msg });
    };
    ExpressResponse.prototype.responseError = function (res, error) {
        res.status(400).send({ 'ERROR': error, 'MSG': 'Error en su solicitud' });
    };
    ExpressResponse.prototype.responseServerError = function (res, error) {
        res.status(500).send({ 'SERVER_ERROR': error });
    };
    return ExpressResponse;
}());
exports.ExpressResponse = ExpressResponse;
