import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToProductPage, goToPurchaseListPage, goToLoginPage, goToCartPage } from '../../routes/Coordinator'
import { Header, 
  Main, 
  Footer, 
  Body, 
  ContainerPrincipal,
  LoginButton
} from './ErrorStyle'

export const ErrorPage = () => {
  const navigate = useNavigate()

  const userName = localStorage.getItem("userName")

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
         <LoginButton onClick={() => goToPurchaseListPage(navigate)}>Ver Histórico de Compras</LoginButton>
         <LoginButton onClick={goToLogout}>Logout</LoginButton>
      </Header>
      <Main>
        <ContainerPrincipal>
          <h3>OPS! ALGO DEU ERRADO! :(</h3>
        </ContainerPrincipal>
      </Main>
      <Footer>
        <p>All rights reserved © 2022</p>
      </Footer>  
      </Body>
    )
  }
  