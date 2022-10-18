import React, { useState, useEffect, useContext } from 'react'
import { ProductCard } from '../../component/ProductsCard'
import { useNavigate } from 'react-router-dom'
import { goToLoginPage, goToCartPage, goToPurchaseListPage } from '../../routes/Coordinator'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { Header, 
  Main, 
  Footer, 
  Body, 
  ContainerPrincipal,
  LoginButton
} from './ProductStyle'

export const ProductPage = () => {
  const navigate = useNavigate()

  const {cart, setCart, products, setProducts, getProductsData} = useContext(GlobalStateContext)
  const [isLoading, setIsLoading] = useState(false)

  const token = localStorage.getItem("token")
  const userName = localStorage.getItem("userName")

  useEffect (() => {
    if(token === null) {
      goToLoginPage(navigate)
    }
  },[navigate])

  useEffect (() => {
    if (products === undefined) {
    setIsLoading(true)
    getProductsData()
    setIsLoading(false)
    }
  },[])

  const addItemToCart = (newItem) => {
    if (newItem.qty_stock === 0) {
      alert("Produto em falta no estoque!")
    } else {
      const index = cart.findIndex((i)=> i.cod === newItem.cod)
      const listIndex = products.findIndex((i)=> i.cod === newItem.cod)

      const newCart = [...cart]
      const updatedList = [...products]


      if (index === -1) {
        //produto não está no carrinho

        const cartItem = {... newItem, amount: 1}
        newCart.push(cartItem)
        updatedList[listIndex].qty_stock -= 1
      } else {
        //produto já está no carrinho

        newCart[index].amount += 1
        updatedList[listIndex].qty_stock -= 1
      }

      setProducts(updatedList)
      setCart(newCart)
    }
  }

  const allProducts = products && products.map((prod) => {
    return <ProductCard key={prod.cod} product={prod} addItemToCart={addItemToCart}/>
  })

  const goToLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userName")
    localStorage.removeItem("userId")
    goToLoginPage(navigate)
  }
  
    return (
      <Body>
      <Header>
         <h3>Seja bem vindo, {userName}!</h3>
         <LoginButton onClick={() => goToCartPage(navigate)}>Carrinho</LoginButton>
         <LoginButton onClick={() => goToPurchaseListPage(navigate)}>Ver Histórico de Compras</LoginButton>
         <LoginButton onClick={goToLogout}>Logout</LoginButton>
      </Header>
      <Main>
        <ContainerPrincipal>
          <h2>Produtos disponíveis</h2>
          {isLoading && <p>Carregando...</p>}
          {!isLoading && products && products.length > 0 && allProducts }
          {!isLoading && products && products.length === 0 && (<p>Não há produtos disponíveis no momento, tente novamente mais tarde.</p>)}
          <br />
        </ContainerPrincipal>
      </Main>
      <Footer>
        <p>All rights reserved © 2022</p>
      </Footer>  
      </Body>
    )
  }
  