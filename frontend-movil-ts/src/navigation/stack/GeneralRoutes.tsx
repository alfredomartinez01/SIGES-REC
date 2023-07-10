import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

// Screens...
//import MainScreen from '../../screens/MainScreen';
import { LoginScreen } from '../../screens/LoginScreen';
import { SignupScreen } from '../../screens/SignupScreen';
import { NotificationsScreen } from '../../screens/NotificationsScreen';
import { HomeStack } from './HomeStack';

const Stack = createStackNavigator();

export const GeneralRoutes = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="NotificationsScreen"
            component={NotificationsScreen}
            options={{
                headerShown: false,
            }}
        />
        {/* <Stack.Screen
            name="MainDrawer"
            component={MainDrawer}
            options={{
                headerShown: false,
            }}
        />  */}
        <Stack.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator> 
  )
}

