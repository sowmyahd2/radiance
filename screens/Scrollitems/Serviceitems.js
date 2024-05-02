import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { FlashList } from '@shopify/flash-list';
const ServiceItems = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const departments={
    data:[
      {
        "DepartmentId":1,
        "DepartmentShortName":"fdf",
        "img":"https://picsum.photos/700"
      },
      {
        "DepartmentId":2,
        "DepartmentShortName":"ffsdfddf",
        "img":"https://picsum.photos/700"
      },
      {
        "DepartmentId":3,
        "DepartmentShortName":"fdfdfdff",
        "img":"https://picsum.photos/700"
      },
      {
        "DepartmentId":4,
        "DepartmentShortName":"fdffddfd",
        "img":"https://picsum.photos/700"
      },
      {
        "DepartmentId":5,
        "DepartmentShortName":"fdfdfdfd",
        "img":"https://picsum.photos/700"
      },
      {
        "DepartmentId":6,
        "DepartmentShortName":"fdfdfddsdfd",
        "img":"https://picsum.photos/700"
      },
      {
        "DepartmentId":7,
        "DepartmentShortName":"fdfd",
        "img":"https://picsum.photos/700"
      },
      {
        "DepartmentId":8,
        "DepartmentShortName":"fdfdffdfd",
        "img":"https://picsum.photos/700"
      },
      {
        "DepartmentId":9,
        "DepartmentShortName":"9",
        "img":"https://picsum.photos/700"
      },
      {
        "DepartmentId":10,
        "DepartmentShortName":"10",
        "img":"https://picsum.photos/700"
      },
      {
        "DepartmentId":11,
        "DepartmentShortName":"11",
        "img":"https://picsum.photos/700"
      },
    ]
  }

console.log(departments.data);
 

const Renderitem = ({ item }) => {
    return (
      <View >
        <View style={styles.homeslidetop}>
        <Image  style={{borderWidth:2,borderRadius:50,borderColor:"hotpink",padding:10, margin:10}} source={{ uri: item.img, height:70, width:70,}}/>
        </View>
        <View>
          <Text style={styles.hometextheadtop}>{item.DepartmentShortName}</Text>
        </View>
      </View>
    );
  };
  

  return (
    <View style={styles.homeinnercontainer}>
      <View style={styles.homepagelayout}>
        <View style={styles.homelayout}>
          <View style={styles.homeslidebanner}>
            
            <FlatList
              data={departments.data}
              keyExtractor={(item) => item.DepartmentShortName.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <Renderitem item={item} />}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ServiceItems;
const styles = StyleSheet.create({        
   
   
  
});

