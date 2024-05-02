import React from 'react'
import { View, Dimensions, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import ServiceItems from '../../Scrollitems/Serviceitems';

const HomePage = () => {
  return (
    <View style={{flex:1,backgroundColor:"darkpink"}}>
     <ServiceItems/>
        </View>
  )
}



export default HomePage