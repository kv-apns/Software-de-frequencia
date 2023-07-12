import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Participant } from "../components/Participant";

import { styles } from "./style";

export function Home() {
  const [participantName, setParticipantName] = useState('');
  const [participants, setParticipants] = useState([]);
  // const [participants, setParticipants] = useState<string[]>([]);
  
  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
    }

    // setParticipants(prevState => [...prevState, participantName]);
    // setParticipants([participantName]);
    setParticipants([...participants, participantName]);

    setParticipantName('');
  }

  function handleParticipantRemove(name) {
    setParticipants(participants.filter(
      participantName => participantName !== name
  ));

  // Alert.alert("Remover", `Remover o participante ${name}?`, [
  //     {
  //       text: 'Sim',
  //       onPress: () => setParticipants(participants.filter(
  //             participantName => participantName !== name))
  //     },
  //     {
  //       text: 'Não',
  //       style: 'cancel'
  //     }
  //   ])
    
    // Alert.alert("Remover", `Remover o participante ${name}?`, [
    //   {
    //     text: 'Sim',
    //     onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
    //   },
    //   {
    //     text: 'Não',
    //     style: 'cancel'
    //   }
    // ])
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.eventName}
      placeholder="Nome da frequencia"
      
      ></TextInput>

      <Text style={styles.eventDate}>      
      {new Date().toLocaleString()}
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant 
            key={item} 
            name={item} 
            onRemove={() => handleParticipantRemove(item)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}