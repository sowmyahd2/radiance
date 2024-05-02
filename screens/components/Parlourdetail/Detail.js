import React from 'react'
import { View, Text,StyleSheet } from 'react-native';
import Carouselitems from '../carousel';
import Parlouraddress from './parlouraddress';
import Servicedetails from './Servicedetails';


const Detail = ({id}) => {

  return (
    <View>
      <Carouselitems/>
      <Parlouraddress id={id}/>
      <Servicedetails id={id}/>
     
    </View>
  )
}


export default Detail