// AboutScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomNav from '../../components/BottomNav';

// import BottomComponent from '../../components/BottomNav';

const Contact = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>Contact Screen</Text>
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

export default Contact;
