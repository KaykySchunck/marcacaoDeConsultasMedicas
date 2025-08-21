import React from 'react';
import styled from 'styled-components/native';
import { Avatar } from 'react-native-elements';
import { useAuth } from '../contexts/AuthContext';
import theme from '../styles/theme';

/**
 * Componente Header
 * Exibe as informações do usuário logado no topo da tela.
 */
const Header: React.FC = () => {
  const { user } = useAuth(); // Hook customizado para acessar dados do usuário

  if (!user) return null; // Caso não haja usuário logado, não renderiza nada

  return (
    <Container>
      {/* Seção com informações do usuário */}
      <UserInfo>
        <Avatar
          size="medium"
          rounded
          source={{ uri: user.image }} // Imagem do usuário
          containerStyle={styles.avatar}
        />
        <TextContainer>
          <WelcomeText>Bem-vindo(a),</WelcomeText>
          <UserName>{user.name}</UserName>
        </TextContainer>
      </UserInfo>
    </Container>
  );
};

/**
 * Estilo do Avatar
 */
const styles = {
  avatar: {
    backgroundColor: theme.colors.primary,
  },
};

// ================== Styled Components ==================

/**
 * Container principal do Header
 */
const Container = styled.View`
  background-color: ${theme.colors.background};
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.border};
`;

/**
 * Container das informações do usuário
 */
const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

/**
 * Container do texto (nome e mensagem de boas-vindas)
 */
const TextContainer = styled.View`
  margin-left: 12px;
`;

/**
 * Texto de boas-vindas
 */
const WelcomeText = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text};
  opacity: 0.7;
`;

/**
 * Nome do usuário
 */
const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.text};
`;

export default Header;
