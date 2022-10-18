export interface PurchaseInputDTO{
    product_cod: string;
    product_name: string;
    purchase_date: string;
    delivery_date: string;
    user_id: string;
    price: number;
    qty_cart: number;
}

export interface Purchase{
    id: string;
    product_cod: string;
    product_name: string;
    purchase_date: string;
    delivery_date: string;
    user_id: string;
    price: number;
    qty_cart: number;
}

export interface idPurchaseInputDTO {
    id: string;
    product_cod: string;
}

export interface editPurchaseInputDTO {
    qty_cart: number;
    id: string;
    product_cod: string;
}