import React from 'react';
import Routes from './src/routes';
import { useFonts, Roboto_300Light, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { AppLoading } from 'expo';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <>
      <Routes />
    </>
  );
}


