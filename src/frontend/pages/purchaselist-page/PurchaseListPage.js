import React, { useEffect } from 'react'
import { PurchaseCard } from '../../component/PurchaseCard'
import { BASE_URL } from '../../constants/urls'
import {useRequestData} from '../../hooks/UseRequestData'
import { useNavigate } from 'react-router-dom'
import { goToProductPage, goToLoginPage, goToCartPage } from '../../routes/Coordinator'
import { Header, 
  Main, 
  Footer, 
  Body, 
  ContainerPrincipal,
  LoginButton
} from './PurchaseListStyle'

export const PurchaseListPage = () => {
  const navigate = useNavigate()

  const token = localStorage.getItem("token")
  const userName = localStorage.getItem("userName")
  const userId = localStorage.getItem("userId")

  useEffect (() => {
    if(token === null) {
      goToLoginPage(navigate)
    }
  },[navigate])

  const [purchaseList, isLoading] = useRequestData(`${BASE_URL}/purchase/${userId}`)

  const allProducts = 
  purchaseList &&
  purchaseList.map((prod) => {
    return <>
       
      <PurchaseCard key={prod.id} product={prod}/>
    </>
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
         <LoginButton onClick={() => goToProductPage(navigate)}>Ver Produtos</LoginButton>
         <LoginButton onClick={() => goToCartPage(navigate)}>Carrinho</LoginButton>
         <LoginButton onClick={goToLogout}>Logout</LoginButton>
      </Header>
      <Main>
        <ContainerPrincipal>
          <h2>Meu Histórico de Compras</h2>
          <p><b>Data da compra | Data de entrega | Nome do Produto | Preço | Quantidade comprada</b></p>
          {isLoading && <p>Carregando...</p>}
          {!isLoading && purchaseList && purchaseList.length > 0 && allProducts }
          {!isLoading && purchaseList && purchaseList.length === 0 && (<p>Não há produtos no histórico de compras.</p>)}
        </ContainerPrincipal>
      </Main>
      <Footer>
        <p>All rights reserved © 2022</p>
      </Footer>  
      </Body>
    )
  }
  