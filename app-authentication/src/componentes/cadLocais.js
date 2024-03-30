import { ScrollView, Text, TextInput, Button } from 'react-native'
import styles from '../estilos/estilos'
import { useState } from 'react'

import { getFirestore, collection, addDoc } from "firebase/firestore"
import app from '../configuracao/firebaseConfig'

export default function CadLocais() {
    const [nome, setNome] = useState('XV de novembro')
    const [fone, setFone] = useState('(47)9090-0987')
    const [cep, setCep] = useState('89068-260')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')

    const db = getFirestore(app)

    async function handleGravar() {
        await addDoc(collection(db,'locais'),{nome,fone, cep, rua, numero, bairro, cidade, uf})
        alert('Local inserido com sucesso')
    }

   async function loadEndereco(){
      try{
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const dados = await response.json()
        setRua(dados.logradouro)
        setBairro(dados.bairro)
        setCidade(dados.localidade)
        setUf(dados.uf)
      }
      catch(error){
        console.log(`Erro: ${error}`)
      }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={{ textTransform: 'uppercase', textAlign: 'center' }}>Cadastro contato</Text>
            <Text style={styles.rotulo}>Informe nome</Text>
            <TextInput
                style={styles.input}
                defaultValue={nome}
                onChangeText={txt => setNome(txt)}
                placeholder="Ex: Maria da Silva"
              
            />

            <Text style={styles.rotulo}>Informe fone</Text>
            <TextInput
                style={styles.input}
                defaultValue={fone}
                onChangeText={txt => setFone(txt)}
                placeholder="Ex: (47)9090-0987"
            />

            <Text style={styles.rotulo}>Informe CEP</Text>
            <TextInput
                style={styles.input}
                defaultValue={cep}
                onChangeText={txt => setCep(txt)}
                placeholder="Ex: 89068-260"
                onBlur={loadEndereco}
            />

            <Text style={styles.rotulo}>Informe rua</Text>
            <TextInput
                style={styles.input}
                defaultValue={rua}
                onChangeText={txt => setRua(txt)}
                placeholder="Ex: Rua das flores"
            />

            <Text style={styles.rotulo}>Informe numero</Text>
            <TextInput
                style={styles.input}
                defaultValue={numero}
                onChangeText={txt => setNumero(txt)}
                placeholder="Ex: 1899"
            />

            <Text style={styles.rotulo}>Informe bairro</Text>
            <TextInput
                style={styles.input}
                defaultValue={bairro}
                onChangeText={txt => setBairro(txt)}
                placeholder="Ex: Centro"
            />

            <Text style={styles.rotulo}>Informe Cidade</Text>
            <TextInput
                style={styles.input}
                defaultValue={cidade}
                onChangeText={txt => setCidade(txt)}
                placeholder="Ex: Blumenau"
            />

            <Text style={styles.rotulo}>Informe UF</Text>
            <TextInput
                style={styles.input}
                defaultValue={uf}
                onChangeText={txt => setUf(txt)}
                placeholder="Ex: SC"
            />
            <Button
                title='gravar'
                onPress={handleGravar}
            />
        </ScrollView>
    )
}