import { View, Text } from "react-native";
import React from "react";

export default function DynamicComponent() {
  const name = "Noman";
  const mulitply = (a: number, b: number) => a * b;
  return (
    <View>
    
      <Text style={{backgroundColor:'red'}}>DynamicComponent the name is{name}</Text>
      <Text>2*2={mulitply(2, 2)}</Text>
    </View>
  );
}
