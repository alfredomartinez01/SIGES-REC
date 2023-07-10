import React from 'react'
import { SafeAreaView, StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import { Container, Text } from 'native-base'
import { TextInputComponent } from '../components/TextInputComponent'


export const SignupScreen = () => {
  return (
    <View style={{backgroundColor: 'white', height: '100%', width:'100%'}}>
      <TextInputComponent
          label={'Nombre'}
          name={'email'}
          placeholder={'Nombre completo'}/>
    </View>
  )
}
