import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function InternelStyle() {
  return (
    <View>
      <Text style={styles.nameContainer}>InternelStyle</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    nameContainer:{
        backgroundColor:'yellow',
        color:'magenta',
        padding:10,
        margin:5,

    }
})
