import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import axios from "../services/axios";

export default function QrScannerScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  
  const [scannerOpen, setScannerOpen] = useState(false);

  const [scanned, setScanned] = useState(false);
  const [loading, setLoading] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [hostData, setHostData] = useState<any>(null);

  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text style={styles.permissionText}>Permissão da câmera é necessária.</Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Permitir</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleScan = async (data: string) => {
    setScanned(true);
    setLoading(true);

    try {
      const response = await axios.get(`/host/patrimonio/${data}`);
      setHostData(response.data);
      setModalVisible(true);
    } catch (error: any) {
      if (error.response?.status === 404) {
        alert("Patrimônio não encontrado!");
      } else {
        alert("Erro ao consultar API.");
      }
    }

    setLoading(false);

    setTimeout(() => setScanned(false), 2000);
  };

  
  if (!scannerOpen) {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>Scanner de Patrimônio</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setScannerOpen(true)}
          >
            <Text style={styles.buttonText}>Ler QR Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

 
  return (
    <View style={styles.container}>
      <CameraView
        style={StyleSheet.absoluteFill}
        onBarcodeScanned={scanned ? undefined : (result) => handleScan(result.data)}
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
      />

      {/* LOADING */}
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={{ color: "#fff" }}>Consultando...</Text>
        </View>
      )}

      {/* BOTÃO DE FECHAR SCANNER */}
      <TouchableOpacity
        style={styles.closeScannerButton}
        onPress={() => setScannerOpen(false)}
      >
        <Text style={styles.closeScannerText}>Fechar</Text>
      </TouchableOpacity>

      {/* MODAL */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {hostData ? (
              <>
                <Text style={styles.modalTitle}>Dados do Host</Text>

                <Text>ID: {hostData.id}</Text>
                <Text>Patrimônio: {hostData.patrimonio}</Text>
                <Text>Hostname: {hostData.hostname}</Text>
                <Text>IP: {hostData.ip}</Text>
                <Text>Gateway: {hostData.gateway}</Text>

                <Text style={styles.modalSubTitle}>Endereço:</Text>
                <Text>
                  Rua: {hostData.address.rua}, {hostData.address.numero}
                </Text>
                <Text>Bairro: {hostData.address.bairro}</Text>
                <Text>Cidade: {hostData.address.cidade}</Text>
                <Text>CEP: {hostData.address.cep}</Text>

                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.closeButtonText}>Fechar</Text>
                </TouchableOpacity>
              </>
            ) : (
              <Text>Nenhum dado encontrado.</Text>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

// ------------------------------------------------
// ESTILOS
// ------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  permissionText: {
    color: "#000",
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  closeScannerButton: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: "#ff4444",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  closeScannerText: {
    color: "#fff",
    fontSize: 18,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalContent: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  modalSubTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },

  closeButton: {
    marginTop: 20,
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
