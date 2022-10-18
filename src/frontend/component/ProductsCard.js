import React from 'react'
import { ContainerSecundário, ProductButton } from '../pages/product-page/ProductStyle'

export const ProductCard = (props) => {

    return (
        <ContainerSecundário>
        <p><b>Nome do Produto:</b> {props.product.name}</p>
        <p><b>Preço:</b> {props.product.price.toFixed(2)}</p>
        <p><b>Quantidade em Estoque:</b> {props.product.qty_stock}</p>
        <ProductButton onClick={() => props.addItemToCart(props.product)}> Adicionar ao Carrinho</ProductButton>
      </ContainerSecundário>
    )
}
  