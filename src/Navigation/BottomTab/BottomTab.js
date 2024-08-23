import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import ScanFase from '../../Screens/ScanFace/ScanFase';
import MoreProducts from '../../Screens/MoreProducts/MoreProducts';
import MoreProducts2 from '../../Screens/MoreProducts2/MoreProducts2';
import ProfileScreen from '../../Screens/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'transparent', 
          position: 'absolute', 
          elevation: 0, 
          borderTopWidth: 0, 
          height: 0, 
        },
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarStyle: { display: 'none' }, 
        }}
      />
      <Tab.Screen 
        name="Scan" 
        component={ScanFase}  
        options={{
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tab.Screen 
        name="Products" 
        component={MoreProducts}  
        options={{
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tab.Screen 
        name="Products2" 
        component={MoreProducts2}  
        options={{
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tab.Screen 
        name="PrfileScreen" 
        component={ProfileScreen}  
        options={{
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
