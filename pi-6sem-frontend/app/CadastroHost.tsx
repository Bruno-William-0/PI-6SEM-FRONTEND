import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function HostCreateScreen({ onSubmit }) {

  const [patrimonio, setPatrimonio] = useState("");
  const [hostname, setHostname] = useState("");
  const [ip, setIp] = useState("");
  const [gateway, setGateway] = useState("");
  const [address, setAddress] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Host</Text>

      <TextInput
        style={styles.input}
        placeholder="Patrimônio"
        placeholderTextColor="#cfe3ff"
        value={patrimonio}
        onChangeText={setPatrimonio}
      />

      <TextInput
        style={styles.input}
        placeholder="Hostname"
        placeholderTextColor="#cfe3ff"
        value={hostname}
        onChangeText={setHostname}
      />

      <TextInput
        style={styles.input}
        placeholder="IP"
        placeholderTextColor="#cfe3ff"
        value={ip}
        onChangeText={setIp}
      />

      <TextInput
        style={styles.input}
        placeholder="Gateway"
        placeholderTextColor="#cfe3ff"
        value={gateway}
        onChangeText={setGateway}
      />

      <TextInput
        style={styles.input}
        placeholder="ID do Address"
        placeholderTextColor="#cfe3ff"
        value={address}
        onChangeText={setAddress}
      />

      <TouchableOpacity style={styles.button} onPress={() => onSubmit({
        patrimonio,
        hostname,
        ip,
        gateway,
        address
      })}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a6cff",
    padding: 30,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
    alignSelf: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 14,
    borderRadius: 10,
    marginBottom: 14,
    color: "white",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
  },
  button: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#0a6cff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
