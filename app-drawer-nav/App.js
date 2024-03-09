import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'

import Home from './src/componentes/home';
import Cadastro from './src/componentes/cadastro';
import Consulta from './src/componentes/consulta';
import About from './src/componentes/about';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='home' component={Home}
          options={{
            title: 'Main',
            drawerLabel: 'Main',
            drawerIcon: ({ color, size }) => (
              <Ionicons name='home-sharp' color={color} size={size} />
            )
          }}
        />
        <Drawer.Screen name='cadastro' component={Cadastro}
          options={{
            title: 'Novo contato',
            drawerLabel: 'Cadastro',
            drawerIcon: ({ color, size }) => (
              <Ionicons name='person-add' color={color} size={size} />
            )
          }}
        />
        <Drawer.Screen name='consulta' component={Consulta}
          options={{
            title: 'Lista de Contatos',
            drawerLabel: 'Consultar',
            drawerIcon: ({ color, size }) => (
              <Ionicons name='list-circle-sharp' color={color} size={size} />
            )
          }}
        />
        <Drawer.Screen name='about' component={About}
          options={{
            title: 'Nossa história',
            drawerLabel: 'Sobre nós',
            drawerIcon: ({ color, size }) => (
              <Ionicons name='information-circle-outline' color={color} size={size} />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

