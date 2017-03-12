"use strict";
var dataAccess_1 = require("../../../config/dataAccess");
var schemas_1 = require("../schemas");
var mongoose = dataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = dataAccess_1.DataAccess.mongooseConnection;
var FincaSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    area: { type: Number, required: true, trim: true },
    location: {
        type: [Number],
        required: true,
        index: '2d'
    }
});
FincaSchema.pre('remove', function (next) {
    var finca = this;
    schemas_1.Propietarios.update({ fincas: finca._id }, { $pull: { fincas: finca._id } }).exec();
    next();
});
exports.Fincas = mongooseConnection.model('Fincas', FincaSchema);
