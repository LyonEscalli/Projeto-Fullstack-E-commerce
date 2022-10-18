import BaseDataBase from "../data/BaseDatabase";

export class ProductDatabase extends BaseDataBase {

  protected tableName: string = "shopper_products";

  public getAllProducts = async () => {
    try {
      const result = await ProductDatabase.connection(this.tableName)
      .select()
      return result;
    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message)
    }
  };

}

export default new ProductDatabase()