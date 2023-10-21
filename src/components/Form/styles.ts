import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    width: '100%',
    marginTop: 36,
    marginBottom: 42
  },

  input: {
    backgroundColor: '#1F1E25',
    flex: 1,
    height: 56,
    borderRadius: 5,
    color: '#FDFCFE',
    padding: 16,
    fontSize: 16,
  },

  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#31CF37',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: '#FFF',
    fontSize: 24
  }
})