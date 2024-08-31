import { useState } from 'react'
import Toast from 'react-native-toast-message'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import app from './firebaseConfig'

const CadUser: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')
    const [confirmaSenha, setConfirmaSenha] = useState<string>('')
    const [msg, setMsg] = useState<string>('')

    const auth = getAuth(app)

    function logar() {
        signInWithEmailAndPassword(auth, email, senha)
        .then(credential => {
           let user = credential.user
           user.getIdTokenResult()
           .then(x => localStorage.setItem('userLogado', x.token))
        })
        .catch(error => setMsg(error.message));
        limpaCampos()
    }

    function gravar() {
        if (!validaDados()) {
            return
        }

        createUserWithEmailAndPassword(auth, email, senha)
            .then(credential => {
                Toast.show({
                    type: 'success',
                    text1: 'Sucesso',
                    text2: 'Usuário cadastrado com sucesso'
                })
                limpaCampos()
            })
            .catch(error => setMsg(error.message));
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
        setMsg('')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.rotulo}>Informe email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={txt => setEmail(txt)}
                placeholder='Ex:maria@gmail.com'
            />

            <Text style={styles.rotulo}>Informe senha</Text>
            <TextInput
                style={styles.input}
                value={senha}
                secureTextEntry={true}
                onChangeText={txt => setSenha(txt)}
                placeholder='Ex:123456'
            />

            <Text style={styles.rotulo}>Confirme senha</Text>
            <TextInput
                style={styles.input}
                value={confirmaSenha}
                secureTextEntry={true}
                onChangeText={txt => setConfirmaSenha(txt)}
                placeholder='Ex:123456'
            />
            <View style={{ flexDirection: 'row' }}>
                <View style={{marginRight: 10}}>
                    <Button
                        title='Gravar'
                        onPress={gravar}
                    />
                </View>
                <View>
                    <Button
                        title='Logar'
                        onPress={logar}
                    />
                </View>
                <Text>{msg}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 5,
        padding: 10,
        borderBottomWidth: 1

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 100
    },
    rotulo: {
        fontWeight: '700',
        fontSize: 18,
        fontFamily: 'verdana'
    }
});

export default CadUser