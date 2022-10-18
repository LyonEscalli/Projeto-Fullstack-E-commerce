import { PurchaseDatabase } from "../data/PurchaseDatabase";
import { MissingParameters, NotFound, ServerError, Unauthorized } from "../error/CustomError";
import { editPurchaseInputDTO, idPurchaseInputDTO, Purchase, PurchaseInputDTO } from "../model/Purchase";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";

export class PurchaseBusiness {
  private PurchaseDB: PurchaseDatabase
  private idGen: IdGenerator
  private tokenGen: TokenGenerator
  constructor() {
    this.PurchaseDB =  new PurchaseDatabase()
    this.idGen = new IdGenerator()
    this.tokenGen = new TokenGenerator()
  }

  public createPurchase = async (input: PurchaseInputDTO) => {
    try {
      const {product_cod, product_name, purchase_date, delivery_date, user_id, price, qty_cart} = input

      if (!product_cod || !product_name || !purchase_date || !delivery_date || !user_id || !price || !qty_cart) {
        throw new MissingParameters();
      }

      const id = this.idGen.generate()

      const purchase: Purchase = {
        id: id,
        product_cod,
        product_name,
        purchase_date, 
        delivery_date,
        user_id,
        price,
        qty_cart
      }

      await this.PurchaseDB.createPurchase(purchase)

    } catch (error: any) {
      throw new ServerError();
    }
  };

  public getCart = async (id: string) => {
    try {

      const result = await this.PurchaseDB.getCart(id)
      if(result.length < 1) {
        throw new NotFound();
      }

      return result

    } catch (error: any) {
        throw new ServerError();
    }
  };

}