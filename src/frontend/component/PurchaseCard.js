import React from 'react'
import { ContainerSecundario } from '../pages/purchaselist-page/PurchaseListStyle'

export const PurchaseCard = (props) => {

    return (
        <ContainerSecundario>
        <p>{props.product.purchase_date}</p>
        <p>{props.product.delivery_date}</p>
        <p>{props.product.product_name}</p>
        <p>{props.product.price.toFixed(2)}</p>
        <p>{props.product.qty_cart}</p>
      </ContainerSecundario>
    )
}