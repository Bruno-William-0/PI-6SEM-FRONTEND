import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface PingResult {
  ip: string;
  alive: boolean;
  time: number;
}

interface Address {
  id: number;
  street?: string; 
}

interface CardHostProps {
  id: number;
  patrimonio: string;
  hostname: string;
  address: Address;
  ping: PingResult;
}

export default function CardHost(props: CardHostProps) {
  const { id, patrimonio, hostname, address, ping } = props;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{hostname}</Text>

      <Text style={styles.text}>ID: {id}</Text>
      <Text style={styles.text}>Patrimônio: {patrimonio}</Text>
      <Text style={styles.text}>Address ID: {address?.id}</Text>

      <View style={styles.pingBox}>
        <Text style={styles.pingTitle}>Status do Ping</Text>

        <Text style={styles.text}>IP: {ping.ip}</Text>

        <Text
          style={[
            styles.status,
            { color: ping.alive ? "#4CFF85" : "#FF6B6B" },
          ]}
        >
          {ping.alive ? "Online" : "Offline"}
        </Text>

        {ping.alive && (
          <Text style={styles.text}>Latência: {ping.time} ms</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0a6cff",
    width: "100%",
    padding: 20,
    borderRadius: 18,
    marginBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    color: "white",
    fontSize: 16,
    marginBottom: 4,
  },
  pingBox: {
    marginTop: 14,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.15)",
  },
  pingTitle: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 6,
  },
  status: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 4,
  },
});
