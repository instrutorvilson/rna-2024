import React, {useState} from 'react';
import { StyleSheet, View, Image, Button} from 'react-native';
import * as ImagePicker from 'expo-image-picker'
const App = () => {
  const [image, setImage] = useState('');

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
     marginBottom: 20,
     backgroundColor: 'red'
   }
})

export default App;