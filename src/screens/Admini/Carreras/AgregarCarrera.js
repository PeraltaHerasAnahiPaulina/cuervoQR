import React from 'react'
import { View,Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native-gesture-handler";

const  AgregarCarrera = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <View style={{ marginTop: 80 }}>
                <Text style={styles.title}> Agregar Carrera  {'\n'} {'\n'} {'\n'} </Text>
     </View>
            <View style={{ marginTop: 20 }}>
                <View style={styles.action}>
                <Icon name='school-outline' style={styles.icons} />
                    <TextInput placeholder="Nombre de la carrera"  placeholderTextColor="#666666" />
                </View>
            
                 <View style={{ paddingHorizontal: 30, flexDirection: 'row' }} >
                <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate('InicioCarrera')}>
                    <Text style={styles.panelButtonTitle}>Agregar   <Icon name='add-circle-outline' style={styles.icon} />
    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.commandButto}
                    onPress={() => navigation.navigate('InicioCarrera')}
                >
                    <Text style={styles.panelButtonTitle}>
                        Cancelar </Text>
                </TouchableOpacity>
            </View>
            </View>
 </View>
  )
}

export default AgregarCarrera

const styles = StyleSheet.create({
    container: {
        flex: 1, paddingHorizontal: 50, backgroundColor: '#fff'
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
      icon: {
        fontSize: 30,
        color: '#fff',
    
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

    }
});