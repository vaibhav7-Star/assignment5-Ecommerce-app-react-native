

import { StyleSheet, Text, View, StatusBar, TextInput, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import Homeheadnav from '../components/homescreen/Homehead'
import Products from '../components/homescreen/Products';
import Categories from '../components/homescreen/Catogries';
const { width, height } = Dimensions.get('window');

const Homescreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Homeheadnav navigaton={navigation} />
      <View style={styles.contentContainer}>
        <Categories navigation={navigation} />
        <Products />
      </View>
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%'
  },
  contentContainer: {
    width: '100%',
     height:'90%',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

})
