import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

function HomePage(): React.JSX.Element {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FDF5E6',
      padding: 20,
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      margin: 20,
      elevation: 2,
      shadowColor: 'rgba(0, 0, 0, 0.2)',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 2,
    },
    buttonText: {
      fontSize: 20,
      color: 'black',
      textAlign: 'center',
    },
  });

  return (
    <>
      <View style={styles.container}>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text style={styles.text}>🎉 Chef de Party 🎉</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Create recipe pressed')}>
            <Text style={styles.buttonText}>Create Recipe</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('View recipe pressed')}>
            <Text style={styles.buttonText}>View Recipes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default HomePage;
