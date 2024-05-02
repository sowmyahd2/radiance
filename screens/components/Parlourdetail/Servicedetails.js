import React, { useState,useEffect,SafeAreaView } from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { useDispatch, useSelector } from 'react-redux';
import { fetchsericescategory,fetchsericessubcategory } from '../../redux/categorySlice';
import { Divider,List} from 'react-native-paper';

const Servicedetails = ({id}) => {
  const [activeSections, setActiveSections] = useState([]);
  const dispatch = useDispatch();
  const [catexpanded, setCatExpanded] = useState(true); // Corrected
  const [subcatexpanded, setSubcatExpanded] = useState(false); // Corrected
  useEffect(() => {
   dispatch(fetchsericescategory(id));
 }, []);
 const { services,servicestypes } = useSelector(state => state.category);

 const handlePress1 = (categoryId) => {
  // Close previously opened categories if the clicked category is different
  if (catexpanded[categoryId]) {
    setCatExpanded(prevExpanded => ({
      ...prevExpanded,
      [categoryId]: false
    }));
  } else {
    // Close previously opened categories
    const newCatExpanded = { ...catexpanded };
    Object.keys(catexpanded).forEach(id => {
      if (id !== categoryId) {
        newCatExpanded[id] = false;
      }
    });
    setCatExpanded(newCatExpanded);

    // Open the clicked category
    setCatExpanded(prevExpanded => ({
      ...prevExpanded,
      [categoryId]: true
    }));

    // Fetch subcategories
    dispatch(fetchsericessubcategory(categoryId,id));
  }
};

const list = () => {
  return (
    <FlatList
      data={services}
      keyExtractor={item => item.service_id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.service_name}</Text>
          <Divider style={styles.dividerpro} />  
        </View>
      )}
    />
  );
};
  return (
    <View >               
   
        <View style={styles.container}>
            <View style={styles.pagelayout}>
            <View >
          <View style={styles.textInputContainer}>
          <Text style={styles.header}>about parlour</Text>
          </View>
          <View >
          <Text> g a is conntectd graph having edges weight of the each edge is denoted by wt(e)let t is sapaiing tree og connected group g then weight of the spanning tree
            is denoted by wt(T)  and defined by a spanning tree is not 
          </Text>
          </View>
        </View>
        <Divider style={styles.dividerpro} /> 
                <View style={styles.departmentlist} >
                    <Text style={styles.header}>All Categories</Text>
                    <Divider style={styles.dividerpro} />                
                </View>
            </View>  
            <View style={styles.pagelayout}>
                <List.Section>           
                <FlatList
             
                    data={servicestypes}
                    keyExtractor={item => item.id.toString()}             
                    renderItem={({ item }) => (
                    <List.Accordion  style={styles.depname}
                        title={item.servicetype}
                        expanded={catexpanded[item.id]}
                       
                        activeOpacity={1} 
                        onPress={()=>handlePress1(item.id)}
                       >
                        <Divider style={styles.dividerpro} /> 
                        {list()}
                    </List.Accordion>
                    )}
                />               
                </List.Section>
            </View>
        </View>

 </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
   fontWeight:"bold",
   fontSize:25,
   color:"black",
   
    padding: 2,
    backgroundColor: '#F5FCFF',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default Servicedetails;
