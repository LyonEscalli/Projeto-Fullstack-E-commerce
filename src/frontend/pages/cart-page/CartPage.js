import React, { useEffect, useContext } from 'react'
import {useForm} from "../../hooks/UseForm";
import axios from 'axios'
import { GlobalStateContext } from '../../global/GlobalStateContext';
import { CartCard } from '../../component/CartCard'
import { BASE_URL } from '../../constants/urls'
import { useNavigate } from 'react-router-dom'
import { goToProductPage, goToLoginPage, goToPurchaseListPage } from '../../routes/Coordinator'
import { Header, 
  Main, 
  Footer, 
  Body, 
  ContainerPrincipal,
  LoginButton,
  ContainerTerciario
} from './CartStyle'

export const CartPage = () => {
  const navigate = useNavigate()

  const {cart, setCart, products, setProducts} = useContext(GlobalStateContext)
  const [form, onChange, cleanfields] = useForm({date:''})
  const token = localStorage.getItem("token")
  const userName = localStorage.getItem("userName")
  const userId = localStorage.getItem("userId")

  useEffect (() => {
    if(token === null) {
      goToLoginPage(navigate)
    }
  },[navigate, cart])

  let totalPrice = 0

  cart.forEach((prod) => {
    totalPrice += Number(prod.price)*prod.amount
  })

  const addProd = (item) => {

    const index = cart.findIndex((i)=> i.cod === item.cod)
    const listIndex = products.findIndex((i)=> i.cod === item.cod)

    const newCart = [...cart]
    const updatedList = [...products]

    if (updatedList[listIndex].qty_stock === 0) {
      alert("Produto em falta no estoque!")
    } else {
      newCart[index].amount += 1

      if(updatedList[listIndex].qty_stock > 0) {
        updatedList[listIndex].qty_stock -= 1
      } else if (updatedList[listIndex].qty_stock < 0) {
        updatedList[listIndex].qty_stock = 0
      }
      
      setProducts(updatedList)
      setCart(newCart)
    }
  }

  const deleteProd = (item) => {

    const index = cart.findIndex((i)=> i.cod === item.cod)
    const listIndex = products.findIndex((i)=> i.cod === item.cod)

      const newCart = [...cart]
      const updatedList = [...products]

      if (newCart[index].amount === 1) {
        //só tem um item do produto no carrinho
        newCart.splice(index, 1)
        updatedList[listIndex].qty_stock += 1
      } else {
        //tem mais de um item do produto no carrinho
        newCart[index].amount -= 1
        updatedList[listIndex].qty_stock += 1
      }
      setProducts(updatedList)
      setCart(newCart)
  }

  const allProducts = 
  cart.map((prod) => {
    return <CartCard key={prod.cod} product={prod} addProd={addProd} deleteProd={deleteProd}/>
  })

  const goToLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userName")
    localStorage.removeItem("userId")
    goToLoginPage(navigate)
  }

  const getCurrentDate = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const newDate = today.toLocaleDateString().split().reverse().join()
    return newDate
  }

  const sendToBackend = () => {

    const header = 'Content-Type: application/json'

    for(let element of cart){
      const body = {
        product_cod: element.cod,
        product_name: element.name,
        purchase_date: getCurrentDate(),
        delivery_date: form.date.split('-').reverse().join('/'),
        user_id: userId,
        price: element.price,
        qty_cart: element.amount
      }  
      axios
        .post(`${BASE_URL}/purchase/new`, body, header)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  
  const onSubmitForm = (event) => {
    event.preventDefault();

    const today = new Date().toLocaleDateString().split('/').reverse().join('-')

    if (form.date < today) {
      alert("Informe uma data futura")
    } else {
      sendToBackend();
      cleanfields();
      setCart([])
      alert("Compra efetuada com sucesso!")
    }
  };

    return (
      <Body>
      <Header>
         <h3>Seja bem vindo, {userName}!</h3>
         <LoginButton onClick={() => goToProductPage(navigate)}>Ver Produtos</LoginButton>
         <LoginButton onClick={() => goToPurchaseListPage(navigate)}>Ver Histórico de Compras</LoginButton>
         <LoginButton onClick={goToLogout}>Logout</LoginButton>
      </Header>
      <Main>
        <ContainerPrincipal>
          <h2>Meu carrinho</h2>
          {cart && cart.length > 0 && allProducts }
          {cart && cart.length === 0 && (<p>Não há produtos no carrinho.</p>)}
          <h3>Total: {totalPrice.toFixed(2)}</h3>
          <br />
          <form onSubmit={onSubmitForm}>
          <ContainerTerciario>
            <label id="date">Informe a data de entrega do pedido:</label>
            <input
              name={"date"}
              value={form.date}
              onChange={onChange}
              type="date"
              required
            />
            <LoginButton type={"submit"}>Efetuar compra</LoginButton>
            </ContainerTerciario>
        </form>
        </ContainerPrincipal>
      </Main>
      <Footer>
        <p>All rights reserved © 2022</p>
      </Footer>  
      </Body>
    )
  }
  