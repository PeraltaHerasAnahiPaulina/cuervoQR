import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { View,Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native';

const EditPerfil = ({navigation }) =>{
  return (
 <View style={styles.container}>
    <View style={{ marginTop: 80 }}>
                <Text style={styles.title}> Editar Perfil </Text>
               
            </View>
            <View style={{ marginTop: 20 }}>
                <View style={styles.action}>
                    <Icon style={{ marginRight: 5 }} name='person-outline' style={styles.icons} />
                    <TextInput
                        placeholder="Anahi Paulina"
                        placeholderTextColor="#666666"
                     
                    />
                </View>
                <View style={styles.action}>
                    <Icon style={{ marginRight: 5 }} name='person-outline' style={styles.icons} />
                    <TextInput
                        placeholder="Peralta "
                        placeholderTextColor="#666666"
                    />
                </View>
               
                <View style={styles.action}>
                    <Icon style={{ marginRight: 5 }} name='ios-call-outline'style={styles.icons}  />
                    <TextInput
                        placeholder="222111387"
                        placeholderTextColor="#666666"
                        keyboardType="number-pad"
                        autoCorrect={false}

                    />
                </View>
                <View style={styles.action}>
                    <Icon style={{ marginRight: 5 }} name='mail-outline' style={styles.icons}  />
                    <TextInput
                        placeholder="al222111387@email.com"
                        placeholderTextColor="#666666"
                        keyboardType="email-address"
                        autoCorrect={false}

                    />
                </View>
                <View style={styles.action}>
                    <Icon style={{ marginRight: 5 }} name='lock-closed-outline'style={styles.icons}  />
                    <TextInput
                        placeholder="**************"
                        placeholderTextColor="#666666"
                        autoCorrect={false}/>
                </View>
                <View style={styles.action}>
                    <Icon style={{ marginRight: 5 }} name='business-outline'style={styles.icons}  />
                    <TextInput
                        placeholder="Doc-1"
                        placeholderTextColor="#666666"
                        autoCorrect={false}/>
                </View>
                <View style={styles.action}>
                    <Icon style={{ marginRight: 5 }} name='school-outline'style={styles.icons}  />
                    <TextInput
                        placeholder="T.S.U Desarrollo de software multiplataformas"
                        placeholderTextColor="#666666"
                        autoCorrect={false}/>
                </View>
                <View style={styles.action}>
                    <Icon style={{ marginRight: 5 }} name='shield-outline'style={styles.icons}  />
                    <TextInput
                        placeholder="Entrada principal"
                        placeholderTextColor="#666666"
                        autoCorrect={false}/>
                </View>

                <View style={{ paddingHorizontal: 30, flexDirection: 'row' }} >
                <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate('MenuDrawer')}>
                    <Text style={styles.panelButtonTitle}>Realizar cambio</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.commandButto}
                    onPress={() => navigation.navigate('MenuDrawer')}
                >
                    <Text style={styles.panelButtonTitle}>
                        Cancelar </Text>
                </TouchableOpacity>
            </View>
            </View>
 </View>
  )
}

export default EditPerfil

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