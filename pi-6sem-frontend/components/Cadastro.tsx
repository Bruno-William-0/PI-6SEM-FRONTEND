import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function HostCreateScreen() {

  const [patrimonio, setPatrimonio] = useState("");
  const [hostname, setHostname] = useState("");
  const [ip, setIp] = useState("");
  const [gateway, setGateway] = useState("");
  const [address, setAddress] = useState(""); // depois você troca por um select

  const handleSubmit = () => {
    const data = {
      patrimonio,
      hostname,
      ip,
      gateway,
      address,
    };

    console.log("Dados enviados:", data);
    // aqui você chama seu backend via fetch/axios
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Host</Text>

      <TextInput
        style={styles.input}
        placeholder="Patrimônio"
        value={patrimonio}
        onChangeText={setPatrimonio}
      />

      <TextInput
        style={styles.input}
        placeholder="Hostname"
        value={hostname}
        onChangeText={setHostname}
      />

      <TextInput
        style={styles.input}
        placeholder="IP"
        value={ip}
        onChangeText={setIp}
      />

      <TextInput
        style={styles.input}
        placeholder="Gateway"
        value={gateway}
        onChangeText={setGateway}
      />

      <TextInput
        style={styles.input}
        placeholder="ID do Address"
        value={address}
        onChangeText={setAddress}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
