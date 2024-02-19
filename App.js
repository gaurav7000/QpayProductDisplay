import 'react-native-gesture-handler';
import React, { useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductPage from './components/ProductPage';
import ProductDetails from './components/ProductDetails';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  });

  const onFontsLoaded = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync().catch((error) => console.warn(error));
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={onFontsLoaded}>
      <Stack.Navigator initialRouteName="ProductPage">
        <Stack.Screen name="ProductPage" component={ProductPage} options={{ title: 'Product List' }} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ title: 'Product Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
