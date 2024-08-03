import { View, Text, StyleSheet, Animated, PanResponder } from "react-native";
import { TCard } from "./types";
import { useRef } from "react";

export default function Card(props: TCard) {
    const pan = useRef(new Animated.ValueXY()).current

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event(
                [
                    null,
                    { dx: pan.x, dy: pan.y }
                ],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: (evt, gestureState) => {
                if(gestureState.dx > 150 || gestureState.dx < -150){
                    props.onDelete(props.id)
                }else{
                    Animated.spring(pan,
                        {
                            toValue: {x:0, y:0},
                            useNativeDriver: false
                        }
                        
                    ).start()
                }
            }
        })
    ).current
    return (
        <>
            <Animated.View
                {...panResponder.panHandlers}
                style={[pan.getLayout()]}

            >
                <View style={styles.card}>
                    <Text style={{ fontWeight: 700 }}>ID: <Text style={{ fontWeight: 100 }}>{props.nome}</Text> </Text>
                    <Text style={{ fontWeight: 700 }}>Nome: <Text style={{ fontWeight: 100 }}>{props.nome}</Text></Text>
                </View>
            </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: 200,
        height: 50,
        backgroundColor: 'silver',
        marginVertical: 10,
        padding: 10
    }
});