import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

export default function StateInAction() {
    // const count=useState(0);
    // console.log(count);
    const [friends,setFriends]=useState(['Noone','Enemy','Aamir','Santo']);

    //add a new friend
    const addFriend=()=>{
        setFriends([...friends,'New Friend One','New Friend Two']);
    }
    //map and filter do not mutate the original array they returns new array.map applied the function to each element and returns new array 
    //filter applied the condition to each element and returns new array with elements that passed the condition
     
    const modifyFriend=()=>{
        setFriends(friends.map(f=>f==='Enemy'?"Not Enemy":f));
    }

  return (
    <View>
      <Text>StateInAction</Text>
      <Text >The list of friends:{friends}</Text>
      <Button title="Add your new friend" onPress={addFriend}/>
      <Button title="Modify this friend " onPress={modifyFriend}/>
    </View>
  )
}