import React from 'react';
import ImageDetails from '../components/ImageDetails.js'
import { FlatList, View, StyleSheet } from 'react-native';

const ImageScreen = () => {
    const images = [
        {title:'Beach', imageSource:require('../../assets/beach.jpg')},
        {title:'Forest', imageSource:require('../../assets/forest.jpg')},
        {title:'Mountain', imageSource:require('../../assets/mountain.jpg')},
        ];
    
    return (
        <View>
            <FlatList
                data={images}
                keyExtractor={images => images.title}
                renderItem={({ item }) => {
                    return <ImageDetails 
                                title={item.title} 
                                style={styles.textStyle}
                                imageSource={item.imageSource}
                    />;
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default ImageScreen;