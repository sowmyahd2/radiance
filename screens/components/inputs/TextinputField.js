import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from 'react-native-paper';
export const TextinputField = (props,ref) => {
  return (

        <View ><TextInput  outlineColor='red'
                                                                   activeOutlineColor="red" style={{padding:5, margin:10, borderRadius:100}}  {...props} editable mode="outlined"/></View>

  );
};

 const styles = StyleSheet.create({

 textinput:{ flex:0.5,justifyContent:"center", alignContent:"center"},
 inputtype:{backgroundColor:'#fff',padding:100},

   });