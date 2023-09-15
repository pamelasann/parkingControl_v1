import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import ViewMap from './app/screens/ViewMap';
import WelcomeScreen from './app/screens/WelcomeScreen';


export default function App() {
  const [showSplash, setShowSplash] = useState(true); //current state value and a function to update that state

  useEffect(() => {
    // Use a setTimeout to hide the splash screen after the seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500);

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []); //this dependency only runs on mount

  return (
    <View style={{ flex: 1 }}>
      {showSplash ? (
        <WelcomeScreen/> //show splash screen
      ) : (
        <ViewMap /> //show home/map view
      )}
    </View>
  );
}

