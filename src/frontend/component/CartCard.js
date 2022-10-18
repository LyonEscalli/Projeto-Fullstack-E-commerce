import React from 'react'
import { ContainerSecundário, ProductButton } from '../pages/cart-page/CartStyle'

export const CartCard = (props) => {

    return (
      <ContainerSecundário>
        <p><b>Nome do Produto:</b> {props.product.name}</p>
        <p><b>Preço:</b> {props.product.price}</p>
        <p><b>Quantidade:</b>{props.product.amount}</p>
        <ProductButton onClick={() => props.addProd(props.product)}>+</ProductButton>
        <ProductButton onClick={() => props.deleteProd(props.product)}>-</ProductButton>
      </ContainerSecundário>
    )
}