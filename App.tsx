import Toast from 'react-native-toast-message'
import { StyleSheet, Text, View } from 'react-native';
import CadContato from './cadContato';
import Consulta from './consulta';
import CadUser from './caduser';
import TakeFoto from './TakeFoto';
import TakeFoto2 from './Camera2';

export default function App() {
  return (
    <View style={styles.container}>
      <TakeFoto2/>
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
