import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
    return (
        <View>
            <Text style={headerStyles.textStyle}>Getting started with</Text>
            <Text style={bodyStyles.textStyle}>React native!</Text>
            <Text style={contentStyles.textStyle}>My name is Ali Almiskeen</Text>
        </View>
    );
}

const headerStyles = StyleSheet.create({
    textStyle:{
        fontSize: 30
    }
})
const bodyStyles = StyleSheet.create({
    textStyle:{
        fontSize: 20
    }
})
const contentStyles = StyleSheet.create({
    textStyle:{
        fontSize: 10
    }
})
export default ComponentsScreen;