import React, { useState } from "react";
import axios from "axios";
import {useForm} from "../../hooks/UseForm";
import { BASE_URL } from '../../constants/urls'
import { useNavigate } from "react-router-dom";
import { goToLoginPage, goToProductPage } from '../../routes/Coordinator'
import { Header, 
  Main, 
  Footer, 
  Body, 
  ContainerPrincipal, 
  InputContainer,
  Input,
  ErrorMessage,
  LoginButton,
  IconInput,
  ContainerSecundario
} from './SignupStyles'

export const SignupPage = () => {
  const navigate = useNavigate();

  const [form, onChange, cleanfields] = useForm({name:'', email:'', password:''})

  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeFake = (event) => {
    setConfirmPassword(event.target.value);
  };

  const signUp = () => {
    axios
      .post(`${BASE_URL}/user/signup`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("userName", res.data.userName)
        localStorage.setItem("userId", res.data.userId)
        alert("Usuário cadastrado com sucesso!")
        goToProductPage(navigate)
      })
      .catch((err) => alert(err.response.data.message));
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp();
    cleanfields();
    setConfirmPassword("");
  };

  return (
    <Body>
      <Header>
        <h2>Projeto Fullstack E-Commerce</h2>
      </Header>
      <Main>
        <ContainerPrincipal>
        <h2>
          Cadastrar
        </h2>
        <form onSubmit={onSubmitForm}>
          <InputContainer>
            <IconInput src="https://cdn-icons-png.flaticon.com/512/44/44948.png" alt="Icone de usuário"/>
            <Input
              name={"name"}
              value={form.name}
              onChange={onChange}
              placeholder={"Nome e sobrenome"}
              type="text"
              required
            />
          </InputContainer>
          <InputContainer>
            <IconInput src="https://cdn-icons-png.flaticon.com/512/54/54215.png" alt="Icone de usuário"/>
            <Input
              name={"email"}
              value={form.email}
              onChange={onChange}
              placeholder={"email@email.com"}
              type="text"
              required
            />
          </InputContainer>
          <InputContainer>
            <IconInput src="https://cdn-icons-png.flaticon.com/512/45/45486.png" alt="Icone de usuário"/>
            <Input
              name={"password"}
              value={form.password}
              onChange={onChange}
              placeholder={"Mínimo 6 caracteres"}
              type="password"
              required
            />
          </InputContainer>
          <InputContainer>
            <IconInput src="https://cdn-icons-png.flaticon.com/512/45/45486.png" alt="Icone de usuário"/>
            <Input
              name={"password"}
              value={confirmPassword}
              onChange={onChangeFake}
              label={"Confirmar"}
              placeholder={"Confirme a senha anterior"}
              type="password"
              required
            />
          </InputContainer>
          {form.password !== confirmPassword  ? 
              <ErrorMessage>Deve ser a mesma que a anterior</ErrorMessage> : 
          <></>}
          <ContainerSecundario>
            <LoginButton type={"submit"}>Enviar</LoginButton>
            <br/>
            <LoginButton onClick={() => goToLoginPage(navigate)}>Página de Login</LoginButton>
          </ContainerSecundario>
        </form>
        </ContainerPrincipal>
      </Main>
      <Footer>
        <p>All rights reserved © 2022</p>
      </Footer>
    </Body>
  );
};