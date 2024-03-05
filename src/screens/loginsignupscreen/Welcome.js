import React from 'react'
import { View , Text , StyleSheet , Image,  TouchableOpacity} from 'react-native'
import { hr80 } from '../../../globals/global'
import { colors } from '../../../globals/global'

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container} >
        <Text style = {styles.welcometext}> ShopEase</Text>
        <View style= {hr80}/>
      <Image style = {{opacity: 0.8, width:'100%',height:'30%', marginTop:40}} source={require('../../../assets/istockphoto-981506980-612x612.jpg')}/> 
      <View style = {{paddingTop:50}}>
      <View style= {hr80}/>
      <View style= {styles.text}>
        <Text style = {{color:'white', width:'80%'}}>find the best product  at lowest price</Text>
      </View>
      <View style= {hr80}/>
      </View>
      <View style={styles.btncontainer}>
      <TouchableOpacity onPress={()=>navigation.navigate('sign-up')}  style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('login')} style={[styles.button, styles.loginButton]}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default Welcome;


const styles = StyleSheet.create({
  
    container:{
        width:'100%',
        height:'100%',
       backgroundColor:colors.text1
    },

    welcometext:{
        width:'100%',  
        fontSize:40,
         alignItems:'center',
        justifyContent:'center',
    paddingTop:80,
     paddingLeft:100,
       color:'white'
    },
     text:{
        marginRight:'auto',
        marginLeft:'auto', 
     },
     btncontainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
      },
      button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 10,
      },
      loginButton: {
         backgroundColor: '#ffc107',
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
      }
})