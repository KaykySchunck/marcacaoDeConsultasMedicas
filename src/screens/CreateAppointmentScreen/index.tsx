import 'react-native-gesture-handler';
import React, { useState } from "react";
import { Alert } from "react-native";
import { Container, Title } from "./styles";
import { AppointmentForm } from "./components/AppointmentForm";
import { Appointment } from "./models/Appointment";
import { scheduleAppointment } from "./services/appointmentService";

export default function CreateAppointmentScreen() {
  const [loading, setLoading] = useState(false);

  const handleSchedule = async (appointment: Appointment) => {
    setLoading(true);
    try {
      await scheduleAppointment(appointment);
      Alert.alert("Sucesso", "Consulta agendada com sucesso!");
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível agendar a consulta.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Agendar Consulta</Title>
      <AppointmentForm onSubmit={handleSchedule} loading={loading} />
    </Container>
  );
}
