import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigation/StackNavigation/StackNavigation';
import SplashScreen from './src/Screens/SplashScreen/SplashScreen';


const App = () => {
  const[isShowSplash,setShowSplash]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setShowSplash(false)
    },500);
  })
  return (
  
    <NavigationContainer>{
      isShowSplash?<SplashScreen/>:<StackNavigation/>
    }</NavigationContainer>
  );
};

export default App;
 