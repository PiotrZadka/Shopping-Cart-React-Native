import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../AppContext/AppContext'
import { FlatList, Button, Text, SafeAreaView, StatusBar, StyleSheet, Image, View} from 'react-native'; 

const CartPage = () => {
    const itemTotal = 0;
    const cartTotal = 0;

    const myContext = useContext(AppContext);

    const CartProduct = ( {item} ) =>{
      return(
        <View style={styles.item}>
            <Image source= {{uri: item.img}} style={styles.image}/>
            <Text style={styles.price}>{'Quantity '+ item.quantity}</Text>
            <Text style={styles.price}>{'Total '+'\u00A3'+ itemTotal}</Text>
            <Button title="+"></Button>
            <Button title="-"></Button>
        </View>
      )
    }

    const renderItem = ({ item }) => (
      <CartProduct item= {item} />
    );

    return(
        <SafeAreaView style={styles.container}>
          <FlatList 
            data={myContext.cartItems}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={{
            flexGrow: 1, 
            justifyContent: 'center',
          }}
          />
          <Text style={styles.price}>{'Cart total '+'\u00A3'+ cartTotal}</Text>
          <Button title="Checkout"></Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#25a8db',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 10,

    },
    image: {
      width: 50,
      height: 50,
    },
    price: {
        fontSize: 15
    },
    quanityButton:{
      marginVertical: 10,
      marginHorizontal: 10
    }
  });

export default CartPage