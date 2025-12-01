import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
  ActivityIndicator,
} from "react-native";
import axios from "../services/axios"; //Para avaliação: Integração API

export default function AddressCreateScreen() {
  const [isUpdate, setIsUpdate] = useState(false);

  const [id, setId] = useState("");

  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (isUpdate && !id) {
      alert("Informe o ID para atualizar.");
      return;
    }

    const obj = {
      rua,
      numero,
      bairro,
      cidade,
      cep,
      latitude: Number(latitude),
      longitude: Number(longitude),
    };

    //Para avaliação: Integração com API
    setLoading(true);
    try {
      if (isUpdate) {
        const res = await axios.put(`/address/${id}`, obj);
        alert("Endereço atualizado com sucesso!");
        console.log(res.data);
      } else {
        const res = await axios.post("/address", obj);
        alert("Endereço cadastrado com sucesso!");
        console.log(res.data);
      }
    } catch (err: any) {
      console.log(err);
      alert("Erro ao comunicar com a API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isUpdate ? "Atualizar Endereço" : "Cadastrar Endereço"}
      </Text>

      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>Modo Atualizar:</Text>
        <Switch
          value={isUpdate}
          onValueChange={setIsUpdate}
          trackColor={{ true: "#0057ff", false: "#777" }}
          thumbColor="#fff"
        />
      </View>

      {isUpdate && (
        <TextInput
          style={styles.input}
          placeholder="ID"
          placeholderTextColor="#cfe3ff"
          value={id}
          onChangeText={setId}
          keyboardType="numeric"
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Rua"
        placeholderTextColor="#cfe3ff"
        value={rua}
        onChangeText={setRua}
      />

      <TextInput
        style={styles.input}
        placeholder="Número"
        placeholderTextColor="#cfe3ff"
        value={numero}
        onChangeText={setNumero}
      />

      <TextInput
        style={styles.input}
        placeholder="Bairro"
        placeholderTextColor="#cfe3ff"
        value={bairro}
        onChangeText={setBairro}
      />

      <TextInput
        style={styles.input}
        placeholder="Cidade"
        placeholderTextColor="#cfe3ff"
        value={cidade}
        onChangeText={setCidade}
      />

      <TextInput
        style={styles.input}
        placeholder="CEP"
        placeholderTextColor="#cfe3ff"
        value={cep}
        onChangeText={setCep}
      />

      <TextInput
        style={styles.input}
        placeholder="Latitude"
        placeholderTextColor="#cfe3ff"
        value={latitude}
        keyboardType="numeric"
        onChangeText={setLatitude}
      />

      <TextInput
        style={styles.input}
        placeholder="Longitude"
        placeholderTextColor="#cfe3ff"
        value={longitude}
        keyboardType="numeric"
        onChangeText={setLongitude}
      />

      <TouchableOpacity
        style={[styles.button, loading ? styles.buttonDisabled : null]}
        onPress={handleSubmit}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#0a6cff" />
        ) : (
          <Text style={styles.buttonText}>
            {isUpdate ? "Atualizar" : "Cadastrar"}
          </Text>
        )}
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
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  switchLabel: {
    color: "white",
    fontSize: 16,
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
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#0a6cff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
