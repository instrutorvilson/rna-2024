import { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore"
import app from '../configuracao/firebaseConfig'

import Toast from 'react-native-toast-message'

export default function CadContato({ navigation }) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')

    const nomeRef = useRef('')
    const emailRef = useRef('')
    const foneRef = useRef('')

    //pegar a base de dados
    const db = getFirestore(app)
    useEffect(() => { verificaUserLogado() }, [])

    async function verificaUserLogado() {
        let userLogado = await AsyncStorage.getItem('userLogado')
        if (userLogado == null) {
            navigation.navigate('login')
        }
    }

    async function emailJaCadastrado(_email) {
       try{
        const querySnapshot  = await getDocs(collection(db,'contatos'), where('email','==', _email));
        let emailExists = false
        querySnapshot .forEach((doc) => {
            if(_email === doc.data().email){
                emailExists = true
            }
        })
        return emailExists
       }catch(error){
           console.log(`Erro: ${error}`)
           return false
       }
    }

    async function handleGravar() {
        if (!validarDados()) {
            return
        }
        if (emailJaCadastrado(email)) {
            Toast.show({
                type: 'error',
                text1: 'Cuidado',
                text2: 'Já existe um contato com esse email'
            })
            return
        }

        //grava a coleçaõ no google cloud
        await addDoc(collection(db, 'contatos'), { nome, email, fone })
        Toast.show({
            type: 'success',
            text1: 'Parabéns',
            text2: 'O contato foi cadastrado com sucesso'
        })
    }

    function validarDados() {
        if (nome == '') {
            Toast.show({
                type: 'error',
                text1: 'Cuidado',
                text2: 'O nome deve ser informado'
            })
            nomeRef.current.focus()
            return false
        }
        //valida se email foi informado
        if (email == '') {
            Toast.show({
                type: 'error',
                text1: 'Cuidado',
                text2: 'O email deve ser informado'
            })
            emailRef.current.focus()
            return false
        }
        //valida se fone foi informado
        if (fone == '') {
            Toast.show({
                type: 'error',
                text1: 'Cuidado',
                text2: 'O fone deve ser informado'
            })
            foneRef.current.focus()
            return false
        }

        //se não aconteceu nenhum problema retorna true
        return true
    }

    return (
        <View style={styles.container}>
            <Text style={{ textTransform: 'uppercase', textAlign: 'center' }}>Cadastro contato</Text>
            <Text style={styles.rotulo}>Informe nome</Text>
            <TextInput
                style={styles.input}
                defaultValue={nome}
                onChangeText={txt => setNome(txt)}
                placeholder="Ex: Maria da Silva"
                ref={nomeRef}
            />

            <Text style={styles.rotulo}>Informe email</Text>
            <TextInput
                style={styles.input}
                defaultValue={email}
                onChangeText={txt => setEmail(txt)}
                placeholder="Ex: maria@gmail.com"
                ref={emailRef}
            />

            <Text style={styles.rotulo}>Informe fone</Text>
            <TextInput
                style={styles.input}
                defaultValue={fone}
                onChangeText={txt => setFone(txt)}
                placeholder="Ex: (47)9090-7080"
                ref={foneRef}
            />
            <Button
                title='gravar'
                onPress={handleGravar}
            />
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
    rotulo: {
        fontWeight: '700',
        fontSize: '14px',
        fontFamily: 'verdana',
        marginTop: '10px'
    }
});