import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';

export const MaterialCatalogScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>Hola</Text>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
