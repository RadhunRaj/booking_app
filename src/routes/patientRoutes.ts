// src/routes/patientRoutes.ts
import { Router } from "express";
import { PatientController } from "../controllers/patientController";

const router = Router();
const patientController = new PatientController();

router.post("/patient", (req, res) => patientController.create(req, res));
router.get("/patient", (req, res) => patientController.getAll(req, res));
router.put("/patient/:id", (req,res)=> patientController.editPatient(req,res));
router.delete("/patient/:id", (req,res) => patientController.deletePatient(req,res));
export default router;