import { View, Text, Button, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native';

import { PostImage as PostImgeTypes, RootStackParams } from '../../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Detail'>

const PostImage: FC<PostImgeTypes> = ({ title, date, url, explanation }) => {
    const { navigate } = useNavigation<PostImageNavigationProps>();

    const handleViewPress = () => {
        navigate('Detail', { title, date, url, explanation });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title='View' onPress={handleViewPress} />
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c449d',
        marginVertical: 5,
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