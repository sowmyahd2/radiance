import React from 'react';
import { View, Dimensions, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';


const Carouselitems = () => {
  const width = Dimensions.get('window').width;



  return (
    <View>
      <Carousel
        style={{ 
          flex: 1,
          borderWidth: 2,
          borderColor: 'black',  
        }}
        loop
        width={width}
        height={250}
        autoPlay={true}
        data={ImageItems}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ item, index }) => (
          <View>
            <Image
              source={{ uri: item }}
              style={{ width: 800, height: 250, resizeMode: 'cover' }}
              onError={() => console.log('Error loading image')}
              indicator={<ActivityIndicator />}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Carouselitems;

export const ImageItems = [
  "https://via.placeholder.com/400/FF5733/FFFFFF", // Orange
  "https://via.placeholder.com/400/FFC300/FFFFFF", // Yellow
  "https://via.placeholder.com/400/36D7B7/FFFFFF", // Turquoise
  "https://via.placeholder.com/400/9370DB/FFFFFF", // Purple
];

