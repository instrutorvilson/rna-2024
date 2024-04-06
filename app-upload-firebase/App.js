import React, {useState} from 'react';
import { StyleSheet, View, Image, Button} from 'react-native';
import * as ImagePicker from 'expo-image-picker'

import app from './fiebaseConfig';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const App = () => {
  const [image, setImage] = useState('');
  
  async function uploadImage(uri){
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
  
      const storageRef = ref(getStorage(app)); // Obtenha uma referência ao serviço de armazenamento
      const imageName = 'image.jpg';
      const imageRef = ref(storageRef, imageName); // Crie uma referência para o arquivo
  
      // Faça o upload do blob para o Firebase Storage
      const snapshot = await uploadBytes(imageRef, blob);
  
      // Obtenha a URL de download da imagem
      const url = await getDownloadURL(imageRef);
      console.log("URL: " + url);
    } catch (error) {
      console.log("Erro: " + error);
    }
  }

 async function selecionaImage(){
    try{
          const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: false,
          aspect:[4,3],
          quality: 1
        })
        if(!result.canceled){
            setImage(result.assets[0].uri)
            uploadImage(result.assets[0].uri)
        }
    }
    catch(error){
      alert(error)
    }
     
  }
  return (
    <View style={{padding: 10}}>
      <Image source={{uri: image}} style={styles.image}/>
      <Button title="abrir" onPress={selecionaImage}/>
      
    </View>
  );
};
const styles = StyleSheet.create({  
   image:{
     width: 100,
     height: 100,
     resizeMode: 'contain',
     marginBottom: 20
   }
})

export default App;
