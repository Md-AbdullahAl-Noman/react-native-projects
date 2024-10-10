import { View, Text, FlatList ,Image} from 'react-native'
import React from 'react'

export default function ProductList() {

    const products = [
        {
          image: "https://picsum.photos/200/300?random=1",
          name: "Product 1",
          rating: 4.5,
          price: 29.99,
        },
        {
          image: "https://picsum.photos/200/300?random=2",
          name: "Product 2",
          rating: 4.0,
          price: 19.99,
        },
        {
          image: "https://picsum.photos/200/300?random=3",
          name: "Product 3",
          rating: 3.5,
          price: 24.99,
        },
        {
          image: "https://picsum.photos/200/300?random=4",
          name: "Product 4",
          rating: 5.0,
          price: 39.99,
        },
        {
          image: "https://picsum.photos/200/300?random=5",
          name: "Product 5",
          rating: 4.2,
          price: 34.99,
        },
        {
          image: "https://picsum.photos/200/300?random=6",
          name: "Product 6",
          rating: 3.9,
          price: 21.99,
        },
        {
          image: "https://picsum.photos/200/300?random=7",
          name: "Product 7",
          rating: 4.3,
          price: 28.99,
        },
        
        
        {
          image: "https://picsum.photos/200/300?random=20",
          name: "Product 20",
          rating: 4.1,
          price: 28.99,
        },
        {
          image: "https://picsum.photos/200/300?random=21",
          name: "Product 21",
          rating: 3.7,
          price: 24.99,
        },
        {
          image: "https://picsum.photos/200/300?random=22",
          name: "Product 22",
          rating: 4.4,
          price: 32.99,
        },
        {
          image: "https://picsum.photos/200/300?random=23",
          name: "Product 23",
          rating: 4.0,
          price: 27.99,
        },
        {
          image: "https://picsum.photos/200/300?random=24",
          name: "Product 24",
          rating: 3.6,
          price: 21.99,
        },
        {
          image: "https://picsum.photos/200/300?random=25",
          name: "Product 25",
          rating: 4.6,
          price: 36.99,
        }
    ];
    interface ProductType{
        image: string;
        name: string;
        rating: number;
        price: number;
    }
    const productList=({item}:{item:ProductType})=>{
        return(
            <View>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
                <Text>{item.rating}</Text>
                <Image source={{uri:item.image}} style={{width:200,height:200,borderRadius:100,marginLeft:30}}/>
            </View>
        )
    }
  return (
    <View>
        <FlatList data={products} keyExtractor={(item,index)=>index.toString()} renderItem={productList}/>
    </View>
  )
}