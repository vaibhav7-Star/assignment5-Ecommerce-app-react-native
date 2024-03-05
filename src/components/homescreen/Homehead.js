import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../../globals/global';

const Homeheadnav = ({navigaton}) => {
  return (
    <View style ={styles.navcontainer}>
     <AntDesign name="menu-unfold" size={24} color= {colors.col2} />
     <View style = {{flexDirection:'row',alignItems:'center'}}>
     <AntDesign name="amazon" size={34} color = {colors.col2} />
     </View>

     <TouchableOpacity onPress={()=>navigaton.navigate('cart')}>
     <AntDesign name="shoppingcart" size={30} color= {colors.col2} />
     </TouchableOpacity>

    </View>
  )
}

export default Homeheadnav

const styles = StyleSheet.create({
    navcontainer:{
        width:'100%',
        height:60,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      backgroundColor: colors.col1,
      elevation:20,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20
    }
})