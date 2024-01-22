import { createContext, useState } from 'react'
import phone from "../assets/iphone.png"
import bag from "../assets/bag.png"
import fridge from "../assets/fridge.png"
import laptop from "../assets/laptop.png"
import gym from "../assets/gym.png"
import shoe from   "../assets/shoe.png"

export const ShopContext = createContext(null);


const products = [
    {
        id:1,
        name:"Iphone",
        price:999,
        img:phone
    },
    {
        id:2,
        name:"Bag",
        price:99,
        img:bag
    },
    {
        id:3,
        name:"Gym",
        price:399,
        img:gym
    },
    {
        id:4,
        name:"Fridge",
        price:199,
        img:fridge
    },
    {
        id:5,
        name:"Laptop",
        price:1999,
        img:laptop
    },
    {
        id:6,
        name:"Shoe",
        price:90,
        img:shoe
    },
]

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < products.length + 1; i++){
        cart[i] = 0
    }
    return cart
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItems(prev => ({...prev, [itemId]: prev[itemId] + 1 }))
        // console.log(cartItems);
    }
    
    const removeFromCart = (itemId) => {
        setCartItems(prev => ({...prev, [itemId]: prev[itemId] - 1 }))
        // console.log(cartItems);
    }

    const getTotalCartAmont = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = products.find(product => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }

    const getTotalItemsInCart = () => {
        let totalItemsInCart = 0;
        for(const item in cartItems){
            if (cartItems.hasOwnProperty(item)) {
                totalItemsInCart += cartItems[item];
            }
        }
        return totalItemsInCart
    }

    const contextValue = {cartItems, addToCart, removeFromCart, getTotalCartAmont, getTotalItemsInCart}

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}
