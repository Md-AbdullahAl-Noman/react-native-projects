import { View, Text } from 'react-native'
import React from 'react'
import DynamicComponent from '../components/DynamicComponent'
import InternelStyle from '../components/InternelStyle'
import ExternelStyle from '../components/ExternelStyle'
import ProductList from '../components/ProductList'

export default function index() {
  return (
  
    <View>
      
      {/* <Text>index</Text>
      <DynamicComponent/>
      <InternelStyle/>
      <ExternelStyle/> */}
      <ProductList/>
    </View>
  )
}