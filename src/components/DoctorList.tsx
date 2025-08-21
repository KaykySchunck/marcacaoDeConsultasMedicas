import React from 'react';
import styled from 'styled-components/native';
import { ViewStyle } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import theme from '../styles/theme';

/**
 * Tipagem de um médico individual
 */
interface Doctor {
  id: string;           // Identificador único do médico
  name: string;         // Nome do médico
  specialty: string;    // Especialidade do médico
  image: string;        // URL da imagem/avatar do médico
}

/**
 * Propriedades aceitas pelo componente DoctorList
 */
interface DoctorListProps {
  doctors: Doctor[];                        // Lista de médicos
  onSelectDoctor: (doctor: Doctor) => void; // Callback quando um médico é selecionado
  selectedDoctorId?: string;                 // ID do médico selecionado (opcional)
  style?: ViewStyle;                         // Estilo customizável do container
}

/**
 * Componente funcional que renderiza a lista de médicos
 */
const DoctorList: React.FC<DoctorListProps> = ({
  doctors,
  onSelectDoctor,
  selectedDoctorId,
  style,
}) => {
  return (
    <Container style={style}>
      {/* Itera sobre a lista de médicos */}
      {doctors.map((doctor) => (
        <ListItem
          key={doctor.id}
          onPress={() => onSelectDoctor(doctor)} // Ao clicar, chama o callback
          containerStyle={[
            styles.listItem,
            selectedDoctorId === doctor.id && styles.selectedItem, // Aplica estilo se estiver selecionado
          ]}
        >
          {/* Avatar do médico */}
          <Avatar
            size="medium"
            rounded
            source={{ uri: doctor.image }}
            containerStyle={styles.avatar}
          />
          {/* Informações do médico */}
          <ListItem.Content>
            <ListItem.Title style={styles.name}>{doctor.name}</ListItem.Title>
            <ListItem.Subtitle style={styles.specialty}>
              {doctor.specialty}
            </ListItem.Subtitle>
          </ListItem.Content>
          {/* Ícone de chevron à direita */}
          <ListItem.Chevron />
        </ListItem>
      ))}
    </Container>
  );
};

/**
 * Estilos aplicados aos itens da lista e avatar
 */
const styles = {
  listItem: {
    borderRadius: 8,
    marginVertical: 4,
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  selectedItem: {
    backgroundColor: theme.colors.primary + '20', // Leve transparência quando selecionado
    borderColor: theme.colors.primary,
  },
  avatar: {
    backgroundColor: theme.colors.primary,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  specialty: {
    fontSize: 14,
    color: theme.colors.text,
    opacity: 0.7,
  },
};

/**
 * Container principal da lista
 */
const Container = styled.View`
  margin-bottom: 15px;
`;

export default DoctorList;
