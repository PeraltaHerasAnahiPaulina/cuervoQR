import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen';
import { MenuDrawer } from './MenuDrawer';
import Registrarte from '../screens/Registrarte';
import EditPerfil from '../screens/EditPerfil';
import Adminitrador from '../screens/Adminitrador';
import Carreras from '../screens/Carreras';
import OlvidasteContraseña from '../screens/OlvidasteContraseña';
const Stack = createNativeStackNavigator();

const AuthStack = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={LoginScreen} name='LoginScreen' />
      <Stack.Screen component={MenuDrawer} name='MenuDrawer' />
      <Stack.Screen component={Registrarte} name='Registrarte' />
      <Stack.Screen component={EditPerfil} name='EditPerfil' />
      <Stack.Screen component={Adminitrador} name='Adminitrador' />
      <Stack.Screen component={Carreras} name='Carreras' />
      <Stack.Screen component={OlvidasteContraseña} name='OlvidasteContraseña' />
    </Stack.Navigator>

  )
}

export default AuthStack;