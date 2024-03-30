import { useEffect, useState } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import app from '../configuracao/firebaseConfig'
import { FlatList } from "react-native-gesture-handler"
import CardContato from "./cardContato"

export default function ConsultaContatos() {
    const db = getFirestore(app)
    var lista = []
   
    useEffect(() => {
         carregarContatos()
         console.log('ola')
     }, [lista])

    async function carregarContatos() {
        let query = await getDocs(collection(db, 'contatos'))
        query.forEach((doc) => {
            let obj = { id: doc.id, nome: doc.data().nome, email:doc.data().email, fone: doc.data().fone}
            lista.push(obj)
        })
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.label}>Consulta Contatos</Text>
            {
                <FlatList                    
                    data={ lista }
                    renderItem={({ item }) => <CardContato item={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    label: {
        alignSelf: 'center',
        textTransform: 'uppercase',
        marginVertical: '20px'
    }
});

