import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import LoginPage from '../../components/Login'
const Login = () => {
  return (
    <View style={styles.container}><LoginPage/></View>
  )
}



export default Login
const styles = StyleSheet.create({
  container:{
 flex:1,
 justifyContent:"center",
 elevation:10,
 backgroundColor:"pink",
 alignItems:"center"




  }
})