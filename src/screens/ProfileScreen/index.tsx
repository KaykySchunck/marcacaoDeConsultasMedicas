import 'react-native-gesture-handler';
import React, { useEffect, useState } from "react";
import { Container, Title } from "./styles";
import { ProfileCard } from "./components/ProfileCard";
import { User } from "./models/User";
import { getUserProfile } from "./services/userService";
import { ActivityIndicator, Alert } from "react-native";

export default function ProfileScreen() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await getUserProfile();
        setUser(data);
      } catch {
        Alert.alert("Erro", "Não foi possível carregar perfil");
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, []);

  if (loading) return <Container><ActivityIndicator size="large" /></Container>;

  return (
    <Container>
      <Title>Meu Perfil</Title>
      {user && <ProfileCard user={user} />}
    </Container>
  );
}
