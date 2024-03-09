import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons'

import Consulta from './src/componentes/consulta';
import About from './src/componentes/about';
import Cadastro from './src/componentes/cadastro';
import Home from './src/componentes/home';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen 
             name='home' component={Home}
             options={
              { 
                title: 'Main',
                headerLeft: () => (
                <Ionicons 
                   name='home-outline'
                   color='red'
                   size={30}
                   style={{marginLeft: 10}}
                />)
              }} />

          <Stack.Screen 
             name='cadastro' component={Cadastro}
             options={
              { 
                title: 'Novo contato',
                headerRight: () => (
                <Ionicons 
                   name='add-outline'
                   color='red'
                   size={30}
                   style={{alignSelf:'flex-start'}}
                />)
              }} 
          />
          <Stack.Screen name='consulta' component={Consulta}/>
          <Stack.Screen name='about' component={About}/>         
      </Stack.Navigator>
    </NavigationContainer>
  );
}


