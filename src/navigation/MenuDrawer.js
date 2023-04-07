import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen';
import QrScreen from '../screens/QrScreen';
import { BottomTab } from './BottomTab';
import Icon from "react-native-vector-icons/Ionicons";
import { View,Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import HistorialScreen from '../screens/HistorialScreen';
import LoginScreen from '../screens/LoginScreen';
import EditPerfil from '../screens/EditPerfil';


const Drawer  = createDrawerNavigator();

 export const MenuDrawer = ({navigation}) => {
return (

    
<Drawer.Navigator
screenOptions={{
    headerShown: false, //oculta el menu
    drawerLabelStyle: { marginLeft: -25, fontSize: 15, fontFamily: 'Roboto-Medium' }         
}}>
     <Drawer.Screen name= " QR " component={BottomTab}options={{
                drawerIcon: ({ color }) => (
                    <Icon name='qr-code-outline' style={styles.icons} />
                )}} />
     <Drawer.Screen name= "Editar perfil " component={EditPerfil}options={{
                drawerIcon: ({ color }) => (
                    <Icon name='people-outline' style={styles.icons} />
                )}}/>
     
    <Drawer.Screen name= "Historial " component={HistorialScreen}options={{
                drawerIcon: ({ color }) => (
                    <Icon name='archive-outline' style={styles.icons} />
                ) }} />
<Drawer.Screen name= "Cerrar sesion " component={LoginScreen}options={{
                drawerIcon: ({ color }) => (
                    <Icon name='exit-outline'style={styles.icons}/> ) }} />
                
</Drawer.Navigator >



)}

const styles = StyleSheet.create({
    container: {
        flex: 1, paddingHorizontal: 1, backgroundColor: '#fff'
    },
    title: {
        textAlign: 'center',
        paddingTop:10,
        fontWeight: '900',
        fontSize: 30,
        color: '#349B38'
    },
      title1: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        color: '#349B38'
    },
    icons: {
        fontSize: 30,
        color: '#349B38',
    
      },
    commandButton: {
        backgroundColor: '#349B38',
                padding: 15,
                borderRadius: 10,
                marginBottom: 20
    },
    action: {
        paddingTop: 2,
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,

    }
});