
import { useRef, useState } from 'react';
import {
  Animated,
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  
} from 'react-native';
import Login from './login';

export default function App() {
  const [texto, setTexto] = useState('Mostrar')
  const fadeIn = useRef(new Animated.Value(0)).current
  const [focused, setfocused] = useState(0)

  const cordeFundo = useRef(new Animated.Value(0)).current

  const handlefocus = (txt: number) => {
    Animated.timing(
      cordeFundo,
      {
        toValue: 1,
        duration: 1,
        useNativeDriver: true
      }
    ).start()
    setfocused(txt)
  }

  const handleBlur = () => {
    Animated.timing(
      cordeFundo,
      {
        toValue: 0,
        duration: 1,
        useNativeDriver: true
      }
    ).start()
  }

  const corInterpolada = cordeFundo.interpolate(
    {
      inputRange: [0, 1],
      outputRange: ['#fff', '#add8e6']
    }
  )

  function animar() {
    let valor = 0
    if (texto === 'Mostrar') {
      valor = 1
      setTexto('Esconder')
    }
    else {
      valor = 0
      setTexto('Mostrar')
    }

    Animated.timing(
      fadeIn,
      {
        toValue: valor,
        duration: 10,
        useNativeDriver: true
      }
    ).start()

  }

  
  return (
    <View style={styles.container}>
      {/*<Animated.View style={{ ...styles.fadingContainer, opacity: fadeIn }}>
        <Text>Olá Pessoal</Text>
      </Animated.View>
      <Button
        title={texto}
        onPress={animar}
      />

      <TouchableHighlight
        style={{ backgroundColor: 'red' }}
        underlayColor='#fff'
        onPress={() => alert('opa')}
      >
        <Text>Clique aqui</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={{ backgroundColor: 'red' }}
        underlayColor='#fff'
        onPress={() => alert('opa')}
      >
        <Text>Clique aqui</Text>
      </TouchableHighlight>

      <Animated.View style={{ backgroundColor: focused == 1 ? corInterpolada : '#fff' }}>
        <TextInput
          style={{ padding: 20 }}
          onFocus={() => handlefocus(1)}
          onBlur={handleBlur}
          placeholder='informe seu nome'
        />
      </Animated.View>
      <Animated.View style={{ backgroundColor: focused == 2 ? corInterpolada : '#fff' }}>
        <TextInput
          style={{ padding: 20 }}
          onFocus={() => handlefocus(2)}
          onBlur={handleBlur}
          placeholder='informe seu nome'
        />
  </Animated.View>*/}
  <Login />
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
  fadingContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  }
});
