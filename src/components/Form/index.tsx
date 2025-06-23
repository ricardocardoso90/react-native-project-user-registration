import { styles } from './styles';
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface Types {
  handleParticipantAdd: () => void;
  handleChange: (value: string) => void;
  userValue: string;
};

export function Form({ handleParticipantAdd, handleChange, userValue }: Types) {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Digite alguma coisa."
        placeholderTextColor="#6B6B6B"
        onChangeText={handleChange}
        value={userValue}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleParticipantAdd}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}