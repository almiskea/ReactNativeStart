import React, { useState } from 'react';
import AdjustColor from '../components/AdjustColor.js'
import { Button, Text, FlatList, View, StyleSheet } from 'react-native';

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    console.log(red)
    return (
        <View>
            <AdjustColor
                name={"Red"}
                color={red}
                setColor={setRed}
            />
            <AdjustColor
                name={"Green"}
                color={green}
                setColor={setGreen}
            />
            <AdjustColor
                name={"Blue"}
                color={blue}
                setColor={setBlue}
            />

            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})`}}></View>
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

export default SquareScreen;