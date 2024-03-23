import { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import app from '../configuracao/firebaseConfig'
import { FlatList } from "react-native-gesture-handler"
import CardContato from "./cardContato"

export default function ConsultaContatos() {
    const db = getFirestore(app)
    var lista = []
    useEffect(() => { carregarContatos() }, [])

    async function carregarContatos() {
        let query = await getDocs(collection(db, 'contatos'))
        query.forEach((doc) => {
            let obj = { id: doc.id, nome: doc.data().nome, email:doc.data().email, fone: doc.data().fone}
            lista.push(obj)
            console.log(doc.id)
        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Consulta Contatos</Text>
            {
                <FlatList
                    data={lista}
                    renderItem={({ item }) => <CardContato item={item} />}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    label: {
        alignSelf: 'center',
        textTransform: 'uppercase',
        marginVertical: '20px'
    }
});

