import React, { useState, useEffect } from 'react'
import { commerce } from "./lib/commerce"
// import Products from "./components/Products/Products"
// import NavBar from "./components/NavBar/Navbar"

import { Products, NavBar } from "./components"

const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart ] =useState({})

    const fetchProducts = async () => {
        const { data } = await commerce.products.list()

        setProducts(data)
    }

    const fetchCart =async() => {
        setCart(await commerce.cart.retrieve())
    }

useEffect(()=> {
    fetchProducts()
    fetchCart()

},[])  //empty array-- only going to run at the start under render


console.log(cart)
// console.log(products)
    return (
        <div>
            <NavBar />
            <Products products ={products}/>

        </div>
    )
}

export default App
