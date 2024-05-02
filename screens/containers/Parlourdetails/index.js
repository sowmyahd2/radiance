import React from 'react'
import { View, Dimensions, Text, StyleSheet, Image, ActivityIndicator, ScrollView } from 'react-native';
import {Card} from  'react-native-paper'; 
import Parlourlists from '../../components/Parlourdetail/Parlourlist';
const Parlourlist = () => {
  return (
    <ScrollView>
    <View style={styles.containter}>

<Parlourlists/>
<View style={{padding:5}}/>
<Parlourlists/>
<View style={{padding:5}}/>
<Parlourlists/>
    </View>
    </ScrollView>
  )
}
export default Parlourlist;
const styles=StyleSheet.create({
containter:{
  flex:1,
  backgroundColor:"#ccc "
 
},
cardview:{
  elevation:10,
  
  borderRadius:50,
  margin:10,

  
},
textstyle:{
  fontWeight:"500",
  color:"black",
 fontStyle:"italic",
 fontFamily:"Mono-space",
 
}
});
