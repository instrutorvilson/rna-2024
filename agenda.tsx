import { View, Text, FlatList } from 'react-native'
import CardContato from './CardContato'
const contatos = [
    {
        id: 1,
        nome: 'jose',
        foto: 'https://mighty.tools/mockmind-api/content/cartoon/26.jpg'
    },
    {
        id: 2,
        nome: 'maria',
        foto: 'https://mighty.tools/mockmind-api/content/cartoon/10.jpg'
    },
    {
        id: 3,
        nome: 'joao',
        foto: 'https://mighty.tools/mockmind-api/content/cartoon/15.jpg'
    }
]
export default function Agenda() {

    return (
        <View>
            <Text>Agenda de contatos</Text>
            <FlatList
                data={contatos}
                renderItem={({ item }) =>
                    <CardContato contato={item} />
                }

            />        </View>
    )
}