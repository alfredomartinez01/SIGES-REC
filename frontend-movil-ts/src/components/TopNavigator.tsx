import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'


export const TopNavigator = () => {
  return (
    <View style={styles.topBar}>
        <View style={styles.headerImageView}>
            <Image 
                style={styles.headerImage}
                source={require('../../assets/images/icon_user.jpg')}
            />
        </View>
        <View>
            <Text style={styles.headerNameUser}>
                Hola, Usuario
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    topBar: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#F2F3F4',
        backgroundColor: '#EBF5FB',
    },
    headerImageView: {
        width: 40,
        height: 40,
        marginLeft: 15,
        borderRadius: 40/2,
        flexDirection: 'row'
    },
    headerImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
        backgroundColor: '#F2F3F4',
    },
    headerNameUser: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1A5276',
    },
  })