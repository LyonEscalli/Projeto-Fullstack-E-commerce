import { Request, Response } from "express";
import { PurchaseBusiness } from "../business/PurchaseBusiness";
import { editPurchaseInputDTO, PurchaseInputDTO } from "../model/Purchase";

export class PurchaseController {
  private purchaseBusiness: PurchaseBusiness
  constructor() {
    this.purchaseBusiness = new PurchaseBusiness()
  }

      public createPurchase = async (req: Request, res: Response) => {
        try {

          const input: PurchaseInputDTO = {
            product_cod: req.body.product_cod,
            product_name: req.body.product_name,
            purchase_date: req.body.purchase_date,
            delivery_date: req.body.delivery_date,
            user_id: req.body.user_id,
            price: req.body.price,
            qty_cart: req.body.qty_cart
          }

          await this.purchaseBusiness.createPurchase(input)

          res.status(201).send({ message: "Produto adicionado com sucesso!"});
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };

      public getCart = async (req: Request, res: Response) => {
        try {

          const id: string = req.params.id

          const result = await this.purchaseBusiness.getCart(id)

          res.status(200).send(result);
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };

}