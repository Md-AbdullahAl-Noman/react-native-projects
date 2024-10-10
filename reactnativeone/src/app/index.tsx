import { View, Text } from 'react-native'
import React from 'react'
import DynamicComponent from '../components/DynamicComponent'
import InternelStyle from '../components/InternelStyle'
import ExternelStyle from '../components/ExternelStyle'

export default function index() {
  return (
  
    <View>
      
      <Text>index</Text>
      <DynamicComponent/>
      <InternelStyle/>
      <ExternelStyle/>
    </View>
  )
}