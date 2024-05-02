import React,{useState} from 'react'
import { View, Text,StyleSheet,Image} from 'react-native';
import { Registerbutton,Loginbutton } from '../inputs/Button';
import { TextinputField } from '../inputs/TextinputField';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { parlourlogin } from '../../redux/parlourdetailSlice';
const LoginPage = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const parlourdetail = useSelector(state => state.parlourdetail.parlourdetail);
    console.log(parlourdetail);
    const [formData, setFormData] = useState({
    
      email: ''
     
    
   
    });
    const [errors, setErrors] = useState({
    
      email: '',
    
    });
    const handleInputChange = (fieldName, value) => {
      setFormData({ ...formData, [fieldName]: value });
    };
    const login = () => {
      let newErrors = { email: '' };

  
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Invalid email address';
      }
  
     
      setErrors(newErrors);
      if (Object.values(newErrors).every(error => error === '')) {
       
        const body = {
         
          "email": formData.email
          
        };
        dispatch(parlourlogin(body));
        
      }
  
      
    };
  
  return (
    <View style={styles.loginhome}>
      <Image style={styles.img}  source={require("../../images/banner1.jpeg")}/>
       <View >
       <TextinputField label="Email" placeholder="Email Address"  onChangeText={text => handleInputChange('email', text) } />
       {errors.email ? (<Text style={{color:"red"}}>{errors.email}</Text>):""}
       <TextinputField   label="Password"   
       
       placeholder="Password" />
       </View>
        <Registerbutton title="Login" onPress={login} />
        <Loginbutton title="Register" onPress={()=>navigation.navigate('Registration')}/>
    </View>
  )
}



export default LoginPage;
const styles = StyleSheet.create({
  loginhome:{
 width:"70%",
backgroundColor:"#fff",
padding:40,
elevation:40,



  },
  img:{
 
alignSelf:"center",
 borderRadius:50,


  }
})