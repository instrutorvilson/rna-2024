import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { deleteDoc, doc, getFirestore } from 'firebase/firestore'
import app from './firebaseConfig'
import { useState, useRef } from 'react'
import { IContatos } from './interface'

const CardContato: React.FC = ({ contato, excluiu }) => {
    const [editar, setEditar] = useState<boolean>(false)
   
    const [ct, setContato] = useState<IContatos>(contato)
    
    const [msg, setMsg] = useState<any>('')

    const nomeRef = useRef<any>('')
    const emailRef = useRef<any>('')
    const foneRef = useRef<any>('')

    const db = getFirestore(app)

    async function excluir() {
        const documentoRef = doc(db, 'contatos', contato.id)
        await deleteDoc(documentoRef)
        excluiu(true)
    }

    function handleGravar(){

    }

    return (
        <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>ID: {contato.id}</Text>
            <Text>Nome: {contato.nome}</Text>
            <Text>Email: {contato.email}</Text>
            <Text>Fone: {contato.fone}</Text>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ margin: 5 }}>
                    <Button
                        title="Excluir"
                        onPress={excluir}
                    />
                </View>
                <View style={{ margin: 5 }}>
                    <Button
                        title="Editar"
                        onPress={() => setEditar(true)}
                    />
                </View>
            </View>
            {
                editar &&
                <View style={styles.container}>
                    <Text style={{ textTransform: 'uppercase', textAlign: 'center' }}>Cadastro contato</Text>
                    <Text style={styles.rotulo}>Informe nome</Text>
                    <TextInput
                        style={styles.input}
                        value={ct.nome}
                        onChangeText={txt => setContato({...ct, nome:txt})}
                        placeholder="Ex: Maria da Silva"
                        ref={nomeRef}
                    />

                    <Text style={styles.rotulo}>Informe email</Text>
                    <TextInput
                        style={styles.input}
                        value={ct.email}
                        onChangeText={txt => setContato({...ct, email:txt})}
                        placeholder="Ex: maria@gmail.com"
                        ref={emailRef}
                    />

                    <Text style={styles.rotulo}>Informe fone</Text>
                    <TextInput
                        style={styles.input}
                        value={ct.fone}
                        onChangeText={txt => setContato({...ct, nome:txt})}
                        placeholder="Ex: (47)9090-7080"
                        ref={foneRef}
                    />
                    <Button
                        title='gravar'
                        onPress={handleGravar}
                    />

                    <Text>{msg}</Text>
                </View>
            }
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

export default CardContato