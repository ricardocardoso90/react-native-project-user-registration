<<<<<<< HEAD
import { styles } from './styles';
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface Types {
  handleParticipantAdd: () => void;
  handleChange: (value: string) => void;
  userValue: string;
};
=======
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles';

interface Types {
  handleParticipantAdd: () => void;
  handleChange: () => void;
  userValue: string;
}
>>>>>>> 4b66a93e7bbc5c2a490bcfe1f2cb1db5070ab18f

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