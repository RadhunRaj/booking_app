"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/patientRoutes.ts
var express_1 = require("express");
var patientController_1 = require("../controllers/patientController");
var router = (0, express_1.Router)();
var patientController = new patientController_1.PatientController();
router.post("/patient", function (req, res) { return patientController.create(req, res); });
router.get("/patient", function (req, res) { return patientController.getAll(req, res); });
router.put("/patient/:id", function (req, res) { return patientController.editPatient(req, res); });
router.delete("/patient/:id", function (req, res) { return patientController.deletePatient(req, res); });
exports.default = router;
