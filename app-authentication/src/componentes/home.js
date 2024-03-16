import { StyleSheet, View, Text, Button } from "react-native"
export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <Text style={{textTransform: 'uppercase'}}>Autentication Firebase</Text> 
            <View>
                <Button
                   title="Cadastro"
                   onPress={()=> navigation.navigate('cadastro')}
                />
            </View>
            <View>
                <Button
                   title="Login"
                   onPress={()=> navigation.navigate('login')}
                />
            </View>

            <View>
                <Button
                   title="Cadastro contato"
                   onPress={()=> navigation.navigate('cadastro/contato')}
                />
            </View>
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