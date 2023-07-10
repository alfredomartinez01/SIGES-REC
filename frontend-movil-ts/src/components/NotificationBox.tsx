import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const NotificationBox = () => {
  return (
    <View style={styles.boxNotification}>
        <Text style={styles.notificationTitle}>Titulo notificación</Text>
        <Text style={styles.notificationDescription}>Descripción notificación</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    notificationTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        verticalAlign: 'middle',
        color: 'black',
    },
    notificationDescription: {
        fontSize: 12,
        verticalAlign: 'middle',
        color: 'black',
    },
    boxNotification: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: .20,
        shadowRadius: 1.41,
        elevation: 2,
    },
})
