import styled from 'styled-components'
import { backgroundColor, 
    secundaryBackgroundColor,
    primaryColor,
    secundaryColor
} from '../../constants/GlobalColors'

export const Body = styled.body`
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-evenly;
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
    text-align: center;
    color: ${primaryColor};
    border-radius: 3%;
    margin: 0% 4% 0% 4%;
    padding: 2% 2% 2% 2%;
`

export const ContainerSecundario = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
    align-items: stretch;
    column-gap: 3%;
    margin: 0% 0% 0% 0%;
    padding: 1% 1% 1% 1%;
`

export const LoginButton = styled.button`
    border: none;
    border-radius: 25px;
    background-color: ${secundaryBackgroundColor};
    color: ${secundaryColor};
    margin: 0% 1% 0% 1%;
    padding: 1% 1% 1% 1%;
    &:hover {
        border: none;
        background-color: #696969;
        color: #F5F5F5;
    }
`

export const ProductButton = styled.button`
    border: none;
    border-radius: 25px;
    background-color: ${secundaryBackgroundColor};
    color: ${secundaryColor};
    height: 50px;
    width: 100px;
    margin: 10% 2% 2% 2%;
    padding: 2% 2% 2% 2%;
    &:hover {
        border: none;
        background-color: #696969;
        color: #F5F5F5;
    }
`