import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { Animated, Button, Pressable, Text, Alert, View } from 'react-native';
import styles from './estilos'

export default function Animacao1() {
  const fadeIn = useRef(new Animated.Value(0)).current
  const altura = useRef(new Animated.Value(50)).current
  

  useEffect(()=>{
    Animated.timing(fadeIn,{
      toValue: 1,
      duration: 10000,
      useNativeDriver: false,
    }).start()
  },[])

  const aumentarAltura = ()=>{
    Animated.timing(altura,{
      toValue: 300,
      duration: 100,
      useNativeDriver: false,
    }).start()
  }

  const diminuirAltura = ()=>{
    Animated.timing(altura,{
      toValue: 50,
      duration: 100,
      useNativeDriver: false,
    }).start()
  }

  return (
    <>
      <Animated.View style={[styles.container,{opacity:fadeIn}]}>
        <Pressable 
          style={styles.bt}               
        >
            <Text>Clique aqui</Text>
        </Pressable>     
        
        <StatusBar style="auto" />
      </Animated.View>
      <View>
        <Button 
           title='Aumentar'
           onPress={aumentarAltura}
        />
        <Button 
           title='Diminuir'
           onPress={diminuirAltura}
        />
      </View>
      <Animated.View style={[styles.bt,{ height: altura, width: 20}]}>
         <Pressable 
            style={styles.bt}
          >
              <Text>Clique aqui</Text>
          </Pressable> 
      </Animated.View>
    </>
  );
}


