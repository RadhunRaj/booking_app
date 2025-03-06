// src/controllers/patientController.ts
import { Request, Response } from "express";
import { PatientService } from "../services/patientServices";

const patientService = new PatientService();

export class PatientController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { id, time, date, department, patient, type } = req.body;

      const newAppointment = await patientService.createAppointment({ 
        id: Number(id), 
        time, 
        date, 
        department, 
        patient, 
        type 
      });
      
      res.status(201).json(newAppointment);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const appointments = await patientService.getAppointments();
      res.status(200).json(appointments);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

   public async editPatient(req: Request, res: Response): Promise<void> {
    try {
      const { id, time, date, department, patient, type } = req.body;
      
     
      const updatedAppointment = await patientService.editAppointment(id, {
        time, 
        date, 
        department, 
        patient, 
        type 
      });
      
      if (!updatedAppointment) {
        res.status(404).json({ message: "Appointment not found." });
        return;
      }
      
      res.status(200).json(updatedAppointment);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async deletePatient(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      
      if (!id) {
        res.status(400).json({ message: "Invalid appointment ID." });
        return;
      }
  
      await patientService.deleteAppointment(id); // Assume success if no error is thrown
  
      res.status(200).json({ message: "Appointment deleted successfully." });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
  
  
  
}