import { StyleSheet, View} from 'react-native';
import HandleGestos from './handleGestos';
import ListaCards from './listaCards';

export default function App() { 
  return (
    <View style={styles.container}>
      <ListaCards />
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
  box:{
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  }
});
