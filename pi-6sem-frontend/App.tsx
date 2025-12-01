import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Menu  from "./app/Menu"

export default function App() {
  return (
    <View style={styles.container}>
     <Menu></Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#0a6cff",
    padding: 18,
    marginBottom: 20,
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
