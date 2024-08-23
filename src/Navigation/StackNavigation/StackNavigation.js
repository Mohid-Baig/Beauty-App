import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignUp } from '../../Screens/SignupScreen/Signup';
import { Login } from '../../Screens/LoginScreen/Login';
import BottomTab from '../BottomTab/BottomTab';
import ScanFase from '../../Screens/ScanFace/ScanFase';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import MoreProducts from '../../Screens/MoreProducts/MoreProducts';
import MoreProducts2 from '../../Screens/MoreProducts2/MoreProducts2';
import ProfileScreen from '../../Screens/ProfileScreen/ProfileScreen';



const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Signup' component={SignUp} 
      options={{
        headerTitle:'Signup-Page',
        
      }}
      />
      <Stack.Screen name='Login' component={Login} 
      options={{
        headerTitle:'Login-Page',
      }}
      />
  
      <Stack.Screen name="Scan" component={ScanFase} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={MoreProducts} />
      <Stack.Screen name="Products2" component={MoreProducts2} />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
