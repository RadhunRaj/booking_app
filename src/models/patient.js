"use strict";
// src/models/patient.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.femaledocter = exports.maledocter = void 0;
// Male doctor class
var maledocter = /** @class */ (function () {
    function maledocter(id, time, date, department, patient, type) {
        this.id = id;
        this.time = time;
        this.date = date;
        this.department = department;
        this.patient = patient;
        this.type = type;
    }
    return maledocter;
}());
exports.maledocter = maledocter;
// Female doctor class
var femaledocter = /** @class */ (function () {
    function femaledocter(id, time, date, department, patient, type) {
        this.id = id;
        this.time = time;
        this.date = date;
        this.department = department;
        this.patient = patient;
        this.type = type;
    }
    return femaledocter;
}());
exports.femaledocter = femaledocter;
