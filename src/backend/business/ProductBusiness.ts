import { ProductDatabase } from "../data/ProductDatabase";
import { NotFound, ServerError } from "../error/CustomError";

export class ProductBusiness {
  private ProductDB: ProductDatabase
  constructor() {
    this.ProductDB =  new ProductDatabase()
  }

  public getAllProducts = async () => {
    try {

      const result = await this.ProductDB.getAllProducts()
      if(result.length < 1) {
        throw new NotFound();
      }

      return result

    } catch (error: any) {
        throw new ServerError();
    }
  };

}