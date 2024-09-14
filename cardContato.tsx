import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native'
import { collection, deleteDoc, doc, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore'
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

    async function handleGravar() {
        console.log(contato.urlImage)
        const documentoRef = doc(db, 'contatos', contato.id)
        try {
            if ((contato.email != ct.email)) {
                const dados = await query(collection(db, 'contatos'), where('email', '==', ct.email))
                const snapshotDados = await getDocs(dados)

                if (snapshotDados.size > 0) {
                    setMsg('Já existe um contato com o email informado')
                    return
                }
            }
            await updateDoc(documentoRef, { nome: ct.nome, email: ct.email, fone: ct.fone })
            setMsg("Contato alterado com sucesso")

        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    }

    return (
        <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text style={{fontWeight: '500'}}>ID: <Text style={{fontWeight: '300'}}> {contato.id} </Text> </Text>
            <Text style={{fontWeight: '500'}}>Nome: <Text style={{fontWeight: '300'}}> {contato.nome} </Text></Text>
            <Text style={{fontWeight: '500'}}>Email: <Text style={{fontWeight: '100'}}> {contato.email} </Text></Text>
            <Text style={{fontWeight: '500'}}>Fone: <Text style={{fontWeight: '100'}}> {contato.fone} </Text></Text>
            <Image
                source={{ uri: contato.urlImage }}
                style={styles.image}
            />
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
                        onChangeText={txt => setContato({ ...ct, nome: txt })}
                        placeholder="Ex: Maria da Silva"
                        ref={nomeRef}
                    />

                    <Text style={styles.rotulo}>Informe email</Text>
                    <TextInput
                        style={styles.input}
                        value={ct.email}
                        onChangeText={txt => setContato({ ...ct, email: txt })}
                        placeholder="Ex: maria@gmail.com"
                        ref={emailRef}
                    />

                    <Text style={styles.rotulo}>Informe fone</Text>
                    <TextInput
                        style={styles.input}
                        value={ct.fone}
                        onChangeText={txt => setContato({ ...ct, fone: txt })}
                        placeholder="Ex: (47)9090-7080"
                        ref={foneRef}
                    />

                    <Image
                        source={{ uri: contato.urlImage }}
                        style={{ width: 40, height: 40 }}
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
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center'
    }
});

export default CardContato