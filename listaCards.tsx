import { useState } from "react"
import { FlatList, View, Text } from "react-native"
import { TCard } from "./types"
import Card from "./card"

export default function ListaCards() {
    const [cards, setCards] = useState<TCard[]>(
        [
            { id: 1, nome: 'Maria' },
            { id: 2, nome: 'Joao' },
            { id: 3, nome: 'Antonio' }
        ]
    )

    function deletar(id:number){
       let novosCard = cards.filter(c => c.id != id)
       setCards(novosCard)
    }
    return (
        <View>
            <FlatList
                data={cards}
                renderItem={({ item }) =>
                    <Card
                        id={item.id}
                        nome={item.nome}
                        onDelete={deletar}
                    />}
            />
        </View>
    )


}