// Código completo do LoginScreen com comentários explicativos

import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Input, Button, Text } from 'react-native-elements';
import { useAuth } from '../contexts/AuthContext';
import theme from '../styles/theme';
import { ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

// Tipagem da navegação
type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

// Componente principal da tela de login
const LoginScreen: React.FC = () => {
  const { signIn } = useAuth(); // Contexto de autenticação
  const navigation = useNavigation<LoginScreenProps['navigation']>();
  const [email, setEmail] = useState(''); // Estado do email
  const [password, setPassword] = useState(''); // Estado da senha
  const [loading, setLoading] = useState(false); // Estado do botão loading
  const [error, setError] = useState(''); // Estado de erro

  // Função de login
  const handleLogin = async () => {
    try {
      setLoading(true);
      setError('');
      await signIn({ email, password }); // Chama o signIn do AuthContext
    } catch (err) {
      setError('Email ou senha inválidos'); // Mostra erro caso falhe
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Login</Title>

      {/* Input de email */}
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        containerStyle={styles.input}
      />

      {/* Input de senha */}
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        containerStyle={styles.input}
      />

      {/* Exibe mensagem de erro */}
      {error ? <ErrorText>{error}</ErrorText> : null}

      {/* Botão de login */}
      <Button
        title="Entrar"
        onPress={handleLogin}
        loading={loading}
        containerStyle={styles.button as ViewStyle}
        buttonStyle={styles.buttonStyle}
      />

      {/* Botão para navegar ao cadastro */}
      <Button
        title="Cadastrar Novo Paciente"
        onPress={() => navigation.navigate('Register')}
        containerStyle={styles.registerButton as ViewStyle}
        buttonStyle={styles.registerButtonStyle}
      />

      {/* Sugestão de credenciais para teste */}
      <Text style={styles.hint}>Use as credenciais de exemplo:</Text>
      <Text style={styles.credentials}>
        Admin: admin@example.com / 123456{'\n'}
        Médicos: joao@example.com, maria@example.com, pedro@example.com / 123456
      </Text>
    </Container>
  );
};

// Estilos do componente
const styles = {
  input: { marginBottom: 15 },
  button: { marginTop: 10, width: '100%' },
  buttonStyle: { backgroundColor: theme.colors.primary, paddingVertical: 12 },
  registerButton: { marginTop: 10, width: '100%' },
  registerButtonStyle: { backgroundColor: theme.colors.secondary, paddingVertical: 12 },
  hint: { marginTop: 20, textAlign: 'center' as const, color: theme.colors.text },
  credentials: { marginTop: 10, textAlign: 'center' as const, color: theme.colors.text, fontSize: 12 },
};

// Componentes estilizados
const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  background-color: ${theme.colors.background};
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: ${theme.colors.text};
`;

const ErrorText = styled.Text`
  color: ${theme.colors.error};
  text-align: center;
  margin-bottom: 10px;
`;

export default LoginScreen;
