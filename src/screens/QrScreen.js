//rafc
import { View, Text,  ImageBackground  } from 'react-native'
import React from 'react'
 const QrScreen = () => {
  return (
    <View   style={{flex: 1, flexDirection: 'column', backgroundColor: '#349B38'}}>
    <Text
            style={{
              color: 'white',
              fontSize: 42,
              lineHeight: 84,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
          {'\n'}
            Cuervos QR
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              lineHeight: 20,
              textAlign: 'center',
            }}>
            Entrada segura{'\n'}
            {'\n'}
            
          </Text>
    <View   style={{flex: 3, flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
    <Text
              style={{
                color: '#000000',
                fontSize: 20,
                lineHeight: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {'\n'}
              {'\n'} Bienvenido!!!{'\n'}{'\n'}
            </Text>
    
            <View>
                    <ImageBackground style={{ padding: 221}} source={require('../assets/imagenes/qr.jpg')}>
                    </ImageBackground>
    
                </View>
    </View>
    </View>
    
  )
}
export default QrScreen