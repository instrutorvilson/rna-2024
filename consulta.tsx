import { View, Text, FlatList, Button } from 'react-native'
import app from './firebaseConfig'
import { getFirestore, collection, where, query, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import CardContato from './cardContato'
import { IContatos } from './interface'

const Consulta: React.FC = () => {
    const [contatos, setContatos] = useState<IContatos[]>()
    const [deletado, setDeletado] = useState<boolean>(false)
 
    async function consultar() {
        const db = getFirestore(app)
        const dados = await query(collection(db, 'contatos'))
        const snapshotDados = await getDocs(dados)

        const lista = snapshotDados.docs.map(doc => {
            let contato = {
                id: doc.id,
                nome: doc.data().nome,
                email: doc.data().email,
                fone: doc.data().fone
            }
            return contato
        }
        )
        setContatos(lista)
    }

    useEffect(() => {
        consultar()
        setDeletado(false)
    }, [deletado])

    return (
        <View>
            <Text>Lista de Contatos</Text>
            <Button
                title='Consultar'
                onPress={consultar}
            />
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={contatos}
                renderItem={({ item }) => (
                   <CardContato contato={ item } excluiu={setDeletado}/>
                )}
            />

        </View>
    )
}

export default Consulta