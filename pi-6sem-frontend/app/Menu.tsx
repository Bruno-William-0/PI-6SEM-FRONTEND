import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Menu() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Principal</Text>

      <Link href="/ListarQR" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ler QR Code</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/CadastroHost" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar Host</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/CadastroAddress" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar Address</Text>
        </TouchableOpacity>
      </Link>
  

     <Link href="/Mapa" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar Address</Text>
        </TouchableOpacity>
      </Link>
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
