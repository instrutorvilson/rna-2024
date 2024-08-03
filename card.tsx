import { Text, View, Pressable, StyleSheet } from "react-native";
import { TCard } from "./types";
import { Swipeable } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function Card(props: TCard) {
    const renderRightActions = () => (
        <View style={styles.containerDelete}> 
            <Pressable 
               style={styles.botaoDelete}
               onPress={props.onDelete}>
                <Text style={{color:'white'}}>Delete</Text>
            </Pressable>
        </View>
    )

    return (
        <Swipeable
            renderRightActions={renderRightActions}
        >
            <View style={styles.card}>
                <Text style={{ fontWeight: 700 }}>
                    ID: <Text style={{ fontWeight: 100 }}>{props.id}</Text>
                </Text>
                <Text style={{ fontWeight: 700 }}>
                    NOME: <Text style={{ fontWeight: 100 }}>{props.nome}</Text>
                </Text>
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    card: {
      padding: 20,
      margin: 10,
      backgroundColor: 'lightblue',
      borderRadius: 5
    },
    containerDelete:{
      
      justifyContent: 'center' 
    },
    botaoDelete:{
       backgroundColor: 'red',
       borderRadius: 50,
       padding: 10
    }
  });