import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export const Loginbutton = (props) =>{

  return (
    <TouchableOpacity {...props}>
<Text style={styles.btnTextlogin}>{props.title}</Text>
    </TouchableOpacity>
  );
};
export const Registerbutton=(props)=>{
return(
     <TouchableOpacity {...props}>
              <View  style={styles.actionbuttonregister }>

                <Text style={styles.actionbuttontext}>{props.title}</Text>
              </View>
              </TouchableOpacity>
)
}
 const styles = StyleSheet.create({
  actionbuttonregister:{height:60,alignItems:'center', backgroundColor: 'hotpink',color:'#fff',borderColor:'rgb(255,125,0)',borderStyle:'solid',borderWidth:1,paddingVertical:16,borderRadius:5, marginHorizontal:15,marginVertical:10},
  actionbuttontext:{color:'#fff',fontSize:18,fontWeight:'bold'},
 btnTextlogin:{color:'#242D61',fontWeight:'bold', fontSize:18, borderRadius:5, textAlign:'center', borderWidth:1, borderColor:'#ddd',paddingVertical:15,paddingHorizontal:10, justifyContent:'center',width:"100%", alignContent:'center',alignItems:'center', alignSelf:'center'},
    });