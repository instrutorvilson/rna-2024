import { useState } from "react";
import { Button, TextInput, View, Text } from "react-native";

export default function Cadastro(){
    const[email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    return(
        <View>
            <Text testID="id-email">Informe seu email</Text>
            <TextInput 
               testID="id-input-email"
               placeholder="Informe email"
               value={email}
               onChangeText={(text)=>setEmail(text)}
            />
            <Text>Senha</Text>
            <TextInput 
                placeholder="Informe senha"
                value={senha}
                onChangeText={(text)=>setSenha(text)}
            />
            <View>
                <Button testID="id-salvar" title='salvar' onPress={() => {}}/>
            </View>
        </View>
    )
}