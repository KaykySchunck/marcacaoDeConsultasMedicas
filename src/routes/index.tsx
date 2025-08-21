import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CreateAppointmentScreen from '../screens/CreateAppointmentScreen';
import ProfileScreen from '../screens/ProfileScreen';

/**
 * Criação do Stack Navigator não tipado para rotas básicas
 */
const Stack = createNativeStackNavigator();

/**
 * Componente AppRoutes
 * Define a navegação entre as telas principais do app
 */
export default function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,        // Oculta o header padrão
        animation: 'slide_from_right', // Animação de transição
      }}
    >
      {/* Rotas principais */}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CreateAppointment" component={CreateAppointmentScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
