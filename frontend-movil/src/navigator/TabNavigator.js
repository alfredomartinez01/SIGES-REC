import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { View, Animated, TouchableOpacity, Image, Dimensions } from 'react-native';

// Plus...
import plus from '../assets/plus.png';

// Font Awesome Icons...
import { FontAwesome5 } from '@expo/vector-icons'
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
          bottom: 40,
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

      {/* Home Screen */}
      <Tab.Screen name={"Home"} component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            position: 'absolute',
            top: 10
          }}>
            <FontAwesome5
              name="home"
              size={25}
              color={focused ? '#0958d9' : 'gray'}
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

      {/* Search Screen */}
      <Tab.Screen name={"Search"} component={ChatScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            position: 'absolute',
            top: 10
          }}>
            <FontAwesome5
              name="search"
              size={25}
              color={focused ? '#0958d9' : 'gray'}
            ></FontAwesome5>
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
      <Tab.Screen name={"ActionBottom"} component={ChatScreen} options={{
        tabBarIcon: ({ focused }) => (
          <TouchableOpacity>
            <View style={{
              width: 55,
              height: 55,
              backgroundColor: '#0958d9',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: Platform.OS == "android" ? 30 : 30
            }}>
              <Image source={plus} style={{
                width: 22,
                height: 22,
                tintColor: 'white',
              }}></Image>
            </View>
          </TouchableOpacity>
        )
      }} />

      {/* Notifications Screen */}
      <Tab.Screen name={"NotificationsScreen"} component={NotificationsScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            position: 'absolute',
            top: 10
          }}>
            <FontAwesome5
              name="bell"
              size={25}
              color={focused ? '#0958d9' : 'gray'}
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
      <Tab.Screen name={"Profile "} component={ChatScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            position: 'absolute',
            top: 10
          }}>
            <FontAwesome5
              name="user-alt"
              size={25}
              color={focused ? '#0958d9' : 'gray'}
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
      backgroundColor: '#0958d9',
      position: 'absolute',
      bottom: 88,
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
