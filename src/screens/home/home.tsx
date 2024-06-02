import React, { useState } from 'react';
import { Text, View , TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import styles from './styles';
import Participant from '../../components/Participant/participant';

export default function Home() {
  const [inputValue, setInputValue] = useState("")
  const [participants, setParticipants] = useState<string[]>([]);


  const handleAddParticipant = () => {
    if (!inputValue) return;
    if (participants.includes(inputValue)){ 
      return Alert.alert("Participante já existe", "Já exite um participante com esse mesmo nome!")
    };
    setParticipants(prev => [...prev, inputValue])
    setInputValue("")
  }

  const handleRemoveParticipant = (name: string) => {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      { 
        text: "Sim" , 
        onPress: () => {
          setParticipants(prev => prev.filter((prevName) =>  prevName !== name))
          Alert.alert("Deletado")
        }
      },
      { text: "Não" , style: "cancel"}
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Nome do Evento </Text>
      <Text style={styles.subtitle}> Sexta, 4 de Novembro de 2024 </Text>
      
      <View style={styles.form}>
        <TextInput style={styles.input} value={inputValue} onChangeText={setInputValue} placeholder='Nome do participante' placeholderTextColor={"#6B6B6B"} keyboardType='email-address' />
        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        style={styles.participants}
        data={participants}
        keyExtractor={(participant) => participant}
        renderItem={({item }) => 
          <Participant key={item} name={item} onRemove={() => handleRemoveParticipant(item)} />
        }
        ListEmptyComponent={
          <Text style={{color: "#FFF", textAlign: "center"}}>
            Nenhum participante foi adicionado ainda...
          </Text>
        }
      />
    </View>
  );
}
