
import { useRef, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native'
import { getFirestore, collection, addDoc, where, query, getDocs } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage'
import app from './firebaseConfig'

const CadContato: React.FC = () => {
    const [nome, setNome] = useState<string>('Maria das Dores')
    const [email, setEmail] = useState<string>('josefina@gmail.com')
    const [fone, setFone] = useState<string>('123456')
    const [msg, setMsg] = useState<any>('')

    const [image, setImage] = useState<any>(null)
    const [url, setUrl] = useState('');

    const nomeRef = useRef<any>('')
    const emailRef = useRef<any>('')
    const foneRef = useRef<any>('')

    const db = getFirestore(app)

    async function handleGravar() {
        /* try {
             const dados = await query(collection(db, 'contatos'), where('email', '==', email))
             const snapshotDados = await getDocs(dados)
 
             if(snapshotDados.size > 0){
                 setMsg('Já existe um contato com o email informado')               
                 return
             }
 
             await addDoc(collection(db, 'contatos'), { nome, fone, email, createdAT: new Date() })
             setMsg('Contato inserido com sucesso')
         }
         catch (error) {
             setMsg(error.message)
         }*/ 
        uploadImageToFirebaseStorage()      

    }
    
    function uploadImageToFirebaseStorage(){
        try {
            console.log(image)
            const storageRef = ref(getStorage(app), `images/${image.name}`)
            const uploadTask = uploadBytesResumable(storageRef, image)
            uploadTask.on(
                'state_changed',
               /* (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    // setProgress(progress);  // Atualiza a barra de progresso
                },
                (error) => {
                    console.error('Erro durante o upload:', error);
                },*/
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setUrl(downloadURL);                        
                    });
                }
            )           
        }
        catch (error) {
            console.log(error)
        }
    }

    function handleImageChange(e: any) {
        if (e.target.files[0]) {           
            setImage(e.target.files[0]);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{ textTransform: 'uppercase', textAlign: 'center' }}>Cadastro contato</Text>
            <Text style={styles.rotulo}>Informe nome</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={txt => setNome(txt)}
                placeholder="Ex: Maria da Silva"
                ref={nomeRef}
            />

            <Text style={styles.rotulo}>Informe email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={txt => setEmail(txt)}
                placeholder="Ex: maria@gmail.com"
                ref={emailRef}
            />

            <Text style={styles.rotulo}>Informe fone</Text>
            <TextInput
                style={styles.input}
                value={fone}
                onChangeText={txt => setFone(txt)}
                placeholder="Ex: (47)9090-7080"
                ref={foneRef}
            />
            <Text>Selecione Imagem</Text>
            <Image
                source={{ uri: url }}
                style={{ width: 40, height: 40 }}
            />
            <input type="file" onChange={handleImageChange} />
            <Button
                title='gravar'
                onPress={handleGravar}
            />

            <Text>{msg}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        marginVertical: 5,
        padding: 10,
        borderBottomWidth: 1

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 100
    },
    rotulo: {
        fontWeight: '700',
        fontSize: 18,
        fontFamily: 'verdana'
    }
});
export default CadContato