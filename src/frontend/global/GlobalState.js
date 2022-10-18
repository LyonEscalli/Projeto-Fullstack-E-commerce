import React, {useState} from 'react'
import { GlobalStateContext } from './GlobalStateContext'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'

const GlobalState = (props) => {

    const [cart, setCart] = useState([])
    const [products, setProducts] = useState(undefined)

    const getProductsData = () => {
        axios
        .get(`${BASE_URL}/product/`)
        .then((res) => {
            setProducts(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <GlobalStateContext.Provider value={{cart, setCart, products, setProducts, getProductsData}}>
        {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState