import React, { useState, useEffect } from 'react';
import { View, Modal, Text, Button, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';

const FetchingApi = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await response.json();
            setData(json);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <View style={styles.container}>
            <Button title="Open Modal" onPress={toggleModal} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={toggleModal}
            >
                <ScrollView>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            {loading ? (
                                <ActivityIndicator size="large" color="#0000ff" />
                            ) : error ? (
                                <Text>Error: {error.message}</Text>
                            ) : (
                                <Text>{JSON.stringify(data)}</Text>
                            )}
                            <Button title="Close" onPress={toggleModal} />
                        </View>
                    </View>
                </ScrollView>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
});

export default FetchingApi;
