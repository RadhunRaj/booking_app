// src/services/patientService.ts
import { Booking, maledocter, femaledocter } from "../models/patient";

export class PatientService {
  private bookings: Booking[] = [];

  public async createAppointment(bookingData: Partial<Booking>): Promise<Booking> {
    const { id, time, date, department, patient, type } = bookingData;

    if (!id || !time || !date || !department || !patient || !type) {
      throw new Error("All fields are required.");
    }

    let appointment: Booking;
    
    if (type === "maledoctor") {
      appointment = new maledocter(
        id, 
        time, 
        date, 
        department, 
        patient, 
        type
      );
    } else if (type === "femaledoctor") {
      appointment = new femaledocter(
        id, 
        time, 
        date, 
        department, 
        patient, 
        type
      );
    } else {
      throw new Error("Invalid doctor type.");
    }

    // Check for duplicate ID
    const existingAppointment = this.bookings.find(b => b.id === id);
    if (existingAppointment) {
      throw new Error("An appointment with this ID already exists.");
    }

    this.bookings.push(appointment);
    return appointment;
  }

  public async getAppointments(): Promise<Booking[]> {
    return this.bookings;
  }

  public async editAppointment(id: string, updatedData: Partial<Booking>): Promise<Booking> {
    const parsedId = isNaN(Number(id)) ? id : Number(id);

    const appointmentIndex = this.bookings.findIndex(b => b.id === parsedId);
    if (appointmentIndex === -1) {
     
      
      throw new Error("Appointment not found.");
    }

    this.bookings[appointmentIndex] = { ...this.bookings[appointmentIndex], ...updatedData };
    return this.bookings[appointmentIndex];
  }

  public async deleteAppointment(id: string): Promise<void> {
    // Convert id to number if necessary
    const parsedId = isNaN(Number(id)) ? id : Number(id);

    const appointmentIndex = this.bookings.findIndex(b => b.id === parsedId);
    console.log(appointmentIndex);
    
    if (appointmentIndex === -1) {
      throw new Error("Appointment not found.");
    }
   
    this.bookings.splice(appointmentIndex, 1);
}

}
 