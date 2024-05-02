import React from 'react';
import { View,ScrollView, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, } from 'react-native-paper';
const Carddesign = ({ title, description }) => {
  return (
    <ScrollView>
    <View>
   
  
<Card>
  <Card.Cover  />
  <Card.Content>
  <View style={styles.card}>
    <Image source={{ uri: 'https://picsum.photos/700', height:250, width:"100%" }}/>
      <Text style={styles.title} accessibilityLabel="Card Title" accessibilityRole="header">
sini drop
</Text>

<Icon name="map" size={30} color="#FF1493" /> 
<Text> saraswathipuram mysuru 57009</Text>
<TouchableOpacity style={styles.button}><Text style={styles.text}>More detail</Text></TouchableOpacity>
</View> 


  </Card.Content>
  <Card.Actions>
    
  </Card.Actions>
</Card>
    </View></ScrollView>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
  },
  button: {
    alignSelf: 'center',

    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#e75480',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  card: {
   
    alignItems: 'left',
    justifyContent: 'left',
  backgroundColor:"lightgrey", 
  paddingVertical: 12,
  paddingHorizontal: 12,
elevation:10,
zIndex:10},
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    
    color: 'black', // White text color
  },
  description: {
    fontSize: 18,
    marginBottom: 15,
    color: '#fff',
  },
});

export default Carddesign;
