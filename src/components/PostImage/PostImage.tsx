import { View, Text, Button, StyleSheet } from 'react-native'
import React, { FC } from 'react'

import { PostImage as PostImgeTypes } from '../../types';

const PostImage: FC<PostImgeTypes> = ({ title, date }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title='View' />
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c449d',
        marginVertical: 16,
        borderRadius: 15,
        padding: 16,
        marginHorizontal: 10,
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        marginVertical: 5,
        fontWeight: 'bold',
    },
    date: {
        color: '#FFF',
        fontSize: 16,
    },
    buttonContainer: {
        alignItems: 'flex-end',
    },
});

export default PostImage;