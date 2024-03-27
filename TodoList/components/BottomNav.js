import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import BottomNav from '../../components/BottomNav';

import About from '../src/screens/About';
import Contact from '../src/screens/Contact';
import HomeScreen from '../src/screens/HomeScreen';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        underlayColor="#dddddd"
        onPress={() => navigateToScreen('Home')}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableHighlight>

      

      <TouchableHighlight
        style={styles.button}
        underlayColor="#dddddd"
        onPress={() =>
            navigation.navigate('About', {name: 'JHON'})
          }
      >
        <Text style={styles.buttonText}>About</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.button}
        underlayColor="#dddddd"
        onPress={() =>
            navigation.navigate('Contact', {name: 'JHON'})
          }
      >
        <Text style={styles.buttonText}>Contact</Text>
      </TouchableHighlight>
    </View>
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name= "About component" component={About} />
    //   </Tab.Navigator>
    // </NavigationContainer>
   
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
  },
  button: {
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});




export default BottomNav;
