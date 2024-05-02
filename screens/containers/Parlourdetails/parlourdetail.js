import React from 'react'
import { Text,View } from 'react-native'
import Detail from '../../components/Parlourdetail/Detail';
import { useRoute } from '@react-navigation/native';
const Parlourdetail = () => {
  const route = useRoute();
  const { parlourid } = route.params;
  
  return (
    <View style={{flex:1}}><Detail id={parlourid}/></View>
  )
}



export default Parlourdetail