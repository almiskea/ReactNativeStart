import React from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';

const ListScreen = () => {

    const friends = [
        {
            name: "Friend#1",
            age: 74
        },
        {
            name: "Friend#2",
            age: 38
        },
        {
            name: "Friend#3",
            age: 24
        },
        {
            name: "Friend#4",
            age: 30
        },
        {
            name: "Friend#5",
            age: 4
        },

    ]
    return (
        <FlatList
            data={friends}
            keyExtractor={friend => friend.name}
            renderItem={({ item, index }) => {
                return <Text >{item.name} - Age {item.age}</Text>;
            }}
        />
    );
}

const headerStyles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})
const bodyStyles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
})
const contentStyles = StyleSheet.create({
    textStyle: {
        fontSize: 10
    }
})
export default ListScreen;