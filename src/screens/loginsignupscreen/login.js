import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from 'react-native'
import { colors } from '../../../globals/global'
import { btn1 } from '../../../globals/global'
import { AntDesign } from '@expo/vector-icons';
import {  useSelector } from 'react-redux';
import Toast, { BaseToast } from 'react-native-toast-message'; 



const Login = ({navigation}) => {
const [emailfocus,setemailfocus]= useState(false);
const [passwordfocus, setpasswordfocus] = useState(false);
const [email, setemail] = useState(" ")
const [password , setpassword] = useState(" ")

const registeredUser = useSelector(state => state.auth.users[0]);

const handlelogin = () => {

if (!registeredUser || (!email && !password)) {
    Toast.show({
        type: 'error',
        text1: 'You are not a registered user. Please register.',
        visibilityTime: 3000,
    });
} else {
    if (email === registeredUser.email && password === registeredUser.password) {
        navigation.navigate('homescreen');
    } else {
        Toast.show({
            type: 'error',
            text1: 'Invalid credentials',
            visibilityTime: 3000,
        });
    }
}
}
  return (
 <View style = {styles.container}>
    <Text style = {styles.signuptext}>Sign in</Text>
    <View style = {styles.signupcontainer}>
        <View style = {styles.emailcontainer}>
        <AntDesign name="user" size={24} color= {emailfocus == true ? colors.text1 : colors.text2} style={{paddingTop:12 ,opacity:0.8, paddingLeft:5}} />
    <TextInput style={{paddingLeft:10,fontSize:20, opacity:0.8}} onChangeText={setemail} placeholder='Email'
    onFocus={()=>{
        setemailfocus(true)
        setpasswordfocus(false)
    }} 
     />
    </View>
    <View style = {styles.passwordcontainermain}>
    <View style = {styles.passwordcontainer}>
    <AntDesign name="lock" size={24} color= {passwordfocus == true ? colors.text1 : colors.text2} style={{paddingTop:12 ,opacity:0.8, paddingLeft:5}}/>
    <TextInput style={{paddingBottom:5,paddingLeft:10,fontSize:20, opacity:0.8}}  onChangeText={setpassword} placeholder='password'
    onFocus={()=>{
        setemailfocus(false)
        setpasswordfocus(true)
    }}
    />
    </View>
    </View>
    <View style = {{paddingTop:20}}>
   <TouchableOpacity onPressIn={handlelogin}   style = {btn1}  >
    <Text style = {{color:'white',fontSize:25, alignItems:'center',justifyContent:'center'}}>Sign in</Text>
   </TouchableOpacity>
   </View>
   <View style = {styles.container2}>
   <Text style = {{color:'grey', paddingLeft:20}}>
    forgot password ?
   </Text>
   <Text style = {{color:colors.col2 , paddingLeft:60 , paddingTop:20 , fontSize:20}}>or</Text>
   <Text style = {{color:'black', fontSize:30, paddingTop:10 , paddingLeft:15 , opacity:0.7}}>login with </Text>
   </View>
   <View style = {{flexDirection:'row',paddingTop:30 , justifyContent:'center', gap:30}}>
    <View style= {{width:45, borderRadius:7 , height:40 , backgroundColor:'white',elevation:20}}><AntDesign style = {{ paddingTop:5 , paddingLeft:5}}  name="google" size={34} color="red"  /></View>
    <View style= {{width:50, borderRadius:7 , height:42 , backgroundColor:'white',elevation:20}}><AntDesign style ={{ paddingTop:5 , paddingLeft:8}} name="facebook-square" size={34} color="blue" />
</View>
   </View>
   <View style = {{marginRight:'auto',marginLeft:'auto',paddingTop:30}}>
   <Text>Don't have an account?
    <Text onPress={()=>navigation.navigate('sign-up')}  style = {{color: colors.col2}}>Signup</Text>
   </Text>
   </View>
   </View>
   <Toast ref={(ref) => Toast.setRef(ref)} />

 </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
     flex:1,
     alignItems:'center',
     justifyContent:'center'
    },
    signuptext:{
        color:colors.text1,
        fontSize:35
    },
    signupcontainer:{
        width:'80%',
        paddingTop:30,
         flexDirection:'column',
        justifyContent:'space-between'
    },
    emailcontainer:{
         height:50,
         elevation:20,
         flexDirection:'row',
         backgroundColor:'white',
           
    },
    passwordcontainer:{
        height:50,
        elevation:20,
        backgroundColor:'white',
        flexDirection:'row'
    }
    ,passwordcontainermain:{
        paddingTop:20
    },
    container2:{
        marginLeft:'auto',
        marginRight:'auto',
        paddingTop:30,   
    }
})

