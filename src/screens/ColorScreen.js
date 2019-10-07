import React, { useState } from 'react';
import ImageDetails from '../components/ImageDetails.js'
import { Button, Text, FlatList, View, StyleSheet } from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button
                title={"Create Color"}
                onPress={() => {
                    setColors([...colors, {color: RgbColors(),index: colors.length}])
                }}
            />

            <FlatList
                data={colors}
                keyExtractor={colors => colors.index+''}
                renderItem={({ item }) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item.color}}></View>;
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

const RgbColors = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

export default ColorScreen;