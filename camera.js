import React, {useState} from 'react';
import { Button, Text, View, StyleSheet, Dimensions, Image, Platform} from 'react-native';
import {Camera} from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'

const App = () => {
  const [refCamera, setRefCamera] = useState(null);
  const [temPermissao, setTemPermissao] = useState(null)
  const [fotoUri, setFotoUri] = useState(null)
  const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.back)

 const tirarFoto = async () => {
   if(refCamera){
     const { uri } = await refCamera.takePictureAsync();
     setFotoUri(uri)
     saveToLibrary(uri)     
   }
 }

async function saveToLibrary(uri){
  if(Platform.OS === 'web'){
    alert('web ')
  }
  else if (Platform.OS === 'ios'){
     const asset = await MediaLibrary.createAssetAsync(uri)
    await MediaLibrary.createAlbumAsync('Expo',asset)
    alert('ios')
  }
  else{
    await MediaLibrary.saveToLibraryAsync(uri)
    alert('salvo na galeria')
  }
   
}

function trocarCamera(){
  setTipoCamera(tipoCamera === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)
}

  return (
    <View style={styles.container}>
     <View>
     {
       temPermissao === false ? (<Text>Vc não tem permissão</Text>) : (<Camera 
           style={styles.containerCamera}
           type={tipoCamera}
           ref={(ref)=>setRefCamera(ref)}
           onCameraReady={() => setTemPermissao(true)}
        />)
     }
        
     </View>
     <Button
        title='Tirar foto'
        onPress={tirarFoto}        
      />
      <Button 
         title='Trocar camera'
         onPress={trocarCamera}
      />
      <View>
          <Image source={{uri: fotoUri}} style={styles.previewFoto}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   container:{
     flex:1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#fff'
   },
   containerCamera:{
     width: Dimensions.get('window').width,
     height: Dimensions.get('window').height/3,
     overflow:'hidden',
     marginBottom: 10
   },
   previewFoto:{
     width: 200,
     height: 200,
     resizeMode: 'contain'
   }
})

export default App;