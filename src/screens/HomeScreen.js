import React from 'react'
import { View,Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>

    <View>
        <Text style={styles.title}> {'\n'}Perfil {'\n'} {'\n'}</Text>
 </View>

  
    <View style={styles.userInfoSection}>
        <View style={styles.row}>
            <Icon name='person-outline'style={styles.icons}/>
            <Text style={{ color: "#000000", marginLeft: 20 }}>Anahi Paulina</Text>
        </View>
        <View style={styles.row}>
            <Icon name='person-outline'style={styles.icons} />
            <Text style={{ color: "#000000", marginLeft: 20 }}>Peralta</Text>
        </View>
        <View style={styles.row}>
            <Icon name='ios-call-outline'style={styles.icons} />
            <Text style={{ color: "#000000", marginLeft: 20 }}>222111387</Text>
        </View>
        <View style={styles.row}>
            <Icon name='mail-outline' style={styles.icons} />
            <Text style={{ color: "#000000", marginLeft: 20 }}>al222111387@email.com</Text>
        </View>
        <View style={styles.row}>
            <Icon name='lock-closed-outline' style={styles.icons} />
            <Text style={{ color: "#000000", marginLeft: 20 }}>**********</Text>
        </View>
        <View style={styles.row}>
            <Icon name='business-outline' style={styles.icons} />
            <Text style={{ color: "#000000", marginLeft: 20 }}>Doc-1</Text>
        </View>
        <View style={styles.row}>
            <Icon name='school-outline' style={styles.icons} />
            <Text style={{ color: "#000000", marginLeft: 20 }}>T.S.U Desarrollo de software multiplataformas</Text>
        </View>
        <View style={styles.row}>
            <Icon name='shield-outline' style={styles.icons}/>
            <Text style={{ color: "#000000", marginLeft: 20 }}>Entrada principal</Text>
        </View>

        
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
             <Text style={styles.title1}> {'\n'} {'\n'}
              <Icon name='exit-outline'style={styles.icons}/>
             Cerrar sesión </Text>
</TouchableOpacity>

    </View>
    <View style={{ paddingHorizontal: 50 }}>
        <TouchableOpacity onPress={() => navigation.navigate('EditPerfil')}
            style={styles.bootton}>
            <Text style={styles.editper}>
                Editar Perfil </Text>
 </TouchableOpacity>


    </View>

</SafeAreaView>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,backgroundColor: '#fff'
  },
  userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
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
    fontSize: 30,
    color: '#349B38',

  },
  bootton: {
                backgroundColor: '#349B38',
                padding: 15,
                borderRadius: 10,
                marginBottom: 20
            },
  editper: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 20,
    color: '#fff'
},
});