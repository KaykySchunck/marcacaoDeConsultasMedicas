import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { User } from "../models/User";

type Props = { user: User };

export function ProfileCard({ user }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Nome: <Text style={styles.value}>{user.name}</Text></Text>
      <Text style={styles.label}>Email: <Text style={styles.value}>{user.email}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 20, borderRadius: 8, backgroundColor: "#fff", marginBottom: 10 },
  label: { fontSize: 16, color: "#555", marginBottom: 8 },
  value: { fontWeight: "bold", color: "#333" },
});
