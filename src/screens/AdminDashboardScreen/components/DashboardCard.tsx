import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DashboardItem } from "../models/DashboardItem";

type Props = { item: DashboardItem };

export function DashboardCard({ item }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 20, borderRadius: 8, backgroundColor: "#f5f5f5", marginBottom: 10 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
});
