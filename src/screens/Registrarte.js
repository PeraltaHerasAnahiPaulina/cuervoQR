import React from "react";
import { View, Text, ScrollView,StyleSheet, SafeAreaView, ImageBackground, Touchable, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

const Registrarte = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff' }}>


    <View style={{ paddingHorizontal: 30 }}>
        <Text style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28, fontWeight: '900',
            color: '#349B38',
            marginBottom: 30,
            textAlign: 'center',
        }}> Registro </Text>

        <View style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25
        }}>
            <Icon style={{ marginRight: 5 }} name='person-outline' style= {styles.icons}/>
            <TextInput style={{ flex: 1, paddingVertical: 0 }} placeholder="Nombre" secureTextEntry={true} />
        </View>
        <View style={styles.regis}>
            <Icon style={{ marginRight: 5 }} name='person-outline' style= {styles.icons} />
            <TextInput style={{ flex: 1, paddingVertical: 0 }} placeholder="Apellido" secureTextEntry={true} />
        </View>
         
        <View style={styles.regis}>
            <Icon style={{ marginRight: 5 }} name='card-outline'style= {styles.icons} />
            <TextInput style={{ flex: 1, paddingVertical: 0 }} placeholder="Matricula" keyboardType="email-addres" />
        </View>
        <View style={styles.regis}>
            <Icon style={{ marginRight: 5 }} name='mail-outline' style= {styles.icons} />
            <TextInput style={{ flex: 1, paddingVertical: 0 }} placeholder="Email" keyboardType="email-addres" />
        </View>
        <View style={styles.regis}>
            <Icon style={{ marginRight: 5 }} name='lock-closed-outline' style= {styles.icons}/>
            <TextInput style={{ flex: 1, paddingVertical: 0 }} placeholder="Contraseña" keyboardType="email-addres" />
        </View>
        <View style={styles.regis}>
            <Icon style={{ marginRight: 5 }} name='business-outline' style= {styles.icons} />
            <TextInput style={{ flex: 1, paddingVertical: 0 }} placeholder="Docencia" secureTextEntry={true} />
        </View>
        <View style={styles.regis}>
            <Icon style={{ marginRight: 5 }} name='school-outline' style= {styles.icons} />
            <TextInput style={{ flex: 1, paddingVertical: 0 }} placeholder="Carrera" secureTextEntry={true} />
        </View>
        <View style={styles.regis}>
            <Icon style={{ marginRight: 5 }} name='shield-outline' style= {styles.icons}/>
            <TextInput style={{ flex: 1, paddingVertical: 0 }} placeholder="Tipo entrada" secureTextEntry={true} />
        </View>
      

        <TouchableOpacity onPress={() => navigation.navigate('MenuDrawer')}
            style={{
            backgroundColor: '#349B38',
                padding: 15,
                borderRadius: 10,
                marginBottom: 20
            }}
        >
            <Text style={{
                textAlign: 'center',
                fontWeight: '900',
                fontSize: 20,
                color: '#fff'
            }}>
                Crear Cuenta</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={{
                textAlign: 'center',
                fontWeight: '900',
                fontSize: 16,
                color: '#349B38'
            }}>
                Regresar </Text>

        </TouchableOpacity>
    </View>
</SafeAreaView>
  )
}

export default Registrarte

const styles =StyleSheet .create({

    regis: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25
    },
    icons: {
        fontSize:25 ,
        color: '#349B38',
    
      }
});
