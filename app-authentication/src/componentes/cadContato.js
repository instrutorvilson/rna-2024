import { useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function CadContato({navigation}){
    useEffect(()=> {verificaUserLogado()} ,[])

    async function verificaUserLogado(){
        let userLogado = await AsyncStorage.getItem('userLogado')
        if(userLogado == null){
            navigation.navigate('login')
        }
    }

    return(
        <View style={styles.container}>
            <Text style={{textTransform: 'uppercase'}}>Cadastro contato</Text> 
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });