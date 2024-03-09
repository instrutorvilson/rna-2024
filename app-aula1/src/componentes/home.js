import {View, Text, Button} from 'react-native'
export default function Home({navigation}){
    return(
        <View>
            <Button 
               title='Cadastro'
               onPress={()=> navigation.navigate('cadastro')}
            />

           <View style={{marginVertical:10}}>
                <Button 
                    title='Consulta'
                    onPress={()=> navigation.navigate('consulta')}
                    />
           </View>
           

           <Button 
               title='Sobre'
               onPress={()=> navigation.navigate('about')}
            />
        </View>
    )
}