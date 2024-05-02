import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import { Registerbutton } from '../inputs/Button';
import { parlourreviews } from '../../redux/parlourdetailSlice';
import { useSelector, useDispatch } from 'react-redux';
const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [reviews, SetReviews] = useState("");
  const [comments, SetComments] = useState("");
const Registration=()=>{
  alert("Fd");
  const body={
    "Reviews":rating,
    "Comments":comments,
    "User_Id":1,
   "Parlour_Id":2

  };
  dispatch(parlourreviews(body));
}
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10 }}>
          <Text style={styles.headingText}>Name</Text>
          <View style={styles.resetContainer}>
            <Text style={styles.resetText}>Reset</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              editable ={true}
              value={reviews}
              onChangeText={SetReviews}
            />
          </View>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10 }}>
          <Text style={styles.headingText}>Stars</Text>
          <View style={styles.resetContainer}>
            <Text style={styles.resetText}>Reset</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.textInputContainer}>
            <StarRating
              rating={rating}
              starColor='hotpink'
              onChange={setRating} // Use onChange instead of onRatingStart
            />
          </View>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10 }}>
          <Text style={styles.headingText}>Review</Text>
          <View style={styles.resetContainer}>
            <Text style={styles.resetText}>Reset</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.textInputContainer}>
            <TextInput numberOfLines={5} value={comments}
              onChangeText={SetComments} placeholder='comments' />
          </View>
        </View>
      </View>
      <View style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
        <Registerbutton title="Apply"  onPress={Registration}/>
      </View>
    </ScrollView>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 20,
    padding: 10,
    elevation: 50,
    backgroundColor: "white",
  },
  textInputContainer: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
  },
  textInput: {
    padding: 10,
  },
  resetContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
  },
  resetText: {
    color: 'hotpink',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headingText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
