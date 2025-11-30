// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CadastroHost from './app/CadastroHost';

export default function App() {
  return (
    <View style={styles.container}>
      <CadastroHost />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0077ff', // fundo azul ocupa toda a tela
  },
});
