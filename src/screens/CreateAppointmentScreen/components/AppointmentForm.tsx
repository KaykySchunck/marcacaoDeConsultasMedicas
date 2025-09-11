import React, { useState } from "react";
import { View, TextInput, Button, ActivityIndicator } from "react-native";
import { Appointment } from "../models/Appointment";

type Props = {
  onSubmit: (appointment: Appointment) => void;
  loading: boolean;
};

export function AppointmentForm({ onSubmit, loading }: Props) {
  const [specialty, setSpecialty] = useState("");
  const [date, setDate] = useState("");

  const handlePress = () => {
    if (!specialty || !date) {
      alert("Preencha todos os campos");
      return;
    }
    onSubmit({ specialty, date });
  };

  return (
    <View style={{ gap: 10 }}>
      <TextInput
        placeholder="Especialidade"
        value={specialty}
        onChangeText={setSpecialty}
        style={{ borderWidth: 1, padding: 10, borderRadius: 8 }}
      />
      <TextInput
        placeholder="Data"
        value={date}
        onChangeText={setDate}
        style={{ borderWidth: 1, padding: 10, borderRadius: 8 }}
      />
      {loading ? <ActivityIndicator size="large" /> : <Button title="Agendar" onPress={handlePress} />}
    </View>
  );
}
