import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { useReducer } from "react";
export default function UseReducerComp() {
  const [loading, setLoading] = useState(true);
  const initalState = {
    count: 0,
  };
  interface InitalState {
    count: number;
  }
  type Action = { type: "increment" } | { type: "decrement" };
  const reducer = (state:InitalState, action:Action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };

      default:
        throw new Error("Invalid action type");
    }
  };
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <View>
      <Text>UseReducerComp count:{state.count}</Text>
      <Button title="Increse" onPress={() => dispatch({ type: "increment" })} />
      <Button title="Decreaser" onPress={() => dispatch({ type: "decrement" })} />
    </View>
  );
}
