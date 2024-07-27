import { useRef, useState } from 'react'
import { Image, Pressable } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
export default function Login() {
    const scale = useSharedValue(1)

    /*var width = useRef<number>(100).current*/
    const [height, setHeight] = useState(100)
    const [width, setWidth] = useState(100)

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }]
        }
    })

    const handleMouseEnter = () => {
        scale.value = withTiming(3, { duration: 10 })

    }

    const handleMouseLeave = () => {
        scale.value = withTiming(1, { duration: 10 })
        console.log(scale.value)
    }
    return (
        <>
            <Animated.Image
                source={{ uri: 'https://mighty.tools/mockmind-api/content/human/75.jpg' }}
                style={[{ width: 100, height: 100 }, animatedStyle]}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />

            <Pressable
                onHoverIn={
                    () => {
                        setWidth(300)
                        setHeight(300)
                    }
                }
                onHoverOut={() => {
                    setWidth(100)
                    setHeight(100)
                }
                }
            >
                <Animated.Image
                    source={{ uri: 'https://mighty.tools/mockmind-api/content/human/75.jpg' }}
                    style={{ width: width, height: height }}
                />
            </Pressable>


        </>
    )
} 