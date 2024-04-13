import { useRef } from "react"
import { Image, Text, Animated, Button, View } from "react-native"
import styles from "./estilos"
export default function Foto() {
    const margem = useRef(new Animated.Value(0)).current
    const movimentar = (direcao) => {
        if (direcao == 'direito') {
            Animated.timing(margem, {
                toValue: 100,
                duration: 10,
                useNativeDriver: false
            }).start()
        }else{
            Animated.timing(margem, {
                toValue: 0,
                duration: 10,
                useNativeDriver: false
            }).start()
        }
    }
    return (
        <>
            <Animated.View style={{ marginLeft: margem, marginRight: margem }}>
                <Text>Maria</Text>
                <Image
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnLqS5Cibb_ytBSxHLh9M7Q1NtPWuwMpqdWtQYFW-jNweUvmoq2S-IxgcfmA9e_9o6Ya4&usqp=CAU' }}
                    style={{ height: 100, width: 100 }} />

            </Animated.View>
            <View style={[styles.container]}>
                <Button title='direito' onPress={() => movimentar('direito')} />
                <Button title='esquerdo' onPress={() => movimentar('esquerdo')} />
            </View>
            
        </>


    )
}