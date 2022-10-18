import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { useNavigate } from 'react-router-dom'
import { goToProductPage, goToSignupPage } from '../../routes/Coordinator'
import { Header, 
  Main, 
  Footer, 
  Body, 
  ContainerPrincipal, 
  InputContainer,
  Input,
  SignButton,
  LoginButton,
  IconInput
} from './LoginStyle'

export const LoginPage = () => {
    const navigate = useNavigate()
  
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
 
    const onChangeInputLogin = (event) => {
      const newLogin = event.target.value
      setLogin (newLogin)
    }
  
    const onChangeInputPassword = (event) => {
      const newPassword = event.target.value
      setPassword (newPassword)
    }
  
    const loginFunction = () => {
  
      const body = {
        email: login,
        password: password
      }
  
      const header = 'Content-Type: application/json'
    
      axios
        .post(`${BASE_URL}/user/login`, body, header)
        .then((res) => {
          localStorage.setItem("token", res.data.token)
          localStorage.setItem("userName", res.data.userName)
          localStorage.setItem("userId", res.data.userId)
          goToProductPage(navigate)
        })
        .catch((err) => {
          alert("Usuário inválido")
        })
    }
  
    return (
      <Body>
        <Header>
          <h2>Projeto Fullstack E-Commerce</h2>
        </Header>
        <Main>
          <ContainerPrincipal>
            <h3>OLÁ VISITANTE!</h3>
            <p><b>LOGIN</b></p>
            <InputContainer>
              <IconInput src="https://cdn-icons-png.flaticon.com/512/44/44948.png" alt="Icone de usuário"/>
              <Input 
                type="email" 
                id="Email..."
                placeholder="Email de usuário"
                value={login}
                onChange={onChangeInputLogin} 
                required
              />
            </InputContainer>
            <InputContainer>
            <IconInput src="https://cdn-icons-png.flaticon.com/512/45/45486.png" alt="Icone de senha"/>
              <Input 
                type="password" 
                id="password" 
                placeholder="Senha"
                value={password}
                onChange={onChangeInputPassword}
                required
              />
            </InputContainer>
            <br />
            <LoginButton onClick={loginFunction}>Efetuar Login</LoginButton>
            <br />
            <SignButton onClick={() => goToSignupPage(navigate)}>Não possui uma conta? Cadastre-se aqui!</SignButton>
          </ContainerPrincipal>
        </Main>
        <Footer>
          <p>All rights reserved © 2022</p>
        </Footer>
      </Body>
    )
  }