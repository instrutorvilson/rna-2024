
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    TouchableOpacity,
    Modal,
    Image,
  } from 'react-native';
  import { Camera, CameraType, CameraView } from 'expo-camera';
  import { useEffect, useRef, useState } from 'react';
  import { FontAwesome } from '@expo/vector-icons';
  import app from './firebaseConfig'
  import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
  
  import * as MediaLibrary from 'expo-media-library';

  
  export default function TakeFoto2() {
    const camRef = useRef(null);
    const [type, setType] = useState('back');
    const [hasCameraPermission, setHasCameraPermission] = useState(false);
    const [hasGaleriaPermission, setHasGaleriaPermission] = useState(false);
    const [foto, setFoto] = useState<any>('');
    const [open, setOpen] = useState(false);
  
    useEffect(() => {
     (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(status == "granted" ? true : false);        
      })();
    }, []);
  
    if (hasCameraPermission=== false) {
      return <Text>Sem permissão de acesso à câmera ou galeria</Text>;
    }
  
    async function tirarFoto() {
      if (camRef.current) {
        const data = await camRef.current.takePictureAsync();
        setFoto(data.uri);
        setOpen(true);
      }
    }
  
    async function salvarFoto() {      
      /* if(!hasGaleriaPermission){
        const statusGaleria = await MediaLibrary.requestPermissionsAsync();
        setHasGaleriaPermission(statusGaleria.status == 'granted' ? true : false)
        try {
            await MediaLibrary.createAssetAsync(foto);
            alert('Foto salva com sucesso!');
            
          } catch (error) {
            console.log(error.message);
          }
      }*/
          try {
           /* const storageRef = ref(getStorage(app), `fotos/${foto.name}.jpeg`)
            await  uploadBytes(storageRef, foto)
            const urlDownload = await getDownloadURL(storageRef)
            console.log(urlDownload)*/
            const response = await fetch(foto.uri);
            console.log(response)
            const blob = await response.blob();
            console.log(blob)

           // Define o nome do arquivo e cria uma referência no Firebase Storage
           const storageRef = ref(getStorage(app), `fotos/${Date.now()}.jpeg`);

           // Faz o upload do arquivo em formato blob
           const snapshot = await uploadBytes(storageRef, blob);
          }
        catch (error) {
            console.log(error)
        }
    }
         
    return (
      <SafeAreaView style={styles.container}>
        <CameraView style={styles.camera} facing={type} ref={camRef}>
          <View style={styles.botoes}>
            <TouchableOpacity
              style={styles.change}
              onPress={() => {
                setType(type === 'back' ? 'front' : 'back');
              }}>
              <Text>Alternar câmera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.change} onPress={tirarFoto}>
              <Text>Tirar foto</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
  
        {foto && (
          <Modal animationType="slide" transparent={false} visible={open}>
            <View>
              <View style={{ margin: 10, flexDirection: 'row' }}>
                <TouchableOpacity
                  style={{ margin: 10, backgroundColor: 'red' }}
                  onPress={() => setOpen(false)}>
                  <FontAwesome name="window-close" size={50} color="#fff" />
                </TouchableOpacity>
  
                <TouchableOpacity style={{ margin: 10 }} onPress={salvarFoto}>
                  <FontAwesome name="upload" size={50} color="#121212" />
                </TouchableOpacity>
              </View>
              <Image style={styles.image} source={{ uri: foto }} />
            </View>
          </Modal>
        )}
      </SafeAreaView>
    );
  }
  
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
  