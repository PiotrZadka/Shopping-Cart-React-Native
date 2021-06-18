import React, { useContext } from 'react'
import AppContext from '../AppContext/AppContext'
import { Text, Button, View, StyleSheet, Image } from 'react-native'; 


const Product = ( props ) => {
    const { name, price, img }  = props.item
    const myContext = useContext(AppContext);

    const addItemToCart = () =>{
        myContext.updateCartContent(props.item)
    }
    return(
        <View style={styles.item}>
            <Text style={styles.title}>{name}</Text>
            <Image source= {{uri: img}} style={styles.image}/>
            <Text style={styles.price}>{'\u00A3'+price}</Text>
            <Button onPress={addItemToCart} title="Add to cart" style={styles.button}/>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#25a8db',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
    },
    image: {
        width: 200,
        height: 200,
    },
    price: {
        fontSize: 15
    }
  });

export default Product