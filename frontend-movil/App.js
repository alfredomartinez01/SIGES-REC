//import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, StatusBar , View } from 'react-native';
import { TabNavigator } from './src/navigator/TabNavigator.js';
import * as Font from 'expo-font';
import { HeaderSIGESRECT } from './src/layouts/HeaderSIGESRECT';


async function loadFonts() {
  await Font.loadAsync({
    'Acme-Regular': require('./assets/fonts/Acme-Regular.ttf'),
  });
}

export default function App()  {
  useEffect(() => {
    loadFonts();
  }, []);
  
  return (
      <SafeAreaView style={{ flex: 1, marginTop:StatusBar.currentHeight }}>
        <HeaderSIGESRECT />
        <NavigationContainer >
          
          {/* <StackNavigator /> */}
          {/* <MenuLateralBasico /> */}
          <TabNavigator />
          {/* <Tabs /> */}
        </NavigationContainer>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
