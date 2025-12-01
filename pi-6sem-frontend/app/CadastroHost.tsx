import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from "react-native";

import axios from "../services/axios";

export default function HostCreateScreen() {
  const [isUpdate, setIsUpdate] = useState(false); // modo atualizar ou criar

  const [id, setId] = useState(""); 
  const [patrimonio, setPatrimonio] = useState("");
  const [hostname, setHostname] = useState("");
  const [ip, setIp] = useState("");
  const [gateway, setGateway] = useState("");
  const [address, setAddress] = useState("");


  const handleSubmit = async () => {
    const body = {
      patrimonio,
      hostname,
      ip,
      gateway,
      address,
    };

    //Para Avaliação: Chamadas de API na tela
    try {
      if (isUpdate) {
        // UPDATE
        const response = await axios.put(`/host/update/${id}`, body);
        alert("Host atualizado com sucesso!");
        console.log(response.data);
      } else {
        // CREATE
        const response = await axios.post("/host/save", body);
        alert("Host cadastrado com sucesso!");
        console.log(response.data);
      }
    } catch (err) {
      alert("Erro ao enviar dados para a API");
      console.log(err);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isUpdate ? "Atualizar Host" : "Cadastrar Host"}
      </Text>

     
      <View style={styles.switchBox}>
        <Text style={{ color: "white", fontSize: 16 }}>
          Modo Atualizar:
        </Text>
        <Switch
          value={isUpdate}
          onValueChange={setIsUpdate}
          thumbColor={isUpdate ? "#fff" : "#ddd"}
          trackColor={{ false: "#777", true: "#004cff" }}
        />
      </View>

 
      {isUpdate && (
        <TextInput
          style={styles.input}
          placeholder="ID do Host"
          placeholderTextColor="#cfe3ff"
          value={id}
          onChangeText={setId}
        />
      )}

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

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>
          {isUpdate ? "Atualizar" : "Cadastrar"}
        </Text>
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
    marginBottom: 20,
    alignSelf: "center",
  },
  switchBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between",
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
