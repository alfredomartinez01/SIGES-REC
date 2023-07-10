import React, {useEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { GeneralRoutes } from './src/navigation/stack/GeneralRoutes';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop:StatusBar.currentHeight }}>
        <NativeBaseProvider>
          <NavigationContainer >
            <GeneralRoutes />
          </NavigationContainer>
        </NativeBaseProvider>
      </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
