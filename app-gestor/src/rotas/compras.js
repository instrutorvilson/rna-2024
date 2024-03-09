import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'
import { ResgistrarCliente, ResgistrarCompra } from '../componentes/compras'
//desestruturação do arquivo

const Drawer = createDrawerNavigator()

export default function Compras(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Novo Cliente' component={ ResgistrarCliente }
             options={{
                drawerLabel: 'Cliente',
                drawerIcon: ({ color, size }) => (
                  <Ionicons name='bag-add-sharp' color={color} size={size} />
                )
              }}
            />
            <Drawer.Screen name='Nova Compra' component={ ResgistrarCompra}
                options={{
                    title: 'Registrar compra',
                    drawerLabel: 'Compra',
                    drawerIcon: ({ color, size }) => (
                      <Ionicons name='bag-add-sharp' color={color} size={size} />
                    )
                  }}
            />
        </Drawer.Navigator>
    )
}