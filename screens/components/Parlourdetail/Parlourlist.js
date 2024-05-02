import React, { useEffect } from 'react'
import { View, Dimensions, Text,FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native';
import {Card} from  'react-native-paper'; 
import { Registerbutton,Loginbutton } from '../inputs/Button';
import StarRating from 'react-native-star-rating-widget';
import { useSelector, useDispatch } from 'react-redux';
import { Parlourslist } from '../../redux/parlourdetailSlice';
import { FlashList } from "@shopify/flash-list";
import { useNavigation } from '@react-navigation/native';
const Parlourlists = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const parloursList = useSelector(state => state.parlourdetail.parlourslist);
  const status = useSelector(state => state.parlourdetail.status);

  useEffect(() => {
    dispatch(Parlourslist());
  }, [dispatch]);
  return (
    <View style={styles.containter}>
      <FlashList 
                         
                         data={parloursList.data}
                         estimatedItemSize={20}
                         renderItem={({item}) =>
<Card style={styles.cardview}>
  <Card.Title>Title</Card.Title>
  <Card.Content>
    <View  style={{flexDirection:'row'}} >
      <View style={{flex:1}}>
      <Image style={{ width:250, height: 250, alignSelf:"flex-start", borderRadius:50 }} source={require("../../images/banner4.jpg") } />
     
      </View>
      
      <View style={{flex:1}}>
       <Text style={styles.nametextstyle}>{item.ParlourName}</Text>
       <Text style={styles.textstyle}>{item.Address}</Text>
       <Text style={styles.textstyle}>26 Feb 7 days opens</Text>
       <Text style={styles.textstyle}>{item.Phone}</Text>
       <StarRating
        rating={4}
      />
       </View>
      
    </View>
  
    <Registerbutton title="View"  onPress={() => navigation.navigate('ParlourDetail', { parlourid: item.id })}/>
  </Card.Content>
  
</Card>

                         
 }
                          keyExtractor={(item,index) => item.id}
                        />
                   

    </View>
  )
}
export default Parlourlists;
const styles=StyleSheet.create({
containter:{
  flex:1,
  backgroundColor:"#ccc"
 
},
cardview:{
  elevation:10,
  zIndex:10,
  borderRadius:50,
  margin:10,
  backgroundColor:"#000"
},
nametextstyle:{
  fontWeight:"bold",
  color:"white",
 fontStyle:"italic",
 fontFamily:"tahoma",
 fontSize:24,

 
},
textstyle:{
  fontWeight:"bold",
  color:"#CCC",

 fontFamily:"Mono-space",
 fontSize:18,

 
}
});
