import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioCarrera from "./Admini/Carreras/InicioCarrera";
import EditarCarrera from "./Admini/Carreras/EditarCarrera";
import AgregarCarrera from './Admini/Carreras/AgregarCarrera';
const Stack = createNativeStackNavigator();

const Carreras = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={InicioCarrera} name='InicioCarrera' />
            <Stack.Screen component={EditarCarrera} name='EditarCarrera' />
            <Stack.Screen component={AgregarCarrera} name='AgregarCarrera' />
 </Stack.Navigator>
   
    )
}

export default Carreras