// HomeScreen.js
import React from 'react';
import { View, Text , Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import BottomComponent from '../../components/BottomNav';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FetchingApi from '../../components/FetchingApi';
import BottomNav from '../../components/BottomNav';


const HomeScreen = ({navigation}) => {
    const Tab = createBottomTabNavigator();



    return (
        <View>
      <Button
        title="Go to Jhon"
        onPress={() =>
          navigation.navigate('Profile', {name: 'JHON'})
        }
      />

      
      
      {/* <NavigationContainer> */}
        {/* <Stack.Navigator>
          <Stack.Screen
            name="Bottom"
            component={BottomComponent}
            options={{ title: 'Welcome to00 Bottom' }}
          />

          
        </Stack.Navigator>
      </NavigationContainer> */}

      {/* <FetchingApi /> */}
       {/* <BottomNav /> */}
      </View>
    );
  };
export default HomeScreen;
