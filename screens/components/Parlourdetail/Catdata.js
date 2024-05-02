
import React, { useState,useRef,useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Image,Dimensions,FlatList, SafeAreaView} from 'react-native';

import Catlist from './Catlist';


var deviceWidth = Dimensions.get("window").width;
var deviceheight = Dimensions.get("window").height;

const Catdata = ({items}) => { 
   console.log(items);
  if (!items) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }
    


return(
<>

<SafeAreaView >
    <View>
    <FlatList numColumns={1}
                data={items}
                padding={10}
                renderItem={({item}) =>
                    <View style={{flex: 1,fexDirection: 'row'}} >
                    <TouchableOpacity>
                        <Image  style={{flex: 1,width:deviceWidth,height:deviceheight/10}}source={{ uri: 'https://cityonnet-virtualmall.s3-ap-southeast-1.amazonaws.com/category_banner/'+item.mainId+'.jpg'}}></Image>
                        <Text style={{flex: 1,fontSize: 20,color: 'red', alignItems: 'center',
                      justifyContent: 'center',}}>{item.main}</Text>
                        </TouchableOpacity>
                        <Catlist data={item.sub}/>
                       
                    </View>
                }
         keyExtractor={(item,index) => item.main}
        />
    </View>
     </SafeAreaView>

</>
)
}


export default Catdata;


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