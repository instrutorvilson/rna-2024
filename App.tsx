import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TCard } from './types';
import Card from './card';

export default function App() {
  const [cards, setCards] = useState<TCard[]>([
    {id: 1, nome: 'maria'},
    {id: 2, nome: 'José'},
    {id: 3, nome: 'Antonio'}
  ])
 function deletar(id:number){
     setCards(cards.filter(c=> c.id != id))
 }
  return (
    <View style={styles.container}>
        <FlatList
            data={cards}
            renderItem={
              ({item}) => <Card id={item.id} nome={item.nome} onDelete={() => deletar(item.id || 0)}/>
            }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
