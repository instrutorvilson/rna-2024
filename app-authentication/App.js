import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message'
import CadUser from './src/componentes/cadUser';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{marginBottom:'20px', textTransform:'uppercase'}}>Authentication Firebase</Text>
      <CadUser />
      <StatusBar style="auto" />
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
