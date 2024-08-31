import Toast from 'react-native-toast-message'
import { StyleSheet, Text, View } from 'react-native';
import CadContato from './cadContato';
import Consulta from './consulta';

export default function App() {
  return (
    <View style={styles.container}>
      <Consulta />
      <Toast />
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
});
