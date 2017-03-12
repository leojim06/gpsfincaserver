"use strict";
var mongoose_1 = require("mongoose");
var dataAccess_1 = require("../../../config/dataAccess");
var schemas_1 = require("../schemas");
var mongoose = dataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = dataAccess_1.DataAccess.mongooseConnection;
var PropietarioSchema = new mongoose.Schema({
    fName: { type: String, required: true, trim: true },
    lName: { type: String, required: true, trim: true },
    gender: { type: String, required: true, enum: ['M', 'F', 'X'], default: 'X' },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    fincas: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Fincas' }]
}, { timestamps: true });
PropietarioSchema.pre('remove', function (next) {
    var propietario = this;
    propietario.fincas.forEach(function (finca) {
        schemas_1.Fincas.remove({ _id: finca }).exec();
    });
    next();
});
exports.Propietarios = mongooseConnection.model('Propietarios', PropietarioSchema);
