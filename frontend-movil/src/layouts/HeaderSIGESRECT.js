import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const HeaderSIGESRECT = () => {

  return (
    <View style={styles.encabezado}>
        <Text style={styles.texto}>SIGES-RECT</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  encabezado: {
    backgroundColor: '#0958d9',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
  },
  texto: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    verticalAlign: 'middle',
    //fontFamily: 'Acme-Regular',
  }    
})