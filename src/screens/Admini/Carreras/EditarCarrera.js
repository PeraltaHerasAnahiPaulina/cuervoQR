import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { View,Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native';

const EditarCarrera = ({navigation }) =>{
  return (
    <View style={styles.container}>
    <View style={{ marginTop: 80 }}>
                <Text style={styles.title}> Editar Carrera </Text>
               
            </View>
            <View style={{ marginTop: 20 }}>
                <View style={styles.action}>
                <Icon name='school-outline' style={styles.icons} />
                    <TextInput
                        placeholder="T.S.U. en Mantenimiento, Área Industrial"
                        placeholderTextColor="#666666"/>
                </View>
              
                <View style={{ paddingHorizontal: 30, flexDirection: 'row' }} >
                <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate('InicioCarrera')}>
                    <Text style={styles.panelButtonTitle}>Aceptar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.commandButto}
                    onPress={() => navigation.navigate('InicioCarrera')}>
                    <Text style={styles.panelButtonTitle}>
                        Cancelar<Icon name='trash-outline' style={styles.iconsedit}/> </Text>
                </TouchableOpacity>
            </View>
            </View>
 </View> 
  )
}

export default EditarCarrera


const styles = StyleSheet.create({
  container: {
      flex: 1, paddingHorizontal: 50, backgroundColor: '#fff'
  },
  title: {
      textAlign: 'center',
      paddingTop:20,
      fontWeight: '900',
      fontSize: 40,
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
  commandButto: {
      backgroundColor: '#ff0000',
      padding: 15,
      borderRadius: 10,
      marginBottom: 20,
      marginLeft: 20
  },
  panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
  },
  panelButtonTitle: {
      textAlign: 'center',
      fontWeight: '900',
      fontSize: 20,
      color: '#fff'
  },
  action: {
      paddingTop: 2,
      flexDirection: 'row',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      paddingBottom: 8,
      marginBottom: 25,

  }, iconsedit: {
    fontSize: 30,
    color: '#ffff',

  }
});