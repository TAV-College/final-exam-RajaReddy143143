import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyNewComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is My New Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default MyNewComponent;