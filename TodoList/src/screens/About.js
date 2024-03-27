// AboutScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import BottomComponent from '../../components/BottomNav';
import BottomNav from '../../components/BottomNav';


const About = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>About Screen</Text>
                <Text>This is a basic About page in React Native.</Text>
            </View>
            {/* <BottomComponent /> */}
            {/* <BottomNav/> */}

        </>



    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default About;
