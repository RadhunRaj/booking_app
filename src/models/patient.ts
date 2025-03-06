// src/models/patient.ts

// Define the base interface for bookings
export interface Booking {
  id: number;
  time: string;
  date: string;
  department: string;
  patient: string;
  type: string;
}

// Male doctor class
export class maledocter implements Booking {
  constructor(
    public id: number,
    public time: string,
    public date: string,
    public department: string,
    public patient: string,
    public type: string
  ) {}
}

// Female doctor class
export class femaledocter implements Booking {
  constructor(
    public id: number,
    public time: string,
    public date: string,
    public department: string,
    public patient: string,
    public type: string
  ) {}
}