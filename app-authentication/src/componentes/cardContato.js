import { View, Text, Button, StyleSheet } from "react-native";
import { Pressable } from "react-native";
import {deleteDoc, doc,  getFirestore} from 'firebase/firestore'
import app from '../configuracao/firebaseConfig'

export default function CardContato(props) {
    const db = getFirestore(app)
    async function excluirContato(id) {
        try {
            console.log(id)
          /*  const firestore = app.firestore()
            const documentoRef = firestore.collection('contatos').doc(id);
            await documentoRef.delete()
            */
           const documentoRef = doc(db,'contatos', id)
           await deleteDoc(documentoRef)

            console.log('excluido')
        } catch (error) {
            console.log(`Erro: ${error}`)
            return false
        }
    }


return (
    <View style={styles.container}>
        <View style={{ marginVertical: '10px' }}>
            <Text>Id: {props.item.id}</Text>
            <Text>Nome: {props.item.nome}</Text>
            <Text>Email: {props.item.email}</Text>
            <Text>Fone: {props.item.fone}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Pressable
                style={styles.btacao}
                onPress={() => excluirContato(props.item.id)}
            >
                <Text style={styles.btacaolabel}>Excluir</Text>
            </Pressable>
            <Pressable
                style={[styles.btacao, { backgroundColor: 'green' }]}
            >
                <Text style={styles.btacaolabel}>Cancelar</Text>
            </Pressable>
        </View>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: '20px',
        margin: 'auto',
        borderWidth: '1px',
        marginVertical: '3px'
    },
    btacao: {
        backgroundColor: 'red',
        width: '90px',
        borderRadius: '20px',
        alignItems: 'center',
        marginVertical: '10px',
        padding: '5px'
    },
    btacaolabel: {
        color: 'white',
    }
});