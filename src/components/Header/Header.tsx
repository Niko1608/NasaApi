import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContiner}>
                <Text style={styles.title}>Explore</Text>
            </View>
            <View style={styles.rightContiner}>
                <Image source={require('../../assets/nasa-logo.png')} style={styles.image} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    leftContiner: {
        flex: 1,
        alignItems: "flex-start",

    },
    rightContiner: {
        flex: 1,
        alignItems: "flex-end",
    },
    title: {
        fontSize: 20,
        color: "#fff",
        fontWeight: 'bold'
    },
    image: {
        width: 60,
        height: 60,
    }
});

export default Header;