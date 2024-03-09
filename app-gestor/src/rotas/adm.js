import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()
import CadUsuario from '../componentes/administrativo/cadUsuario'
import ResetSenha from '../componentes/administrativo/resetSenha'
import Configuracao from '../componentes/administrativo/configuracao'


export default function Adm() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='cadusuario' component={CadUsuario}
                options={
                    {
                        title: 'Novo Usuário',
                        tabBarLabel: 'Usuários',
                        tabBarIcon: (color, size) => (
                            <Ionicons name='person-add'
                                size={size} color={color} />
                        )
                    }}
            />
            <Tab.Screen name='resetsenha' component={ResetSenha}
                options={
                    {
                        title: 'Resetar senha',
                        tabBarLabel: 'Senhas',
                        tabBarIcon: (color, size) => (
                            <Ionicons name='duplicate-outline'
                                size={size} color={color} />
                        )
                    }}
            />
            <Tab.Screen name='configuracao' component={Configuracao}
                options={
                    {
                        title: 'Configurações',
                        tabBarLabel: 'Configurações',
                        tabBarIcon: (color, size) => (
                            <Ionicons name='attach-outline'
                                size={size} color={color} />
                        )
                    }}
            />
        </Tab.Navigator>
    )
}