import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export const HeaderSIGESREC = () => {

  const [fontsLoaded] = useFonts({
    'Acme-Regular': require('../../assets/fonts/Acme-Regular.ttf'),
  });

  return (
    <View style={styles.encabezado}>
        <Text style={styles.texto}>SIGES-REC</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  encabezado: {
    backgroundColor: '#2E86C1',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,

  },
  texto: {
    fontSize: 28,
    color: '#fff',
    //fontWeight: 'bold',
    verticalAlign: 'middle',
    fontFamily: 'Acme-Regular',
  }    
})