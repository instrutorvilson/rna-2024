import { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import AsyncStorage from '@react-native-async-storage/async-storage'

//configuração do projeto no firebase
import app from '../configuracao/firebaseConfig'
import Toast from 'react-native-toast-message'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function logar() {
        if (!validaDados()) {
            return
        }

        const auth = getAuth(app)
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                AsyncStorage.setItem('userLogado', userCredential.user.email)
            })
            .catch((error) => {
                Toast.show({
                    type: 'error',
                    text1: 'Atenção',
                    text2: error.message
                })
                AsyncStorage.removeItem('userLogado')
            })
    }

    function validaDados() {
        if (email === '') {
            Toast.show({
                type: 'info',
                text1: 'Atenção',
                text2: 'O email deve ser informado'
            })
            return false
        }

        if (senha.length < 6) {
            Toast.show({
                type: 'info',
                text1: 'Atenção',
                text2: 'A senha deve ter no minimo 6 caracteres'
            })
            return false
        }
        return true;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.rotulo}>Informe email</Text>
            <TextInput
                style={styles.input}
                defaultValue={email}
                onChangeText={txt => setEmail(txt)}
                placeholder='Ex:maria@gmail.com'
            />

            <Text style={styles.rotulo}>Informe senha</Text>
            <TextInput
                style={styles.input}
                defaultValue={senha}
                secureTextEntry={true}
                onChangeText={txt => setSenha(txt)}
                placeholder='Ex:123456'
            />


            <View style={styles.containerMenu}>
                <Text style={{margin:'10px', color:'red'}} onPress={logar}>Logar</Text>
                <Text style={{margin:'10px', color:'blue'}} onPress={() => navigation.navigate('cadastro')}>Registrar?</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginVertical: '5px',
        padding: '10px',
        borderBottomWidth: '1px'

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'left',
        justifyContent: 'center',
        padding: '100px'
    },
    containerMenu:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center'
    },
    rotulo:{
        fontWeight:'700', 
        fontSize: '18px',
        fontFamily: 'verdana'
    }
});