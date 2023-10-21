import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    marginBottom: 10,

    flexDirection: 'row',
    alignItems: 'center'
  },

  name: {
    color: '#FFF',
    flex: 1,
    fontSize: 16,
    marginLeft: 16
  },

  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#E23C44',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: '#FFF',
    fontSize: 24
  }
});