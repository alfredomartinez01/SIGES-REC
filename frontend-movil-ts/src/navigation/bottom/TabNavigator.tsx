import React from 'react'
import { View, Animated, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';

//Screens...
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCatalogScreen } from '../../screens/MaterialCatalogScreen';
import { MainScreen } from '../../screens/MainScreen';
import { CalendarScreen } from '../../screens/CalendarScreen';
import { ProfileScreen } from '../../screens/ProfileScreen';

//Icons...
import { FontAwesome5 } from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/Ionicons';

import { useRef } from 'react';


const Tab = createBottomTabNavigator();

export const TabNavigator = () => {

  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <>
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 35,
          height: 60,
          marginHorizontal: 20,
          borderRadius: 10,
          paddingHorizontal: 10,
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10,
          },
          elevation: 3, // para Android
        },
      }}>

      {/* Main Screen */}
      <Tab.Screen name={"Home"} component={MainScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            position: 'absolute',
            top: 10
          }}>
            <FontAwesome5
              name="home"
              size={33}
              color={focused ? '#2E86C1' : 'gray'}
            ></FontAwesome5>
          </View>
        )
      }} listeners={({ navigation, route }) => ({
        tabPress: e => {
          Animated.spring(tabOffsetValue, {
            toValue: 0,
            useNativeDriver: true
          }).start();
        }
      })} />

      {/* Material Catalog Screen */}
      <Tab.Screen name={"MaterialCatalogScreen"} component={MaterialCatalogScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            position: 'absolute',
            top: 10
          }}>
            <Icon
             name='albums'
              size={35}
              color={focused ? '#2E86C1' : 'gray'}
            />
          </View>
        )
      }} listeners={({ navigation, route }) => ({
        tabPress: e => {
          Animated.spring(tabOffsetValue, {
            toValue: getWidth(),
            useNativeDriver: true
          }).start();
        }
      })} />

      {/* Plus Screen */}
      <Tab.Screen name={"ActionBottom"} component={MaterialCatalogScreen} options={{
        tabBarIcon: ({ focused }) => (
          <TouchableOpacity>
            <View style={styles.floatingButton}>
              <Image source={require('../../../assets/images/plus.png')} style={{
                width: 22,
                height: 22,
                tintColor: 'white',
              }}></Image>
            </View>
          </TouchableOpacity>
        )
      }} />

      {/* Calendar Screen */}
      <Tab.Screen name={"CalendarScreen"} component={CalendarScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            position: 'absolute',
            top: 10
          }}>
            <FontAwesome5
              name="calendar-day"
              size={30}
              color={focused ? '#2E86C1' : 'gray'}
            ></FontAwesome5>
          </View>
        )
      }} listeners={({ navigation, route }) => ({
        tabPress: e => {
          Animated.spring(tabOffsetValue, {
            toValue: getWidth() * 3 + 10,
            useNativeDriver: true
          }).start();
        }
      })} />

      {/* Profile Screen */}
      <Tab.Screen name={"ProfileScreen"} component={ProfileScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            position: 'absolute',
            top: 10
          }}>
            <FontAwesome5
              name="user-alt"
              size={30}
              color={focused ? '#2E86C1' : 'gray'}
            ></FontAwesome5>
          </View>
        )
      }} listeners={({ navigation, route }) => ({
        tabPress: e => {
          Animated.spring(tabOffsetValue, {
            toValue: getWidth() * 4 + 15,
            useNativeDriver: true
          }).start();
        }
      })} />
    </Tab.Navigator>
    
    <Animated.View style={{
      width: getWidth() - 15,
      height: 2,
      backgroundColor: '#2E86C1',
      position: 'absolute',
      bottom: 94,
      left: 40,
      borderRadius: 20,
      transform: [
        { translateX: tabOffsetValue }
      ]
    }} />
    </>
  )
}

function getWidth() {
  let width = Dimensions.get("window").width

  // Horizontal Padding = 20...
  width = width - 80

  // Total five Tabs...
  return width / 5
}

const styles = StyleSheet.create({
  floatingButton: {
    alignItems: 'center',
    width: 55,
    height: 55,
    backgroundColor: '#2E86C1',
    borderRadius: 30,
    marginBottom: 30,
    justifyContent: 'center',
  }

})
