import React, { useEffect, useState } from 'react';
import Navigation from "./src/Navigation/Navigation"
import AppContext from "./src/Components/AppContext/AppContext"
import getProducts from './src/Helpers/getProducts/getProducts';

const App = () => {
  const [ productsData, setProductsData ] = useState([])
  const [ cartContent, setCartContent ] = useState([])
  const updateProductList = async() =>{
    await getProducts().then( products =>{
      setProductsData(products)
    })
  }


  // I'm not too familair how state updates in react native across views.
  // I've tried to use Redux but to no avail, and decided to use context as i've been using it the most

  // Updating cart with product from Products Page works just fine, 
  // but the moment I visit the cart and product page again the context doesn't update the value. 
  // My guess would be to use useEffect on CartPage, or scrap the idea of context and apply Redux which I need to upskill myself.

  const updateCartContent = ( item ) =>{
    console.log(item)
    if(cartContent.includes(item)){
      const index = cartContent.findIndex((item => item.id == 1));
      cartContent[index].quantity++
    }else{
      item.quantity = 1
      setCartContent([...cartContent, item])
    }
  }

  const globalVariables = {
    products: productsData,
    cartItems: cartContent,
    updateProductList,
    updateCartContent
  }

  useEffect( () =>{
    updateProductList()
  }, [])

  return (  
    <AppContext.Provider value = { globalVariables }>
      <Navigation/>
    </AppContext.Provider>
  );
};
 
export default App;
