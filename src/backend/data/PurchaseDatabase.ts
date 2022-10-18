import BaseDataBase from "../data/BaseDatabase";
import { Purchase } from "../model/Purchase";

export class PurchaseDatabase extends BaseDataBase {

   protected tableName: string = "shopper_purchases";

   public async createPurchase(purchase: Purchase): Promise<void> {
      try {
        await PurchaseDatabase.connection
        .insert({
          id: purchase.id,
          product_cod: purchase.product_cod,
          product_name: purchase.product_name,
          purchase_date: purchase.purchase_date,
          delivery_date: purchase.delivery_date,
          user_id: purchase.user_id,
          price: purchase.price,
          qty_cart: purchase.qty_cart
        })
        .into(this.tableName);
      } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }

  public getCart = async (user_id: string) => {
    try {
      const result = await PurchaseDatabase.connection(this.tableName)
      .select()
      .where({user_id});
      return result;
    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message)
    }
  };

}

export default new PurchaseDatabase()