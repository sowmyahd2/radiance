import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registration from '../../screens/containers/Loginpages/';
import Login from '../containers/Loginpages/Login';
import HomePage from '../containers/Home';
import Parlourlist from '../containers/Parlourdetails';
import ParlourDetail from '../containers/Parlourdetails/parlourdetail';
import Reviewcontainer from '../containers/Parlourdetails/Reviews';
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Reviewcontainer' screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="Registration"    component={Registration} />
        <Stack.Screen name="Login"           component={Login} />
        <Stack.Screen name="HomePage"        component={HomePage} />
        <Stack.Screen name="Parlourlist"     component={Parlourlist} />
        <Stack.Screen name="ParlourDetail"   component={ParlourDetail}/>
        <Stack.Screen name="Reviewcontainer" component={Reviewcontainer}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
