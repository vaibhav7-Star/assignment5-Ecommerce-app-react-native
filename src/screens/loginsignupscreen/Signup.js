
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from 'react-native'
import { colors } from '../../../globals/global';
import { btn1 } from '../../../globals/global';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';
import { registerUser } from '../../../redux/Authslice';

 



const Signup = ({navigation}) => {
const [email,setemail] = useState('');
const [password,setpassword] = useState('');
const [emailfocus,setemailfocus]= useState(false);
const [passwordfocus, setpasswordfocus] = useState(false);
const [usernamefocus, setusernamefocus] = useState(false);
const[phonenofocus, setphonenofocus] = useState(false);
const [username, setusername] = useState('');
const [phoneNo , setphoneNo] = useState('')


const dispatch = useDispatch()

const handleregister = () => {
                          
   
    if (!email || !password || !username  || !phoneNo) {
   
        Toast.show({
            type: 'error',
            text1: 'all fields are required',
            visibilityTime: 3000,
        });
      }
      else{
    const newUser = {
        email,
        password,
      };
      dispatch(registerUser(newUser));
      navigation.navigate('login')
    }
}


  return (
 <View style = {styles.container}>
    <Text style = {styles.signuptext}>Sign up</Text>
    <View style = {styles.signupcontainer}>
        <View style = {styles.emailcontainer}>
        <AntDesign name="user" size={24} color= {usernamefocus == true ? colors.col2 : colors.text2} style={{paddingTop:12 ,opacity:0.8, paddingLeft:5}} />
    <TextInput style={{paddingLeft:10,fontSize:20, opacity:0.8}}   onChangeText={(text) => setusername(text)} placeholder='username'
    onFocus={()=>{
        setemailfocus(false)
        setpasswordfocus(false)
        setusernamefocus(true)
        setphonenofocus(false)
    }} 
     />
    </View>
    <View style = {{paddingTop:20}}>
    <View style = {styles.namecontainer}>
        <Entypo name="email" size={24} color= {emailfocus == true ? colors.col2 : colors.text2} style={{paddingTop:12 ,opacity:0.8, paddingLeft:5}} />
    <TextInput style={{paddingBottom:5,paddingLeft:10,fontSize:20, opacity:0.8}} onChangeText={setemail} placeholder='Email'
    onFocus={()=>{
        setemailfocus(true)
        setpasswordfocus(false)
        setusernamefocus(false)
        setphonenofocus(false)
    }} 
     />
    </View>
    </View>
    <View style = {styles.passwordcontainermain}>
    <View style = {styles.passwordcontainer}>
    <AntDesign name="lock" size={24} color= {passwordfocus == true ? colors.col2 : colors.text2} style={{paddingTop:12 ,opacity:0.8, paddingLeft:5}}/>
    <TextInput  onChangeText={setpassword} style={{paddingBottom:5,paddingLeft:10,fontSize:20, opacity:0.8}} placeholder='password'
    onFocus={()=>{ 
        setemailfocus(false)
        setpasswordfocus(true)
        setusernamefocus(false)
        setphonenofocus(false)
    }}
    />
    </View>
    </View>
    <View style = {styles.passwordcontainermain}>
    <View style = {styles.passwordcontainer}>
    <Feather name="phone"style = {{paddingTop:9, paddingLeft:7}} size={24} color= {phonenofocus == true ? colors.col2 : colors.text2} />
    <TextInput style={{paddingBottom:5,paddingLeft:10,fontSize:20, opacity:0.8}}  onChangeText={(text) => setphoneNo(text) } placeholder='phone No'
    onFocus={()=>{
        setemailfocus(false)
        setpasswordfocus(false)
        setusernamefocus(false)
        setphonenofocus(true)
    }}
    />
    </View>
    </View>
    <View style = {{paddingTop:20}}>
   <TouchableOpacity onPress={handleregister} style = {btn1}  >
    <Text style = {{color:'white',fontSize:25, alignItems:'center',justifyContent:'center' , fontWeight:'bold'}}>Sign up</Text>
   </TouchableOpacity>
   </View>
   <View style = {styles.container2}>
   <Text style = {{color:colors.col2 , paddingLeft:75 , paddingTop:20 , fontSize:20}}>or</Text>
   <Text style = {{color:'black', fontSize:30, paddingTop:10 , paddingLeft:15 , opacity:0.7}}>sign in with </Text>
   </View>
   <View style = {{flexDirection:'row',paddingTop:30 , justifyContent:'center', gap:30}}>
    <View style= {{width:45, borderRadius:7 , height:40 , backgroundColor:'white',elevation:20}}><AntDesign style = {{ paddingTop:5 , paddingLeft:5}}  name="google" size={34} color="red"  /></View>
    <View style= {{width:50, borderRadius:7 , height:42 , backgroundColor:'white',elevation:20}}><AntDesign style ={{ paddingTop:5 , paddingLeft:8}} name="facebook-square" size={34} color="blue" />
</View>
   </View>
   <View style = {{marginRight:'auto',marginLeft:'auto',paddingTop:40}}>
   <Text>already have an account?
    <Text onPress={()=>navigation.navigate('login')}  style = {{color:colors.col2}}>login</Text>
   </Text>
   </View>
   </View>
   <Toast ref={(ref) => Toast.setRef(ref)} />
 </View>
  )
}

export default Signup;

const styles = StyleSheet.create({
    container:{
     flex:1,
     alignItems:'center',
     justifyContent:'center'
    },
    signuptext:{
        color:colors.col2,
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
    namecontainer:{
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
       
    }
})
