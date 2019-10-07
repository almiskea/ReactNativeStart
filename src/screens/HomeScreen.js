import React from 'react';
import { Text,View, TouchableOpacity, Button, StyleSheet } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>I love Ghadeer</Text>
      <Button 
      style={styles.text}
      onPress={() => props.navigation.navigate('Components')}
      title="Go to Components"
      />
      <Button 
      style={styles.text}
      onPress={() => props.navigation.navigate('Images')}
      title="Go to Demo Images"
      />
      <Button 
      style={styles.text}
      onPress={() => props.navigation.navigate('Counter')}
      title="Go to Counter"
      />
      <Button 
      style={styles.text}
      onPress={() => props.navigation.navigate('Colors')}
      title="Create colors"
      />
      <Button 
      style={styles.text}
      onPress={() => props.navigation.navigate('Square')}
      title="Adjust Square color"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: 10
  }
});

export default HomeScreen;
