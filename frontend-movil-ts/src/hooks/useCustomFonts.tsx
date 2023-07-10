import { useEffect } from 'react';
import * as Font from 'expo-font';

export const useCustomFonts = () => {
  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          'Acme-Regular': require('../../assets/fonts/Acme-Regular.ttf'),
        });
      } catch (error) {
        console.log('Error al cargar las fuentes:', error);
      }
    };

    loadFonts();
  }, []);
};
