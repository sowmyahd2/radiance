
import React, { useState,useRef,useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image,Dimensions,FlatList, SafeAreaView} from 'react-native';
import { Divider,Searchbar,Card} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { FlashList } from "@shopify/flash-list";




var deviceWidth = Dimensions.get("window").width;

    
const Catlist = (props) => { 
  console.log(props);
  const itemWidth = (deviceWidth) / 2;
    const navigation = useNavigation();
   
   
   



      
  


return(
<>

<SafeAreaView >
    <View>
      
                        <FlashList 
                         
                            data={props.data}
                            estimatedItemSize={20}
                            renderItem={({item}) =>
                                <View style={{flex: 1,fexDirection: 'row',marginRight:3,marginBottom:3,minWidth:itemWidth,maxWidth:itemWidth}} >
                                    <Card style={styles.cardview}>
                                       
                                        
                                            <Text style={styles.textView} key={item.SubCategoryId}>{item.service}</Text>
                                       
                                    </Card>
                                 </View>
                            }
                          keyExtractor={(item,index) => item.id}
                        />
                   
              
    </View>
     </SafeAreaView>

</>
)
};


export default Catlist;


const styles = StyleSheet.create({
  MainContainer :{
    flex:1,
    margin: 5,
    marginTop: (Platform.OS === 'ios') ? 20 : 0,

},
imageView: {

   height: 100 ,
   margin: 7,
   resizeMode: 'contain',
   backgroundColor:"white",
},

textView: {
    width:'50%',
    textAlignVertical:'center',
    padding:10,
    color: '#000'
},
 viewstyle:{
  width: 110, height: 100,padding: 10,
  alignItems:"center",
  backgroundColor:'#FFFFFF',

  },

cardview:{
   flex:1,
   elevation: 2,
   shadowColor: "#584faf",
   shadowOffset: {
   width: 0,
   height: 12,
   },
   shadowOpacity: 0.58,
   shadowRadius: 16.00,
   elevation: 8,
},
textView: {
   fontSize: 18,
   fontWeight: 'bold',
   textAlign: 'center',
   padding: 20,
   color:'#30487b',

},
maincattitle:{
   fontSize: 22,
   fontWeight: 'bold',
   textAlign: 'center',
   padding: 20,
   color:'#eee',
   //color:'#30487b',
   backgroundColor:'#584faf',
   margin:10,
}
});