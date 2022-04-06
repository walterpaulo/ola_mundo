import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Button texto={'deu certo'}>Button</Button>
      <Text style={styles.texto}>Ola mundo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: '#000'
  }
});
