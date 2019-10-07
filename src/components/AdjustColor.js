import React from 'react';
import { Button, Text, FlatList, View, StyleSheet } from 'react-native';

const AdjustColor = ({name, color, setColor}) => {

    return (
        <View>
            <Text>{name}</Text>
            <Button
                title={`Increase ${name}`}
                onPress={() => {
                    color < 246? setColor(color + 10) : '';
                }}
            />
            <Button
                title={`Decrease ${name}`}
                onPress={() => {
                    color > 9 ? setColor(color - 10) :'';
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default AdjustColor;