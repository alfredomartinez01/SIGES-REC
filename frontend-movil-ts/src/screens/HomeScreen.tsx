import React from 'react'
import { SafeAreaView, Text, StyleSheet, View, ScrollView } from 'react-native'
import { TabNavigator } from '../navigation/bottom/TabNavigator'

export const HomeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.endContainer}>
        {/* <ScrollView style={styles.container}>
          <View >
              <Text>Home Screen</Text>
          </View>
        </ScrollView>
        <CustomTabBar navigation={navigation}/> */}
        <TabNavigator/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'flex-start', 
    // alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 10,
  },
  endContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    backgroundColor: '#F7F8FA',
  },
})