import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Authnavigation from './src/screens/loginsignupscreen/Authnavigation'
import { NavigationContainer } from '@react-navigation/native'

const Rootnavigation = () => {
  return (
 <NavigationContainer>
    <Authnavigation/>
 </NavigationContainer>
  )
}

export default Rootnavigation

const styles = StyleSheet.create({})