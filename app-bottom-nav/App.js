import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Home from './src/componentes/home'
import Cadastro from './src/componentes/cadastro'
import Consulta from './src/componentes/consulta'
import About from './src/componentes/about'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
   <NavigationContainer>
      <Tab.Navigator>
         <Tab.Screen name='home' component={Home}
            options={
              {
                title:'Home',
                tabBarLabel:'Main',
                tabBarIcon:(color,size) => (
                   <Ionicons name='home-outline' 
                   size={size} color={color}/>
                )
              }}
         />
         <Tab.Screen 
             name='cadastro' component={Cadastro}
             options={
              {
                title:'Novo Contato',
                tabBarLabel:'Main',
                tabBarIcon:(color,size) => (
                   <Ionicons name='add-circle' 
                   size={size} color={color}/>
                )
              }}   
          />
         <Tab.Screen name='consulta' component={Consulta}/>
         <Tab.Screen name='about' component={About}/>         
      </Tab.Navigator>
   </NavigationContainer>
  );
}

