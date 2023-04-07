import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import QrScreen from '../screens/QrScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import HistorialScreen from '../screens/HistorialScreen';
const Tab = createBottomTabNavigator();

 export const BottomTab = () =>{

    return (
        <Tab.Navigator
        screenOptions={ ({ route }) => ({
            tabBarIcon: (color, size) => {
                let iconName = '';
                switch(route.name){
                case 'QR':
                       iconName = 'qr-code-outline';
                        break;
                case 'Perfil':
                        iconName = 'person-outline';
                        break;
                case 'Historial':
                        iconName = 'archive-outline';
                        break;


                }
                return<Icon name = { iconName } size = {35} color = {"#349B38"}/>
            }
        })}
        >

<Tab.Screen name = 'QR' component={QrScreen}/>
<Tab.Screen name = 'Perfil' component={HomeScreen}/>
<Tab.Screen name = 'Historial' component={HistorialScreen}/>
        </Tab.Navigator>
    );
 };