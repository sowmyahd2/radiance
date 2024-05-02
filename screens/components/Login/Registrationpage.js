import React, { useState,useRef,useCallback } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { TextinputField } from '../inputs/TextinputField';
import { Registerbutton,Loginbutton } from '../inputs/Button';
import { useSelector, useDispatch } from 'react-redux';
import { parlourregistraion } from '../../redux/parlourdetailSlice';
import { useNavigation } from '@react-navigation/native';
const Registrationpage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    parlourname: '',
    email: '',
    password: '',
    phone:'',
    ownername:'',
   ownerPhoto:'',
    pincode:'',
    address:'',
  
 
  });
  const navigation = useNavigation();
  const [errors, setErrors] = useState({
    parlourname: '',
    email: '',
    password: '',
    phone:'',
    ownername:'',
   ownerPhoto:'',
    pincode:'',
    address:'',
  });
  const handleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };
  const Registration = () => {
    let newErrors = { name: '', email: '', password: '' };
  if (!formData.pincode) {
      newErrors.pincode = 'Pincode is required';
    }
    if (!formData.parlourname) {
      newErrors.parlourname = 'Name is required';
    }
    if (!formData.ownername) {
      newErrors.ownername = 'Name is required';
    }
    if (!formData.phone) {
      newErrors.phone = 'phone number is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 8 characters long';
    }
 else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 8 characters long';
    }
    setErrors(newErrors);
    if (Object.values(newErrors).every(error => error === '')) {
      alert("Registration successful");
      const body = {
        "Phone": formData.phone,
        "Email": formData.email,
        "OwnerName": formData.ownername,
        "ParlourName": formData.parlourname,
        "Pincode": formData.pincode,
        "Address": formData.address,
        "DOB": "23/04/1990",
        "Age":"32",
        "OwnerPhoto":"sasas",
        "HomeDelivery":1,
        "status":0
      };
      dispatch(parlourregistraion(body));
    }

    
  };

  return (
    <View>
      <Text>Register Form</Text>
      <TextinputField   label="Pincode"   onChangeText={text => handleInputChange('pincode', text) }
       
        placeholder="Pincode" value={formData.pincode}/>
         {errors.pincode !== '' && <Text style={styles.error}>{errors.pincode}</Text>}
      <TextinputField   label="City" placeholder="Select City" value={formData.city}/>

      <TextinputField label="Parlour Name" placeholder="Parlour Name" onChangeText={text => handleInputChange('parlourname', text) } />
      {errors.parlourname ? (<Text style={{color:"red"}}>{errors.parlourname}</Text>):""}
      <TextinputField label="ownername" placeholder="ownername"  onChangeText={text => handleInputChange('ownername', text) } />
      {errors.ownername ? (<Text style={{color:"red"}}>{errors.ownername}</Text>):""}
      <TextinputField label="Email" placeholder="Email"  onChangeText={text => handleInputChange('email', text) } />
      {errors.email ? (<Text style={{color:"red"}}>{errors.email}</Text>):""}
      <TextinputField label="password" placeholder="password"  onChangeText={text => handleInputChange('password', text) } />
      {errors.password ? (<Text style={{color:"red"}}>{errors.password}</Text>):""}
      <TextinputField label="Phone" placeholder="Phone"  onChangeText={text => handleInputChange('phone', text) } />
      {errors.phone ? (<Text style={{color:"red"}}>{errors.phone}</Text>):""}
      <TextinputField label="Address" placeholder="Address"  onChangeText={text => handleInputChange('address', text) } />
      {errors.address ? (<Text style={{color:"red"}}>{errors.address}</Text>):""}
     <TextinputField label="DOB" placeholder="DOB"  onChangeText={text => handleInputChange('dob', text) } />
      <Registerbutton title="Register" onPress={Registration} />
    <Loginbutton title="Login" onPress={()=>navigation.navigate('Login')}/>
    </View>
  );
};
const styles = StyleSheet.create({
  error:{color:"red"},
      container:{flex:1,flexDirection:'column',backgroundColor:'#fff',},
      innercontainer:{flex:1, flexDirection:'column',marginHorizontal:15, marginTop:10,marginBottom:10, borderRadius:10,elevation:7, backgroundColor:'#fff',},
      pagelayout:{flex:1, flexDirection:'column',marginHorizontal:15},
      registercontinue:{marginVertical:10,marginHorizontal:25,},
      textcontinue:{fontSize:10,fontFamily:'inter'},
      formtab:{borderWidth:1,borderColor:'#ddd',elevation:3, backgroundColor:"#fff",marginBottom:15,borderBottomStartRadius:10, borderBottomEndRadius:10},
      textinput:{marginHorizontal:15,marginVertical:0},
      inputtype:{backgroundColor:'#fff',},
      inactiveactionbuttonregister:{height:60,alignItems:'center', backgroundColor:'#ccc',color:'#fff',borderColor:'rgb(255,125,0)',borderStyle:'solid',borderWidth:1,paddingVertical:16,borderRadius:5, marginHorizontal:15,marginVertical:10},
      actionbuttonregister:{height:60,alignItems:'center', backgroundColor:'rgb(255,125,0)',color:'#fff',borderColor:'rgb(255,125,0)',borderStyle:'solid',borderWidth:1,paddingVertical:16,borderRadius:5, marginHorizontal:15,marginVertical:10},
      actionbuttontext:{color:'#fff',fontSize:18,fontWeight:'bold'},
      inactivebuttontext:{color:'#ccc',fontSize:18,fontWeight:'bold'},
      btnTextlogin:{color:'#242D61',fontWeight:'bold', fontSize:18, borderRadius:5, textAlign:'center', borderWidth:1, borderColor:'#ddd',paddingVertical:15,paddingHorizontal:10, justifyContent:'center',width:"100%", alignContent:'center',alignItems:'center', alignSelf:'center'},
      btnText:{color:'#555',borderRadius:5, borderWidth:1, borderColor:'#ddd',paddingVertical:20,paddingHorizontal:15, justifyContent:'center',width:"100%", alignContent:'center',alignItems:'center', alignSelf:'center'},
      underlineStyleBase:{backgroundColor:'#eee', color:"#242D61",fontWeight:'bold', width:50,height:50, borderRadius:5, borderWidth:1,elevation:3,borderColor:'#ddd'},
      itemStyle:{paddingVertical:15},
     });
export default Registrationpage;