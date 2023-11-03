import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParams } from '../../../types';
import Header from '../../../components/Header/Header';


const Detail = () => {
    const { params: { title, url, explanation, date } } = useRoute<NativeStackScreenProps<RootStackParams, 'Detail'>['route']>();
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={{ uri: url }} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <ScrollView>
                    <Text style={styles.explanation}>{explanation}</Text>
                </ScrollView>
            </View>

        </View>
    );
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#000C91',
    },
    content: {
        backgroundColor: '#2c449d',
        borderRadius: 15,
        marginVertical: 24,
        padding: 16,
        flex: 1,
    },
    image: {
        width: '100%',
        height: '40%',
        borderColor: '#FFF',
        borderWidth: 2,
        borderRadius: 15,
    },
    title: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5,
    },
    date: {
        color: '#FFF',
        fontSize: 10,
        padding: 5,
        textAlign: 'right',
    },
    explanation: {
        color: '#CCC',
        fontSize: 16,
        padding: 5,
        textAlign: 'justify',
    },

});

export default Detail;