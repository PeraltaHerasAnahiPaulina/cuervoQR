import React from 'react'
import { View,Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const InicioCarrera = ({ navigation }) =>{
  return (
    <SafeAreaView style={styles.container}>
    <View>
      
      <View style={{ flexDirection: 'row-reverse', flexWrap: 'wrap'}}>
      <TouchableOpacity onPress={() => navigation.navigate('AgregarCarrera')}>
            <Text style={styles.admin}>
            -Agregar- </Text>
        </TouchableOpacity>
      <Icon name='add-circle-outline' style={styles.icons} />
      </View>

        <Text style={styles.title}>Carreras </Text></View>

  
    <View style={styles.userInfoSection}>
       
       
        <View style={styles.row}>
            <Icon name='school-outline' style={styles.icons} />
            <Text style={{ color: "#000000", marginLeft: 20 }}>T.S.U Desarrollo de software multiplataformas</Text>
           
           
        </View>
        <View style={{ paddingHorizontal: 30, flexDirection: 'row' }} >
                <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate('EditarCarrera')}>
                    <Text style={styles.panelButtonTitle}>Editar  <Icon name='create-outline' style={styles.iconsedit} /></Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.commandButto}
                    onPress={() => navigation.navigate('Carreras')}
                >
                    <Text style={styles.panelButtonTitle}>
                        Eliminar<Icon name='trash-outline' style={styles.iconsedit} /> </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
            <Icon name='school-outline' style={styles.icons} />
            <Text style={{ color: "#000000", marginLeft: 20 }}>T.S.U. en Mantenimiento, Área Industrial</Text>
       
        </View>
        <View style={{ paddingHorizontal: 30, flexDirection: 'row' }} >
                <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate('EditarCarrera')}>
                    <Text style={styles.panelButtonTitle}>Editar  <Icon name='create-outline' style={styles.iconsedit} /></Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.commandButto}
                    onPress={() => navigation.navigate('Carreras')}
                >
                    <Text style={styles.panelButtonTitle}>
                        Eliminar </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
            <Icon name='school-outline' style={styles.icons} />
            <Text style={{ color: "#000000", marginLeft: 20 }}>Ing. en Mantenimiento Industrial</Text>
       
        </View>
        <View style={{ paddingHorizontal: 30, flexDirection: 'row' }} >
                <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate('EditarCarrera')}>
                    <Text style={styles.panelButtonTitle}>Editar  <Icon name='create-outline' style={styles.iconsedit} /></Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.commandButto}
                    onPress={() => navigation.navigate('Carreras')}
                >
                    <Text style={styles.panelButtonTitle}>
                        Eliminar </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
            <Icon name='school-outline' style={styles.icons} />
            <Text style={{ color: "#000000", marginLeft: 20 }}>T.S.U. en Mecatrónica, Área Sistemas de Manufactura Flexible</Text>
       
        </View>
        <View style={{ paddingHorizontal: 30, flexDirection: 'row' }} >
                <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate('EditarCarrera')}>
                    <Text style={styles.panelButtonTitle}>Editar  <Icon name='create-outline' style={styles.iconsedit} /></Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.commandButto}
                    onPress={() => navigation.navigate('Carreras')}
                >
                    <Text style={styles.panelButtonTitle}>
                        Eliminar </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
            <Icon name='school-outline' style={styles.icons} />
            <Text style={{ color: "#000000", marginLeft: 20 }}>Ing. en Mecatrónica</Text>
       
        </View>
        <View style={{ paddingHorizontal: 30, flexDirection: 'row' }} >
                <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate('EditarCarrera')}>
                    <Text style={styles.panelButtonTitle}>Editar  <Icon name='create-outline' style={styles.iconsedit} /></Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.commandButto}
                    on
                    Press={() => navigation.navigate('Carreras')}
                >
                    <Text style={styles.panelButtonTitle}>
                    Eliminar </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
            <Icon name='school-outline' style={styles.icons} />
            <Text style={{ color: "#000000", marginLeft: 20 }}>T.S.U. en Desarrollo de Negocios, Área Mercadotecnia</Text>
       
        </View>
        <View style={{ paddingHorizontal: 30, flexDirection: 'row' }} >
                <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate('EditarCarrera')}>
                    <Text style={styles.panelButtonTitle}>Editar  <Icon name='create-outline' style={styles.iconsedit} /></Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.commandButto}
                    onPress={() => navigation.navigate('Carreras')} >
                    <Text style={styles.panelButtonTitle}>
                    Eliminar </Text>
                </TouchableOpacity>
            </View>
    </View>







    <View style={{ paddingHorizontal: 50 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Adminitrador')}
            style={styles.bootton}>
            <Text style={styles.editper}>
                Regresar  </Text>
 </TouchableOpacity>


    </View>

</SafeAreaView>

  )
}

export default InicioCarrera

const styles = StyleSheet.create({
  commandButto: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 20
},
  panelButtonTitle: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 20,
    color: '#fff'
},
  commandButton: {
    backgroundColor: '#349B38',
            padding: 15,
            borderRadius: 10,
            marginBottom: 20
},
  
  container: {
      flex: 1,backgroundColor: '#fff'
  },
  userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
  },
  admin: {
    textAlign: 'center',
                fontWeight: '900',
                fontSize: 16,
                color: '#349B38'

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
  row: {
      flexDirection: 'row',
      marginBottom: 10,
  },
  icons: {
    fontSize: 34,
    color: '#349B38',

  },
  iconsedit: {
    fontSize: 30,
    color: '#ffff',

  },
  bootton: {
                backgroundColor: '#349B38',
                padding: 15,
                borderRadius: 10,
                marginBottom: 20,
  
            },
  editper: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 20,
    color: '#fff'
},
});