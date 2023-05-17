import React from 'react'
import { View, ScrollView, Text, StyleSheet,TouchableOpacity } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons'
import { NotificationBox } from '../components/NotificationBox'


export const NotificationsScreen = () => {

    //const {tituloN, descripcionN, isLoading} = useNotification();
    /*if(isLoading){
        return(
        <View style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>
            <ActivityIndicator color="red" size={50} />
        </View>
        )
    }*/

  return (
    <ScrollView>
        <View>
            <View style={styles.containerH}>
                <Text style={styles.titulo}>Notificationes</Text>
                <TouchableOpacity>
                    <FontAwesome5 name="search" size={20} style={styles.iconS} />
                </TouchableOpacity>
            </View>
            <View style = {styles.lineStyle} />

            <NotificationBox />
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        verticalAlign: 'middle',
        color: 'black',
        marginTop: 20,
    },
    lineStyle: { 
        borderWidth: 0.5, 
        borderColor: 'black', 
        margin: 10, 
    },
    containerH: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        verticalAlign: 'middle',
        marginHorizontal: 10,
    },
    iconS: {
        color: 'black',
        marginTop: 20,
    },

})
