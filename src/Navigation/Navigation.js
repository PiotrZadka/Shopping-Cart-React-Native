import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsPage from '../Components/ProductsPage/ProductsPage'
import CartPage from '../Components/CartPage/CartPage'
import { Text, View, Image } from 'react-native'; 

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name = "Products" component={ ProductsPage } />
                <Tab.Screen 
                    name = "Cart" 
                    component={ CartPage } 
                    options={
                        {
                            tabBarIcon: () =>{
                                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                                    <Image 
                                        resizeMode="contain"
                                        style={{
                                            width: 20,
                                            height: 20
                                        }}
                                    />
                                <Text
                                    style={{ fontSize: 12}}
                                >
                                    Hello
                                </Text>
                                </View>
                            }
                        }
                    }/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation ;
