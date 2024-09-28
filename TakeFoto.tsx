import { useRef, useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text} from 'react-native'
import { Camera, CameraType, CameraView } from 'expo-camera';

const TakeFoto: React.FC = () => {
    const camRef = useRef(null);
    const  facing = 'back'

    function tirarFoto(){}
    return (
        <SafeAreaView style={styles.container}>
            <CameraView style={styles.camera} facing='back' ref={camRef}>
                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.change} onPress={tirarFoto}>
                        <Text>Tirar foto</Text>
                    </TouchableOpacity>
                </View>
            </CameraView>
        </SafeAreaView>
    )
}

export default TakeFoto

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 50,
        marginHorizontal: 20,
    },
    camera: {
        width: '100%',
        height: '100%',
    },
    botoes: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    change: {
        padding: 10,
        backgroundColor: 'red',
        width: 150,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 400,
        borderRadius: 20,
    },
});
