import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import { Participant } from './style';
import { styles } from './style';

export function Home() {
  // variável de estado (Hooks)
  const [participantName, setParticipantName] = useState('');
  const [participants, setParticipants] = useState([]);

  function addParticipant() {
    if (participants.includes(participantName)) {
      return Alert.alert('Participante já existe');
    }

    setParticipants([...participants, participantName]);

    setParticipantName('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Listagem de Evento</Text>

      <Text style={styles.eventDate}>
        {/* Código JS puro */}
        {new Date().toLocaleString()}{' '}
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B"
          onChangeText={setParticipantName}
        />

        <TouchableOpacity style={styles.button} onPress={addParticipant}>
          +
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Participant key={item} name={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
