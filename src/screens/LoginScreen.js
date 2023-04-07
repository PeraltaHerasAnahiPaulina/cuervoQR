import React from "react";
import { View, Text,StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({ navigation }) => {
  return (
    <View
      style={{flex: 1, flexDirection: 'column', backgroundColor: '#349B38'}}>
      
      <Text style={styles.title}>
        {'\n'}
        Cuervos QR</Text>
      <Text
        style={styles.title1}>
        {'\n'}Entrada segura{'\n'}
        {'\n'}
        {'\n'}{'\n'}
      </Text>



      <View style={{flex: 3, backgroundColor: '#FFFFFF'}}>
        <Text
          style={styles.title2}>{'\n'} {'\n'}{'\n'}Iniciar seguro{'\n'} {'\n'}</Text>

        <View style={styles.log}>
                    <Icon style={{ marginRight: 5 }} name='mail-outline' style={styles.icons} />
                    <TextInput style={{ flex: 1, paddingVertical: 0 }} placeholder="Email" keyboardType="email-addres" />

                </View>
                <View style={styles.log}>
                    <Icon style={{ marginRight: 5 }} name='lock-closed-outline' style={styles.icons}/>
                    <TextInput style={{ flex: 1, paddingVertical: 0 }} placeholder="Contraseña" secureTextEntry={true} />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
            <Text style={styles.admin}>
            {'\n'}{'\n'} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('MenuDrawer')}
          style={styles.touchboo}>
          <Text
           style={styles.touchbootext}>
            Iniciar Sesión
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('')}>
            <Text style={styles.admin}>{'\n'}¿Olvidaste contraseña?{'\n'}</Text>
        </TouchableOpacity>
        

        <TouchableOpacity
          onPress={() => navigation.navigate('Registrarte')}
          style={styles.touchboo}>
          <Text
            style={styles.touchbootext}>
            Registrarte
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('')}>
            <Text style={styles.admin}>
            {'\n'}{'\n'}{'\n'}{'\n'} Administrador </Text>

        </TouchableOpacity>
        
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
      flex: 1, paddingHorizontal: 1, backgroundColor: '#fff'
  },
  title: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    title1: {
      color: 'white',
          fontSize: 20,
          lineHeight: 20,
          textAlign: 'center',
  },
  title2: {
    color: '#000000',
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
    textAlign: 'center',
},
log: {
  flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    marginBottom: 25
},
  icons: {
      fontSize: 39,
      color: '#349B38',
  
    },
  touchboo: {
    backgroundColor: '#349B38',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  touchbootext: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 20,
    color: '#fff',

  },
  admin: {
    textAlign: 'center',
                fontWeight: '900',
                fontSize: 16,
                color: '#349B38'

  }
});