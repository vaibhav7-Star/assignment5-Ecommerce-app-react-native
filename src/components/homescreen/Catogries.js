import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hr80 , colors} from '../../../globals/global'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



const Categories = ({navigation}) => {
  return (
    <View style = {styles.catrgorycotainer}>
      <Text style ={{color:colors.text1 , elevation:20,fontSize:30 ,fontWeight:'bold' , marginLeft:'auto',marginRight:'auto'}}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >  
      <TouchableOpacity style = {styles.box} onPress={()=>navigation.navigate('electronics')}>  
      <Entypo name="light-bulb" size={24} color="black" />
      <Text>electronics</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('jeweleries')} style = {styles.box}>
      <FontAwesome name="diamond" size={24} color="black" />
      <Text>jewelery</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('mclothes')} style = {styles.box}>
      <Ionicons name="man" size={24} color="black" />
      <Text>M-wear</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('wclothes')} style={styles.box}>
      <Ionicons name="woman" size={24} color="black" />
      <Text>W-wear</Text>
      </TouchableOpacity>
      </ScrollView>  
   </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    catrgorycotainer:{
     width:'100%',
     backgroundColor:colors.col1,
     elevation:20,  
    //  paddingBottom:40
    margin:15
    },
    box:{
        justifyContent:'space-between',
        backgroundColor:colors.col1,
        margin:20,
        elevation:20,
        padding:10,
        borderRadius:10
    }
})