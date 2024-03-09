import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import Home from './src/componentes/home'
import Adm from './src/rotas/adm'
import Compras from './src/rotas/compras'
import Financeiro from './src/rotas/financeiro'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='home' component={Home}/>
            <Stack.Screen name='admin' component={Adm}/>
            <Stack.Screen name='compras' component={Compras}/>
            <Stack.Screen name='financeiro' component={Financeiro}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}


