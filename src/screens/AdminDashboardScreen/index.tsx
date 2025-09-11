import 'react-native-gesture-handler';
import React, { useEffect, useState } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import { Container, Title } from "./styles";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardItem } from "./models/DashboardItem";
import { getDashboardItems } from "./services/adminService";

export default function AdminDashboardScreen() {
  const [items, setItems] = useState<DashboardItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadItems = async () => {
      const data = await getDashboardItems();
      setItems(data);
      setLoading(false);
    };
    loadItems();
  }, []);

  if (loading) return <Container><ActivityIndicator size="large" /></Container>;

  return (
    <Container>
      <Title>Dashboard Admin</Title>
      <ScrollView style={{ width: "100%" }}>
        {items.map(item => <DashboardCard key={item.id} item={item} />)}
      </ScrollView>
    </Container>
  );
}
