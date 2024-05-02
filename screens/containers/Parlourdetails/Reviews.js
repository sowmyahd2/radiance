import React from 'react';
import { View, StyleSheet } from 'react-native';
import Reviews from '../../components/Parlourdetail/Reviews';

const Reviewcontainer = () => {
  return (
    <View style={styles.container}>
      <Reviews />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor:"black",
  },
});

export default Reviewcontainer;
