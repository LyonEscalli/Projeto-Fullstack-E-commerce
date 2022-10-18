import styled from 'styled-components'
import { backgroundColor, 
    secundaryBackgroundColor,
    primaryColor,
    secundaryColor,
    inputContainerColor 
} from '../../constants/GlobalColors'

export const Body = styled.body`
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
`

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: cursive;
    position: fixed;
    top: 0px;
    min-width: 100%;
    max-width: 100%;
    max-height: 5em;
    padding: 8px;
    border-bottom: 1px solid black;
    background-color: ${backgroundColor};
    color:${primaryColor};
`

export const Main = styled.div`
    font-family: cursive;
    background-color:${secundaryBackgroundColor};
    padding: 12% 0% 11% 0%;
`

export const Footer = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    background-color:${backgroundColor};
    border: 1px solid black;
    color:${primaryColor};
    padding: 0px 0px 0px 15px;
`

export const ContainerPrincipal = styled.div`
    background-color: ${backgroundColor};
    display: grid;
    justify-items: center;
    color: ${primaryColor};
    border-radius: 8%;
    margin: 0% 30% 0% 30%;
    padding: 2% 0% 2% 0%;
`

export const InputContainer = styled.div`
    background-color: ${inputContainerColor};
    border: 1px solid black;
    margin: 2% 2% 2% 2%;
    padding: 2% 2% 2% 2%;
`

export const Input = styled.input`
    border: none;
    outline: 0;
`

export const LoginButton = styled.button`
    border: none;
    border-radius: 25px;
    background-color: ${secundaryBackgroundColor};
    color: ${secundaryColor};
    padding: 2% 2% 2% 2%;
    &:hover {
        border: none;
        background-color: #696969;
        color: #F5F5F5;
    }
`

export const SignButton = styled.button`
    border: none;
    background-color: none;
    color: ${primaryColor};
    &:hover {
        color: #CD3333;
    }
`

export const IconInput = styled.img`
    height: 20px;
    width: 20px;
    border-radius: 50%;
`
