import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { View, Text, Image } from 'react-native'
export default function CardContato(props: any) {
    const scale = useSharedValue(1)

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }]
        }
    })

    const handleMouseEnter = () => {
        scale.value = withTiming(1.2, { duration: 10 })

    }

    const handleMouseLeave = () => {
        scale.value = withTiming(1, { duration: 10 })
        console.log(scale.value)
    }
    return (
        <View style={{ padding: 15 }}>
            <Animated.View style={animatedStyle}>
                <Image
                    source={props.contato.foto}
                    style={[{ width: 100, height: 100 }, animatedStyle]}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                <Text>Id:{props.contato.id}</Text>
                <Text>Nome:{props.contato.nome}</Text>
            </Animated.View>
        </View>
    )
} 