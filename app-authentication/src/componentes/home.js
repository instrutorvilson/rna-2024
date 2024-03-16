import { StyleSheet, View, Text, Button, Pressable } from "react-native"
export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ textTransform: 'uppercase' }}>Autentication Firebase</Text>
            <Pressable
                style={styles.btmenu}
                onPress={() => navigation.navigate('login')}
            >
                <Text>Login</Text>
            </Pressable>

            <Pressable
                style={styles.btmenu}
                onPress={() => navigation.navigate('cadastro/contato')}
            >
                <Text>Cadastro de contato</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btmenu: {
        backgroundColor: 'lightblue',
        width: '200px',
        borderRadius: '20px',
        alignItems: 'center',
        marginVertical: '10px',
        padding: '10px'
    }
});