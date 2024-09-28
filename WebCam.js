import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { ref, uploadBytes, getDownloadURL, getStorage} from 'firebase/storage';
import app from '../app-camera/src/firebaseConfig'


function App() {
  const webcamRef = useRef(null);
  const [imageURL, setImageURL] = useState(null);
  const [uploading, setUploading] = useState(false);

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    uploadToFirebase(imageSrc);
  };

  const uploadToFirebase = async (imageSrc) => {
    setUploading(true); // Começa o estado de upload
    try {
      // Converte a imagem de base64 para um blob
      const response = await fetch(imageSrc);
      const blob = await response.blob();

      // Cria uma referência para o Firebase Storage
      const storageRef = ref(getStorage(app), `fotos/${Date.now()}.jpeg`);

      // Faz o upload do blob
      const snapshot = await uploadBytes(storageRef, blob);
      const downloadURL = await getDownloadURL(snapshot.ref); // Obtém a URL de download
      setImageURL(downloadURL); // Armazena a URL da imagem
      alert('Foto enviada ao Firebase! URL: ' + downloadURL);
    } catch (error) {
      console.error('Erro ao fazer upload para o Firebase:', error);
    } finally {
      setUploading(false); // Finaliza o estado de upload
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Captura de Imagem com Webcam</h1>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={320}
      />

<br />
      <button onClick={capture}>Capturar Foto</button>
      {uploading && <p>Enviando foto...</p>}
      {imageURL && (
        <div>
          <h2>Imagem enviada:</h2>
          <img src={imageURL} alt="Imagem enviada" style={{ width: '200px' }} />
        </div>
      )}

    </div>
  );
}

export default App;
