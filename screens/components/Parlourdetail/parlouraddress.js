import React,{useEffect} from 'react'
import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, } from 'react-native-paper';
import StarRating from 'react-native-star-rating-widget';
import { parlourdetail } from '../../redux/parlourdetailSlice';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

const Parlouraddress = ({id}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const parlourdetails = useSelector(state => state.parlourdetail.parlourdetails);
  console.log(parlourdetails);
  useEffect(() => {
    dispatch(parlourdetail(id));
  }, [dispatch]);

  return (
    <View><Card>
    <Card.Cover  />
    <Card.Content>
    <View style={styles.card}>
     
        <Text style={styles.title} accessibilityLabel="Card Title" accessibilityRole="header">
  {parlourdetails.ParlourName}
  </Text>
  <View style={{ flexDirection: 'row' }}>
          <View style={styles.textInputContainer}>
          <StarRating
              rating={4}
              starColor='hotpink' // Set the color of stars to hot pink
            />
          </View>
          <View style={{flex:0.2}}>
          <Text>256 ratings</Text>
       
          </View>
          <View style={{flex:1}}>
          
          <Text>400 likes</Text>
          </View>
        </View> 
  
  <Icon name="map" size={30} color="#FF1493" /> 
  <Text>   {parlourdetails.Address}</Text>
 
  </View> 
  
  
    </Card.Content>
    <Card.Actions>
      
    </Card.Actions>
  </Card></View>
  )
}



export default Parlouraddress;
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
  