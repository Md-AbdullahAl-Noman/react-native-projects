import { View, Text } from 'react-native'
import React from 'react'
import DynamicComponent from '../components/DynamicComponent'
import InternelStyle from '../components/InternelStyle'

export default function index() {
  return (
  
    <View>
      
      <Text>index</Text>
      <DynamicComponent/>
      <InternelStyle/>
    </View>
  )
}