import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Toast from 'react-native-toast-message'
import CadUser from './src/componentes/cadUser'
import Login from './src/componentes/login';
import Home from './src/componentes/home';
import CadContato from './src/componentes/cadContato';
import ConsultaContatos from './src/componentes/consultaContatos';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name='home' component={Home}/>
          <Stack.Screen name='cadastro' component={CadUser}/>
          <Stack.Screen name='login' component={Login}/>
          <Stack.Screen name='cadastro/contato' component={CadContato} options={{title:'Novo contato'}}/>
          <Stack.Screen name='cadastro/consulta' component={ConsultaContatos} options={{title:'Listar contato'}}/>
       </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}


