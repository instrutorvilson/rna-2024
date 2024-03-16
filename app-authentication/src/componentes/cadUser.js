import { useEffect, useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
//configuração do projeto no firebase
import app from '../configuracao/firebaseConfig'
import Toast from 'react-native-toast-message'

export default function CadUser() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')

    function gravar() {
        if (!validaDados()) {
            return
        }

        const auth = getAuth(app)
        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                Toast.show({
                    type: 'success',
                    text1: 'Sucesso',
                    text2: 'Usuário cadastrado com sucesso'
                })
                limpaCampos()
            })
            .catch((error) => console.log(error.message))
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

        if (senha != confirmaSenha) {
            Toast.show({
                type: 'info',
                text1: 'Atenção',
                text2: 'Senha e confirmação de senha não confere'
            })
            return false
        }
        return true;
    }

    function limpaCampos() {
        setEmail('')
        setSenha('')
        setConfirmaSenha('')
    }
    return (
        <View>
            <Text>Informe email</Text>
            <TextInput
                style={styles.input}
                defaultValue={email}
                onChangeText={txt => setEmail(txt)}
                placeholder='Ex:maria@gmail.com'
            />

            <Text>Informe senha</Text>
            <TextInput
                style={styles.input}
                defaultValue={senha}
                secureTextEntry={true}
                onChangeText={txt => setSenha(txt)}
                placeholder='Ex:123456'
            />

            <Text>Confirme senha</Text>
            <TextInput
                style={styles.input}
                defaultValue={confirmaSenha}
                secureTextEntry={true}
                onChangeText={txt => setConfirmaSenha(txt)}
                placeholder='Ex:123456'
            />
            <Button
                title='Gravar'
                onPress={gravar}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginVertical: '5px',
        padding: '10px',

    }
});