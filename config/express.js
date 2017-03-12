"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var routes_1 = require("../app/routes");
var App = (function () {
    function App() {
        this.express = express();
        this.setMiddleware();
        this.setRoutes();
    }
    App.prototype.setRoutes = function () {
        this.express.get('/', this.renderHelloWorld);
        this.express.use(new routes_1.Routes().routes);
    };
    App.prototype.renderHelloWorld = function (req, res) {
        res.status(200).send({ message: 'Hello World (^.^)' });
    };
    App.prototype.setMiddleware = function () {
        if (this.express.get('env') === 'development') {
            this.express.use(logger('dev'));
        }
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
            next();
        });
    };
    return App;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new App().express;
