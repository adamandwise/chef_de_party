import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function HomePage(): React.JSX.Element {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World</Text>
    </View>
  );
}

export default HomePage;
