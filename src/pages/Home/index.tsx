import { Alert, FlatList, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { Form } from "../../components/Form";
import { Participant } from "../../components/Participant";
import { StatusBar } from "react-native";
import { useState } from "react";

export function Home() {
  const [users, setUsers] = useState<string[]>([]);
  const [userValue, setUserValue] = useState('');

  const participantes = [''];
  // const participantes = [
  //   { id: 1, name: 'Usuário 1' },
  //   { id: 2, name: 'Usuário 2' },
  //   { id: 3, name: 'Usuário 3' },
  //   { id: 4, name: 'Usuário 4' },
  // ];

  // function handleChange(e) {
  //   setUserValue(e);
  // }

  function handleParticipantAdd() {
    if (participantes.includes(userValue)) {
      return Alert.alert('Participante já existe',
        'Já existe um participante na lista com esse nome');
    }
    setUsers(prevState => [...prevState, userValue]);
    setUserValue('');
  }

  function addUser(name: string) {
    setUsers(prevState => prevState.filter(user => user !== name))
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
      { text: 'Sim', onPress: () => addUser },
      { text: 'Não', style: 'cancel' }
    ])
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor='transparent'
        translucent
      />
      <Text style={styles.textOne}>Lista de Participantes:</Text>
      <Text style={styles.textSecond}>Segunda, 16 de Outubro de 2023</Text>
      <Form
        handleParticipantAdd={handleParticipantAdd}
        handleChange={setUserValue}
        userValue={userValue}
      />

      <FlatList
        data={users}
        // keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Participant
              key={item}
              name={item}
              handleParticipantRemove={() => handleParticipantRemove(item)}
            />
          )
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <Text style={styles.info}>
              Ninguém chegou no evento ainda?
              Adicione participantes a sua lista de presença.
            </Text>
          )
        }}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {users.map((user) => {
          return (
            <Participant
              key={user}
              name={user}
              handleParticipantRemove={() => handleParticipantRemove(user)}
            />
          )
        })}
      </ScrollView> */}
    </View>
  )
}