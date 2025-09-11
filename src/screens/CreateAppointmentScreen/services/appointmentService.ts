import { Appointment } from "../models/Appointment";

export async function scheduleAppointment(appointment: Appointment): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}
