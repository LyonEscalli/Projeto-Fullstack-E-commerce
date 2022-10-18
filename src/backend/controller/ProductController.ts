import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";

export class ProductController {
  private productBusiness: ProductBusiness
  constructor() {
    this.productBusiness = new ProductBusiness()
  }

    public getAllProducts = async (req: Request, res: Response) => {
        try {

          const result = await this.productBusiness.getAllProducts()

          res.status(200).send(result);
        } catch (error: any) {
          res.status(400).send(error.message);
        }
    };

}