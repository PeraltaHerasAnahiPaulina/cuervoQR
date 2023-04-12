import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text,StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity } from "react-native";
const Adminitrador  = ({ navigation}) => {
  return (
    <SafeAreaView>
        <View style={{ paddingHorizontal: 30 }}>
        <Text style={styles.title}> {'\n'} Administrativo  {'\n'}</Text>

<TouchableOpacity 
onPress={() => navigation.navigate('Carreras')}>
         <Text style={styles.nomta}> <Icon style={{ marginRight: 5 }} name='lock-closed-outline'  style={styles.icons} />
                   
            Carreras</Text></TouchableOpacity>
            <TouchableOpacity 
onPress={() => navigation.navigate('Carreras')}>
         <Text style={styles.nomta}> <Icon style={{ marginRight: 5 }} name='business-outline'  style={styles.icons} />
                   
            Docencia</Text></TouchableOpacity>
            <TouchableOpacity 
onPress={() => navigation.navigate('Carreras')}>
         <Text style={styles.nomta}> <Icon style={{ marginRight: 5 }} name='car-sport-outline'  style={styles.icons} />
                   
            Tipo vehiculo</Text></TouchableOpacity>
            <TouchableOpacity 
onPress={() => navigation.navigate('Carreras')}>
         <Text style={styles.nomta}> <Icon style={{ marginRight: 5 }} name='shield-outline'  style={styles.icons} />
                   
            Tipo entrada</Text></TouchableOpacity>
            <TouchableOpacity 
onPress={() => navigation.navigate('Carreras')}>
         <Text style={styles.nomta}> <Icon style={{ marginRight: 5 }} name='contrast-outline'  style={styles.icons} />
                   
            Estatus</Text></TouchableOpacity>
        </View>

        <TouchableOpacity 
onPress={() => navigation.navigate('LoginScreen')}>
         <Text style={styles.nomta}>  {'\n'}{'\n'} <Icon name='exit-outline'style={styles.icons}/>
                     Salir</Text></TouchableOpacity>
    </SafeAreaView>
  )
}

export default Adminitrador
const styles = StyleSheet.create({
icons: {
    fontSize: 30,
    color: '#349B38',

  },
  nomta: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 40,
    lineHeight: 84,
    fontWeight: 'bold',
    color: 'green'
},
title: {
    color: 'black',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});