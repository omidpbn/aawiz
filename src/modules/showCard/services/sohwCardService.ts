import { WebService } from "../../../shared/services/webService";
import { Product } from "../types/products";

export class ProductsAPI {
  static async getAll() {
    return WebService.get<Product[]>("", `/products`);
  }
}
