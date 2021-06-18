import React, { useEffect, useState, useContext } from 'react'
import AppContext from '../AppContext/AppContext'
import { FlatList, SafeAreaView, StyleSheet, StatusBar } from 'react-native'; 
import Product from '../Product/Product'

const ProductsPage = ( ) => {
    const myContext = useContext(AppContext);
    console.log(myContext.products)

    const renderItem = ({ item }) => (
        <Product item= {item} />
      );

    return(
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={myContext.products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    flexGrow: 1, 
                    justifyContent: 'center'
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
});


export default ProductsPage