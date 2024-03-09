import { View, Button } from 'react-native'
export default function Home({ navigation }) {
    return (
        <>
            <View style={{ marginVertical: 2 }}>
                <Button
                    title='Administrativo'
                    onPress={() => navigation.navigate('admin')}
                />
            </View>
            <View style={{ marginVertical: 2 }}>
                <Button
                    title='Compras'
                    onPress={() => navigation.navigate('compras')}
                />
            </View>
            <View style={{ marginVertical: 2 }}>
                <Button
                    title='Financeiro'
                    onPress={() => navigation.navigate('financeiro')}
                />
            </View>
        </>
    )
}