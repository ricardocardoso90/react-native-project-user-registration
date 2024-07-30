import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface Types {
  name: string;
  idade?: number;
  handleParticipantRemove: () => void;
}

export function Participant({ name, handleParticipantRemove }: Types) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleParticipantRemove}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}