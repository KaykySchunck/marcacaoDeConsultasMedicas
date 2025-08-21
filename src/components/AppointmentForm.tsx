/**
 * Componente AppointmentCard
 * 
 * Exibe informações resumidas de uma consulta médica:
 * - Nome e especialidade do médico
 * - Data e horário da consulta
 * - Status (pendente, confirmada ou cancelada)
 * 
 * Este componente utiliza styled-components para estilização
 * e o componente Card da biblioteca @rneui/themed.
 */

import React from 'react';
import styled from 'styled-components/native';
import { ViewStyle } from 'react-native';
import { Card, Text, Avatar } from '@rneui/themed';
import theme from '../styles/theme';

/**
 * Tipagem das propriedades aceitas pelo AppointmentCard
 */
interface AppointmentCardProps {
  doctorName: string;                     // Nome do médico responsável
  date: string;                           // Data da consulta
  time: string;                           // Horário da consulta
  specialty: string;                      // Especialidade do médico
  status: 'pending' | 'confirmed' | 'cancelled'; // Estado da consulta
  onPress?: () => void;                   // Evento de clique no card
  style?: ViewStyle;                      // Estilo customizável do card
}

/**
 * Componente funcional responsável por renderizar o card de consulta
 */
const AppointmentCard: React.FC<AppointmentCardProps> = ({
  doctorName,
  date,
  time,
  specialty,
  status,
  onPress,
  style,
}) => {
  /**
   * Define a cor do status de acordo com a situação da consulta
   */
  const getStatusColor = () => {
    switch (status) {
      case 'confirmed':
        return theme.colors.success;
      case 'cancelled':
        return theme.colors.error;
      default:
        return theme.colors.primary;
    }
  };

  return (
    <Card containerStyle={[styles.card, style]} onPress={onPress}>
      {/* Seção com informações do médico */}
      <DoctorInfo>
        <Avatar
          size="medium"
          rounded
          source={{ uri: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 10)}.jpg` }}
          containerStyle={styles.avatar}
        />
        <TextContainer>
          <DoctorName>{doctorName}</DoctorName>
          <Specialty>{specialty}</Specialty>
        </TextContainer>
      </DoctorInfo>

      {/* Seção com informações da consulta */}
      <AppointmentInfo>
        <InfoRow>
          <InfoLabel>Data:</InfoLabel>
          <InfoValue>{date}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Horário:</InfoLabel>
          <InfoValue>{time}</InfoValue>
        </InfoRow>
      </AppointmentInfo>

      {/* Status da consulta */}
      <StatusContainer>
        <StatusDot color={getStatusColor()} />
        <Text style={{ color: getStatusColor() }}>
          {status === 'confirmed' ? 'Confirmada' : status === 'cancelled' ? 'Cancelada' : 'Pendente'}
        </Text>
      </StatusContainer>
    </Card>
  );
};

/**
 * Estilos adicionais aplicados ao Card e Avatar
 */
const styles = {
  card: {
    borderRadius: 10,
    marginHorizontal: 0,
    marginVertical: 8,
    padding: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  avatar: {
    backgroundColor: theme.colors.primary,
  },
};

// ================== Styled Components ==================

/**
 * Container para o conteúdo do Card
 */
const CardContent = styled.View`
  padding: 10px;
`;

/**
 * Informações do médico
 */
const DoctorInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

const TextContainer = styled.View`
  margin-left: 15px;
`;

const DoctorName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.text};
`;

const Specialty = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text};
  opacity: 0.7;
`;

/**
 * Informações da consulta (data e horário)
 */
const AppointmentInfo = styled.View`
  margin-bottom: 15px;
`;

const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const InfoLabel = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text};
  opacity: 0.7;
`;

const InfoValue = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text};
  font-weight: 500;
`;

/**
 * Status da consulta (dot + texto)
 */
const StatusContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const StatusDot = styled.View<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${(props: { color: string }) => props.color};
  margin-right: 8px;
`;

export default AppointmentCard;
