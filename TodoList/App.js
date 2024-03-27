// import  React from 'react';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeTabNavigator } from '@react-navigation/native-Tab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createTabNavigator } from '@react-navigation/Tab';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import { Button, Text } from 'react-native';
import FetchingApi from './components/FetchingApi';
import BottomComponent from './components/BottomNav';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createBottomTabNavigator();




const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
            // options={{ headerShown: false }}
          />

          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="About" component={About} />
          <Tab.Screen name="Contact" component={Contact} />


        </Tab.Navigator>
      </NavigationContainer>
      {/* <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </NavigationContainer> */}

 

    </>

  );
};

export default App;