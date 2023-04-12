import { View, Text,ImageBackground ,StyleSheet} from 'react-native'
import React from 'react'
//import "bootstrap/dist/css/bootstrap.min.css";

const HistorialScreen = () => {
  return (
    <View   style={{ backgroundColor: '#FFFFFF'}}>
    <Text  style={{
                color: '#000000',
                fontSize: 20,
                lineHeight: 200,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>Estas en el HISTORIAL SCREEN </Text>
    <View>
                    <ImageBackground style={{ padding: 250}} source={require('../assets/imagenes/historial.png')}>
                    </ImageBackground>
    
                </View>
 
  </View>
  );
};

export default HistorialScreen
const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

