import { Text, View, Pressable } from "react-native";
import { TCard } from "./types";
import { Swipeable } from "react-native-gesture-handler";

export default function Card(props: TCard) {
    const renderRightActions = () => (
        <View>
            <Pressable 
               style={{backgroundColor:'red'}}
               onPress={props.onDelete}>
                <Text>Deletar</Text>
            </Pressable>
        </View>
    )


    return (
        <Swipeable
            renderRightActions={renderRightActions}
        >
            <View style={{ backgroundColor: '#aaa', padding: 10, marginVertical: 10 }}>
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